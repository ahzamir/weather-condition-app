import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({
  name, cca3, flag, population, capital, region,
}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center p-3">
      <Link
        to={`/${name}/states`}
        className="text-decoration-none text-white fw-bold fs-5 fs-md-2 text-center"
      >
        <h3>
          {name}
        </h3>
        <div>
          <img
            src={flag}
            alt={name}
            className="img-fluid rounded-2 country-flag mb-3"
          />
          <p>
            cca3:
            {' '}
            {cca3}
          </p>
          <p>
            Population:
            {' '}
            {population}
          </p>
          <p>
            Region:
            {' '}
            {region}
          </p>
          <p>
            Capital:
            {' '}
            {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
