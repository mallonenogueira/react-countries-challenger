import { renderHook } from "@testing-library/react-hooks";
import { createDebounce, useDebounce } from "./use-debounce";

jest.useFakeTimers();

interface Props {
  wait?: number;
}

type Return = (cb: (...arg: any[]) => any, wait?: number | undefined) => void;

describe("createDebounce()", () => {
  it("should call callback after wait", () => {
    const callback = jest.fn();

    const debounce = createDebounce(100);
    debounce.call(callback);

    jest.advanceTimersByTime(50);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(50);

    expect(callback).toBeCalled();
  });

  it("should call callback after forceWait", () => {
    const callback = jest.fn();
    const debounce = createDebounce(1000);

    debounce.call(callback, 60);

    jest.advanceTimersByTime(70);

    expect(callback).toBeCalled();
  });

  it("should cancel timer with clear", () => {
    const callback = jest.fn();
    const debounce = createDebounce();

    debounce.call(callback);
    debounce.clear();

    jest.advanceTimersByTime(150);

    expect(callback).not.toBeCalled();
  });

  it("should return wait value", () => {
    const debounce = createDebounce(500);

    expect(debounce.wait).toEqual(500);
  });
});

describe("useDebounce()", () => {
  it("should called when useDebounce timer end", async () => {
    const { result } = renderHook(() => useDebounce());
    const callbackMock = jest.fn();

    result.current(callbackMock);

    expect(callbackMock).not.toBeCalled();

    jest.runAllTimers();

    expect(callbackMock).toBeCalled();
  });

  it("should clean and call when wait change", async () => {
    const { result, rerender } = renderHook<Props, Return>(
      ({ wait }) => useDebounce(wait),
      { initialProps: {} }
    );

    const callbackMock = jest.fn();
    result.current(callbackMock);

    rerender({ wait: 200 });
    result.current(callbackMock);

    jest.advanceTimersByTime(150);
    expect(callbackMock).not.toBeCalled();

    jest.advanceTimersByTime(50);
    expect(callbackMock).toBeCalled();
  });
});
