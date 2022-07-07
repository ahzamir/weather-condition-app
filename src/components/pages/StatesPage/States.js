import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import State from './State';
import WeatherInfo from '../WeatherPage/WeatherInfo';

const States = () => {
  const location = useLocation();
  const countryName = location.state.name;
  const countryState = useSelector((state) => (state.countries[countryName]));
  return (
    <div className="statesPage">
      <div className="weatherInfo padding">
        <WeatherInfo
          name={countryName}
        />
      </div>
      <div className="padding chooseState">
        <h2>
          States
        </h2>
        <p>
          Choose a state
        </p>
      </div>
      <div className="states padding">
        {countryState.states.map((state) => (
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
