import { api } from "services/api";
import Country from "./model";

export default class CountryService {
  async findAll() {
    const { data } = await api.get<Country[]>(
      "https://restcountries.eu/rest/v2/all"
    );
    return data;
  }

  async findByName(name: string) {
    const { data } = await api.get<Country[]>(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    return data;
  }
}
