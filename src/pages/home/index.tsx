import React from "react";

import Home from "pages/home/page";
import { useCountries } from "./use-countries";

export default function Container() {
  const { state, makeSearch } = useCountries({ search: "" });

  return (
    <Home
      search={state.search || ""}
      countries={state.countries}
      loading={state.loading}
      makeSearch={makeSearch}
    />
  );
}
