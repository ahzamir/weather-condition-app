import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { getWeather } from '../../../redux/WeatherState/weatherState';

const WeatherInfo = ({ name }) => {
  const location = useLocation();
  const stateName = location.state.name;
  const locationName = name || stateName;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(locationName));
  }, []);
  const weatherInfo = useSelector((state) => (state.stateWeather));
  console.log(weatherInfo.location)
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <IoLocationSharp className="weatherLocationIcon" />
        <h1 className="weatherLocationName">{weatherInfo.location.name}</h1>
        <p>
          {weatherInfo.location.lat}
        </p>
        <p>
          {weatherInfo.location.lon}
        </p>
      </div>
      <div>
        ahmad
      </div>
    </div>
  );
};

export default WeatherInfo;
