import React from "react";
import Header from "components/header";
import Container from "components/container";
import InputSearch from "components/input-search";
import CountryCard from "components/country-card";
import Country from "services/country/model";

import "./style.scss";

interface Props {
  countries: Country[];
  loading: boolean;
  search: string;
  makeSearch: (search?: string) => void;
}

export default function Home({ search, countries, makeSearch }: Props) {
  return (
    <div>
      <Header />

      <Container>
        <InputSearch
          placeholder="Search for a country..."
          className="home__input"
          value={search}
          onChange={(event) => {
            makeSearch(event.target.value);
          }}
        />

        <div className="home">
          {countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </div>
      </Container>
    </div>
  );
}
