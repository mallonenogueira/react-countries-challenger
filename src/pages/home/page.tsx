import React, { useEffect } from "react";
import Header from "components/header";
import Container from "components/container";
import InputSearch from "components/input-search";
import CountryCard from "components/country-card";
import Country from "services/country/model";

import "./style.scss";
import { useDebounce } from "./use-debounce";

interface Props {
  countries: Country[];
  loading: boolean;
  search: string;
  setSearch: (search?: string) => void;
  makeSearch: (search?: string) => void;
  setLoading: (loading: boolean) => void;
}

function Home({
  countries,
  loading,
  setLoading,
  search,
  setSearch,
  makeSearch,
}: Props) {
  const debounce = useDebounce(300);

  useEffect(() => {
    setLoading(true);

    if (search) {
      debounce(() => makeSearch(search));
      return;
    }

    debounce(() => makeSearch(search), 0);
  }, [search, setLoading, makeSearch, debounce]);

  return (
    <div>
      <Header />

      <Container>
        <InputSearch
          placeholder="Search for a country..."
          className="home__input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
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

export default React.memo(Home);
