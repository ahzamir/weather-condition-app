import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../../../redux/CountriesState/countriesState';
import Country from './Country';

const Countries = () => {
  const dispatch = useDispatch();
  const { continentName } = useParams();
  useEffect(() => {
    dispatch(getCountries(continentName));
  }, []);
  const countries = useSelector((state) => (state.countries));
  if (countries.length === 0) {
    return (
      <div className="pt-5 mt-5 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div data-testid="countriesContent" className="pt-5 pb-5 secondary-bg main-contents countriesPage">
      <div>
        <h2 className="text-white fw-bold fs-5 fs-md-2 text-center">
          World Weather
          <br />
          <span>Choose a country to see the weather</span>
        </h2>
        <h3 className="fw-bold fs-5 fs-md-2 text-center color-primary">
          {continentName}
          {' '}
          <span className="text-white">Countries</span>
        </h3>
      </div>
      <div className="countries p-3 p-md-5">
        {Object.values(countries).map((country) => (
          <Country
            key={country.cca3}
            name={country.name.common}
            cca3={country.cca3}
            flag={country.flags.png}
            population={country.population}
            capital={country.capital}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
