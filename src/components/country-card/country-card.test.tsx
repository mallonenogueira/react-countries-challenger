import React from "react";
import { render, screen } from "@testing-library/react";
import CountryCard from "./index";

const country = {
  name: "Brazil",
  capital: "Brasília",
  region: "Americas",
  population: 206135893,
  flag: "https://restcountries.eu/data/bra.svg",
};
describe("Country card component", () => {
  it("should render labels", () => {
    render(<CountryCard {...country} />);

    const list = screen.getByRole("list");
    const selector = ".country-card__label";

    expect(list.querySelector(`li:nth-child(1) ${selector}`)).toHaveTextContent(
      "Population:"
    );
    expect(list.querySelector(`li:nth-child(2) ${selector}`)).toHaveTextContent(
      "Region:"
    );
    expect(list.querySelector(`li:nth-child(3) ${selector}`)).toHaveTextContent(
      "Capital:"
    );
  });

  it("should render country information", () => {
    render(<CountryCard {...country} />);

    expect(screen.getByRole("heading", { name: country.name })).toHaveClass(
      "country-card__title"
    );

    const list = screen.getByRole("list");
    const selector = ".country-card__value";

    expect(list.querySelector(`li:nth-child(1) ${selector}`)).toHaveTextContent(
      country.population.toLocaleString()
    );
    expect(list.querySelector(`li:nth-child(2) ${selector}`)).toHaveTextContent(
      country.region
    );
    expect(list.querySelector(`li:nth-child(3) ${selector}`)).toHaveTextContent(
      country.capital
    );
  });

  it("should render image", () => {
    render(<CountryCard {...country} />);

    const image = screen.getByRole("img", {
      name: `${country.name} flag`,
    });
    expect(image).toHaveAttribute("src", country.flag);
  });
});
