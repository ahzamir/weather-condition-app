import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import State from './State';
import { getCountriesStates } from '../../../redux/CountriesState/countryStatesState';
// import WeatherInfo from '../WeatherPage/WeatherInfo';

const States = () => {
  const countryName = useParams().name;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesStates(countryName));
  }, []);
  const countryStates = useSelector((state) => (state.countryStates));
  console.log(countryStates);
  return (
    <div className="statesPage main-contents" data-testid="statesContent">
      {/* <div className="weatherInfo">
        <WeatherInfo
          name={countryName}
        />
      </div> */}
      <div>
        <h2 className="text-white fw-bold fs-5 fs-md-2 text-center">
          World Weather
          <br />
          <span>Choose a state to see the weather</span>
        </h2>
        <h3 className="fw-bold fs-5 fs-md-2 text-center color-primary">
          {countryName}
          {' '}
          <span className="text-white">States</span>
        </h3>
      </div>
      <div className="states p-3 p-md-5">
        {countryStates.map((state) => (
          <State
            name={state.name}
            key={state.name}
            code={state.state_code}
          />
        ))}
      </div>
    </div>
  );
};

export default States;
