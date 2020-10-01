import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  it("should show title", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", {
        name: "Where in the world?",
      })
    ).toBeInTheDocument();
  });

  it("should show title", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should render country information", () => {
    render(<Header />);
    const themSwitch = screen.getByRole("button");
    expect(themSwitch).toBeInTheDocument();
    expect(themSwitch).toHaveClass("theme-switch");
  });
});
