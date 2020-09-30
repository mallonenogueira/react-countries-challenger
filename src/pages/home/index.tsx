import React, { useCallback, useMemo } from "react";
import { RouteComponentProps } from "react-router";
import queryString from "query-string";

import Home from "pages/home/page";
import { useCountries } from "./use-countries";

export default function Container({ location, history }: RouteComponentProps) {
  const { state, setLoading, makeSearch } = useCountries();
  const query = useMemo<{ search?: string }>(
    () => queryString.parse(location.search),
    [location.search]
  );

  const handleSetSearch = useCallback(
    (search?: string) => {
      const queryParam = search ? { search } : {};
      const url = queryString.stringifyUrl({
        url: location.pathname,
        query: queryParam,
      });
      history.push(url);
    },
    [history, location.pathname]
  );

  return (
    <Home
      search={query.search || ""}
      countries={state.countries}
      loading={state.loading}
      setLoading={setLoading}
      setSearch={handleSetSearch}
      makeSearch={makeSearch}
    />
  );
}
