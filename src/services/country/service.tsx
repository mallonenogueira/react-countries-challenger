import { api } from "services/api";
import Country from "./model";

interface Options {
  signal?: AbortSignal;
}

export default class CountryService {
  async findAll(options?: Options) {
    const { data } = await api.get<Country[]>(
      "https://restcountries.eu/rest/v2/all",
      options
    );
    return data;
  }

  async findByName(name: string, options?: Options) {
    const { data } = await api.get<Country[]>(
      `https://restcountries.eu/rest/v2/name/${name}`,
      options
    );
    return data;
  }
}
