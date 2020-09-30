import { useCallback, useEffect, useState } from "react";

import Country from "services/country/model";
import CountryService from "services/country/service";

const service = new CountryService();

interface CountriesType {
  countries: Country[];
  loading: boolean;
  search?: string;
}

const INITIAL_STATE = {
  countries: [],
  loading: false,
  search: undefined,
};

export function useCountries(props: { search: string }) {
  const [state, setState] = useState<CountriesType>({
    ...INITIAL_STATE,
    ...props,
  });

  const setLoading = useCallback((loading) => {
    setState((data) => ({ ...data, loading }));
  }, []);

  const setCountries = useCallback((countries) => {
    setState((data) => ({ ...data, loading: false, countries }));
  }, []);

  const setSearch = useCallback((search) => {
    setState((data) => ({ ...data, search }));
  }, []);

  const makeSearch = useCallback(
    (search?: string) => {
      setLoading(true);
      setSearch(search);

      if (search) {
        service.findByName(search).then(setCountries);
      } else {
        service.findAll().then(setCountries);
      }
    },
    [setCountries, setLoading, setSearch]
  );

  useEffect(() => {
    makeSearch();
  }, [makeSearch]);

  return {
    state,
    makeSearch,
  };
}
