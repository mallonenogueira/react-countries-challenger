import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputSearch from "./index";

describe("Input search component", () => {
  it("should render elements and classnames", () => {
    render(<InputSearch value="" onChange={jest.fn()} className="test" />);

    const input = screen.getByRole("textbox");
    const label = input.parentElement;
    const icon = label?.querySelector("i");

    expect(input).toHaveClass("input-search__element");
    expect(label).toHaveClass("input-search", "test");
    expect(icon).toHaveClass("input-search__icon", "fas", "fa-search");
  });

  it("should have value attr", () => {
    render(<InputSearch value="teste value" onChange={jest.fn()} />);
    expect(screen.getByRole("textbox")).toHaveValue("teste value");
  });

  it("should update value when type", () => {
    const inputParams = {
      value: "",
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        inputParams.value = event.target.value;
      },
    };
    const { rerender } = render(<InputSearch {...inputParams} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("");

    userEvent.type(input, "teste type");
    rerender(<InputSearch {...inputParams} />);

    expect(input).toHaveValue("teste type");
  });

  it("should have placeholder attr", () => {
    render(<InputSearch placeholder="place" value="" onChange={jest.fn()} />);
    expect(screen.getByPlaceholderText("place")).toBeInTheDocument();
  });
});
