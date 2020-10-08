import { act, renderHook } from "@testing-library/react-hooks";
import { useCountries, useCountriesReturn } from "./use-countries";
import service from "services/country/service";

jest.mock("services/country/service", () => require("../../__mocks__/service"));
jest.useFakeTimers();

const makeSearch = (result: useCountriesReturn, search?: string) =>
  act(() => {
    const promise = result.makeSearch(search);
    jest.runAllTimers();
    return promise;
  });

describe("useContries()", () => {
  it("should set loading true when make request and set false when finish", async () => {
    const { waitForNextUpdate, result } = renderHook(() => useCountries());

    await act(async () => {
      const response = result.current.makeSearch();

      await waitForNextUpdate();

      expect(result.current.state.loading).toBeTruthy();

      jest.runAllTimers();

      return response;
    });

    expect(result.current.state.loading).toBeFalsy();
  });

  it("should set response of makeSearch on countries", async () => {
    const { result } = renderHook(() => useCountries());

    expect(result.current.state.countries).toHaveLength(0);

    await makeSearch(result.current);

    expect(result.current.state.countries).toHaveLength(1);
  });

  it("should set response of makeSearch on countries with search", async () => {
    const { result } = renderHook(() => useCountries());

    expect(result.current.state.countries).toHaveLength(0);

    await makeSearch(result.current, "With search");

    expect(result.current.state.countries).toHaveLength(2);
  });

  it("should set countries 0 when throw Error", async () => {
    const { result } = renderHook(() => useCountries());

    await makeSearch(result.current);

    expect(result.current.state.countries).toHaveLength(1);

    (service.findAll as jest.Mock).mockImplementationOnce(async () => {
      throw new Error("Test");
    });

    await makeSearch(result.current);

    expect(result.current.state.countries).toHaveLength(0);
  });
});
