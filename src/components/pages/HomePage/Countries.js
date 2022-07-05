import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './Country';
import { getCountries } from '../../../redux/CountriesState/countriesState';

const Countries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const countries = useSelector((state) => (state.countries));
  return (
    <ul>
      <li>
        <h2>Countries</h2>
      </li>
      {countries.map((country) => (
        <Country
          key={country.iso3}
          name={country.name}
          states={country.states}
        />
      ))}
    </ul>
  );
};

export default Countries;
