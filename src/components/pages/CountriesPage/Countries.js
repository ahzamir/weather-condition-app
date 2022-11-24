import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../../../redux/CountriesState/countriesState';
import Country from './Country';

const Countries = () => {
  const dispatch = useDispatch();
  const { continentName } = useParams();
  useEffect(() => {
    console.log(continentName);
    dispatch(getCountries(continentName));
  }, []);
  const countries = useSelector((state) => (state.countries));
  return (
    <div className="countriesPage" data-testid="countriesContent">
      <div className="homePageCover">
        <h1>World Weather</h1>
        <p>Choose the country</p>
      </div>
      <div className="padding">
        <h2 className="countriesHeader">Countries</h2>
      </div>
      <div className="padding countries">
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
