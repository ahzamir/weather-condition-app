import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({
  name, cca3, flag, population, capital,
}) => (
  <div className="d-flex flex-column align-items-center justify-content-center text-center p-3 country">
    <Link
      to={`/${name}/states`}
      className="text-decoration-none text-white fw-bold fs-5 fs-md-2 text-center"
    >
      <div>
        <h3 className="color-primary fw-bold fs-5 fs-md-2 text-center">
          {cca3}
        </h3>
        <img
          src={flag}
          alt={name}
          className="img-fluid rounded-2 country-flag mb-3 countryFlag"
        />
        <h3 className="text-white fw-bold fs-5 fs-md-2 text-center">
          {name}
        </h3>
        <p className="text-white fw-bold fs-6 fs-md-3 text-center">
          Capital:
          {' '}
          {capital}
        </p>
        <p className="text-white fw-bold fs-6 fs-md-3 text-center">
          Population:
          {' '}
          {population}
        </p>
      </div>
    </Link>
  </div>
);

export default Country;
