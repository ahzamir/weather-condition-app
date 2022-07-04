import React from 'react';
import { getWeather } from '../../redux/Weather';

const WeatherInfo = () => {
  getWeather('Badakhshan');
  return (
    <div>Weather Info</div>
  );
};

export default WeatherInfo;
