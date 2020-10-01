import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./index";

describe("Country card", () => {
  it("should render container", () => {
    const { container } = render(<Container />);

    const element = container.firstChild;

    expect(element).toHaveClass("container");
  });

  it("should children", () => {
    render(
      <Container>
        <h1>children test</h1>
      </Container>
    );

    expect(
      screen.getByRole("heading", { name: "children test" })
    ).toBeInTheDocument();
  });
});
