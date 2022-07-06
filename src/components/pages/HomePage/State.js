import React from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../../redux/WeatherState/weatherState';

const State = ({ state }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => { dispatch(getWeather(state.name)); }}
    >
      {state.name}
    </button>
  );
};

export default State;
