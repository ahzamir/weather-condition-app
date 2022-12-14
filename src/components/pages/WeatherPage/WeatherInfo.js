import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { getWeather } from '../../../redux/WeatherState/weatherState';
import snowy from '../../../aassets/weather-conditions/snowy.png';
import cloudy from '../../../aassets/weather-conditions/cloudy.png';
import rainy from '../../../aassets/weather-conditions/rainy.png';
import sunny from '../../../aassets/weather-conditions/sunny.png';
import thundery from '../../../aassets/weather-conditions/thundery.png';
import partlySunny from '../../../aassets/weather-conditions/partly-sunny.png';

const WeatherInfo = () => {
  const weatherIcon = (weather) => {
    if (weather === 'Snow') {
      return snowy;
    }
    if (weather === 'Clouds') {
      return cloudy;
    }
    if (weather === 'Rain') {
      return rainy;
    }
    if (weather === 'Clear') {
      return sunny;
    }
    if (weather === 'Thunderstorm') {
      return thundery;
    }
    if (weather === 'Drizzle') {
      return partlySunny;
    }
    return snowy;
  };
  const weaterLocation = useParams().name
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(weaterLocation));
  }, []);
  const weatherInfo = useSelector((state) => (state.stateWeather));
  console.log(weatherInfo);
  const weather = weatherInfo?.current?.condition?.text;
  console.log(weather);
  if (!weatherInfo) {
    return <p>loading...</p>;
  }
  return (
    <div className="pt-5 mt-5">
      <div>
        <h1 className="text-center">
          <IoLocationSharp />
          {' '}
          {weatherInfo.name}
        </h1>

        <div className="d-flex justify-content-center">
          <img src={weatherIcon(weather)} alt="weather" />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
