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
    <div className="statesPage" data-testid="statesContent">
      {/* <div className="weatherInfo">
        <WeatherInfo
          name={countryName}
        />
      </div> */}
      <div className="padding chooseState">
        <h2>
          States
        </h2>
        <p>
          Choose a state:
          {' '}
          {countryStates.length}
          {' '}
          States
        </p>
      </div>
      <div className="states padding">
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
