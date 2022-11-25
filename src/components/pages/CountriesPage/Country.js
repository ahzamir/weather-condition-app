import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({
  name, cca3, flag, population, capital, region,
}) => {
  return (
    <div
      className="country"
    >
      <Link
        to={`/${name}/states`}
      >
        <h3 className="countryContents">
          {name}
        </h3>
        <div>
          <img
            className="countryContents"
            src={flag}
            alt={name}
          />
          <p>
            cca3:
            {' '}
            {cca3}
          </p>
          <p className="countryInfo">
            Population:
            {' '}
            {population}
          </p>
          <p className="countryInfo">
            Region:
            {' '}
            {region}
          </p>
          <p className="countryInfo">
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
