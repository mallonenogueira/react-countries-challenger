import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitch from "./index";
import * as ThemeContext from "theme-context";

const createUseThemeContextMock = (toggleDarkTheme = jest.fn()) => () => ({
  theme: "dark",
  toggleDarkTheme,
});

describe("Theme switch component", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should render button switch", () => {
    render(<ThemeSwitch />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("theme-switch");
  });

  it("should show dark icon", () => {
    render(<ThemeSwitch />);
    const icon = screen.getByRole("button").querySelector("i");
    expect(icon).toHaveClass("far fa-moon");
  });

  it("should show dark mode", () => {
    render(<ThemeSwitch />);
    expect(
      screen.getByRole("button", { name: "Dark Mode" })
    ).toBeInTheDocument();
  });

  it("should show light mode", () => {
    jest
      .spyOn(ThemeContext, "useThemeContext")
      .mockImplementation(createUseThemeContextMock());

    render(<ThemeSwitch />);

    expect(
      screen.getByRole("button", { name: "Light Mode" })
    ).toBeInTheDocument();
  });

  it("should show light icon", () => {
    jest
      .spyOn(ThemeContext, "useThemeContext")
      .mockImplementation(createUseThemeContextMock());

    render(<ThemeSwitch />);

    const icon = screen.getByRole("button").querySelector("i");
    expect(icon).toHaveClass("far fa-sun");
  });

  it("should toggle to be called on click", () => {
    const toggleDarkTheme = jest.fn();

    jest
      .spyOn(ThemeContext, "useThemeContext")
      .mockImplementation(createUseThemeContextMock(toggleDarkTheme));

    render(<ThemeSwitch />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(toggleDarkTheme).toBeCalled();
  });

  it("should switch dark/light mode on click", () => {
    const component = (
      <ThemeContext.ThemeProvider>
        <ThemeSwitch />
      </ThemeContext.ThemeProvider>
    );

    render(component);

    const lightButton = screen.getByRole("button", { name: "Dark Mode" });
    userEvent.click(lightButton);

    expect(
      screen.getByRole("button", { name: "Light Mode" })
    ).toBeInTheDocument();
  });
});
