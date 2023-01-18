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
    const weatherCondition = weather?.toLowerCase();
    if (weatherCondition?.includes('snow', 'sleet')) {
      return snowy;
    }
    if (weatherCondition?.includes('cloud', 'overcast', 'fog', 'mist')) {
      return cloudy;
    }
    if (weatherCondition?.includes('rain')) {
      return rainy;
    }
    if (weatherCondition?.includes('sun', 'clear', 'sunny', 'fair')) {
      return sunny;
    }
    if (weatherCondition?.includes('thunder', 'storm', 'hail')) {
      return thundery;
    }
    if (weatherCondition?.includes('partly', 'drizzle')) {
      return partlySunny;
    }
    return sunny;
  };
  const weaterLocation = useParams().name
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(weaterLocation));
  }, []);
  const weatherInfo = useSelector((state) => (state.stateWeather));
  console.log(weatherInfo);
  console.log(weatherInfo?.current?.condition?.text);
  if (!weatherInfo) {
    return <p>loading...</p>;
  }
  return (
    <div className="pt-5 mt-5">
      <div>
        <h1 className="text-center">
          <IoLocationSharp />
          {' '}
          {weatherInfo?.location?.name}
        </h1>
        <div className="d-flex justify-content-center">
          <img src={weatherIcon(weatherInfo?.current?.condition?.text)} alt="weather" className='weather-icon img-fluid w-25 h-25 mt-5 mb-5' />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
