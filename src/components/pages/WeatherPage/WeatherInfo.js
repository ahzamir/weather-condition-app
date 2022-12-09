import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { getWeather } from '../../../redux/WeatherState/weatherState';

const WeatherInfo = () => {
  const weaterLocation = useParams().name
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(weaterLocation));
  }, []);
  const weatherInfo = useSelector((state) => (state.stateWeather));
  console.log(weatherInfo);
  if (!weatherInfo) {
    return <p>loading...</p>;
  }
  return (
    <div className="pt-5 mt-5">
      weather
    </div>
  );
};

export default WeatherInfo;
