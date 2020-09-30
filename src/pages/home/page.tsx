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

export default function Home({
  search,
  loading,
  countries,
  makeSearch,
}: Props) {
  return (
    <div>
      <Header />

      <Container>
        <InputSearch
          placeholder="Search for a country..."
          className="home__input"
          value={search}
          onChange={(event) => makeSearch(event.target.value)}
        />

        {buildContent(loading, countries)}
      </Container>
    </div>
  );
}

function buildContent(loading: boolean, countries: Country[]) {
  if (loading) {
    return <div className="home--loading">Loading...</div>;
  }

  if (!countries.length) {
    return (
      <div className="home--not-found">
        <div>
          No countries found <strong>:(</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </div>
  );
}
