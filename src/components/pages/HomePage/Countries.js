import React from 'react';

import Country from './Country';

const Countries = () => {
  const countries = [{
    name: 'Afghanistan', iso3: 'AFG', iso2: 'AF', states: ['kabul', 'bamyan'],
  },
  {
    name: 'United state', iso3: 'UN', iso2: 'UN', states: ['new york', 'virginia'],
  },
  {
    name: 'Iran', iso3: 'IR', iso2: 'IR', states: ['Tehran', 'Mashhad'],
  }];
  return (
    <ul>
      <li>
        <h2>Countries</h2>
      </li>
      {countries.map((country) => (
        <Country
          key={country.name}
          name={country.name}
          states={country.states}
          id={country.iso3}
        />
      ))}
    </ul>
  );
};

export default Countries;
