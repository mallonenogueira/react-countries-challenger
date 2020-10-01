import React from "react";
import Country from "services/country/model";

import "./style.scss";

function formatPopulation(population: number) {
  return population.toLocaleString();
}

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
}: Country) {
  return (
    <div key={name} className="country-card">
      <div className="country-card__image">
        <img src={flag} alt={`${name} flag`} />
      </div>

      <div className="country-card__content">
        <h2 className="country-card__title">{name}</h2>

        <ul>
          <li>
            <span className="country-card__label">Population: </span>
            <span className="country-card__value">
              {formatPopulation(population)}
            </span>
          </li>

          <li>
            <span className="country-card__label">Region: </span>
            <span className="country-card__value">{region}</span>
          </li>

          <li>
            <span className="country-card__label">Capital: </span>
            <span className="country-card__value">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
