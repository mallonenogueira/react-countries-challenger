import { useCallback, useRef, useState } from "react";

import Country from "services/country/model";
import service from "services/country/service";

export interface CountriesType {
  countries: Country[];
  loading: boolean;
}

const INITIAL_STATE = {
  countries: [],
  loading: false,
};

export interface useCountriesReturn {
  state: CountriesType;
  makeSearch: (search?: string | undefined) => Promise<void>;
  setLoading: (loading: any) => void;
}

export function useCountries(): useCountriesReturn {
  const [state, setState] = useState<CountriesType>(INITIAL_STATE);
  const controllerRef = useRef<AbortController | null>(null);

  const setLoading = useCallback((loading) => {
    setState((data) => ({ ...data, loading }));
  }, []);

  const setCountries = useCallback((countries) => {
    setState((data) => ({ ...data, loading: false, countries }));
  }, []);

  const makeSearch = useCallback(
    async (search?: string) => {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();
      const options = {
        signal: controllerRef.current.signal,
      };

      const handleRequest = (request: Promise<Country[]>) => {
        request
          .then(setCountries)
          .then(() => (controllerRef.current = null))
          .catch(() => setCountries([]));
      };

      setLoading(true);

      if (search) {
        await handleRequest(service.findByName(search, options));
      } else {
        await handleRequest(service.findAll(options));
      }
    },
    [setCountries, setLoading]
  );

  return {
    state,
    makeSearch,
    setLoading,
  };
}
