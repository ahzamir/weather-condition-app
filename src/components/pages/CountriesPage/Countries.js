import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Countries = () => {
  const dispatch = useDispatch();
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
            key={country.iso3}
            name={country.name}
            states={country.states}
            iso3={country.iso3}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
