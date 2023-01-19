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
      <div className='text-white'>
        <div className="d-flex flex-column align-items-center text-white">
          <img src={weatherIcon(weatherInfo?.current?.condition?.text)} alt="weather" className='weather-icon img-fluid w-25 h-25 mt-5 mb-5' />
          <h2>{weatherInfo?.current?.temp_c}</h2>
          <h2>{weatherInfo?.current?.condition?.text}</h2>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2>Cloudliness: {weatherInfo?.current?.cloud}</h2>
          <h2>Max Temp: {weatherInfo?.forecast?.forecastday[0].day.maxtemp_c}</h2>
          <h2>Min Temp: {weatherInfo?.forecast?.forecastday[0].day.mintemp_c}</h2>
          <h2>Sunrise: {weatherInfo?.forecast?.forecastday[0].astro.sunrise}</h2>
          <h2>Sunset: {weatherInfo?.forecast?.forecastday[0].astro.sunset}</h2>
        </div>
        <div>
          <h2 className="text-center">
            <IoLocationSharp />
            {' '}
            {weatherInfo?.location?.name}
          </h2>
          <p>
            Latitude:
            {' '}
            {weatherInfo?.location?.lat}
          </p>
          <p>
            Longitude:
            {' '}
            {weatherInfo?.location?.lon}
          </p>
        </div>
        <div>
          <h2>
            {weatherInfo?.location?.localtime.split(' ')[1]}
          </h2>
          <p>
            {weatherInfo?.location?.localtime.split(' ')[0]}
          </p>
          <div>
            <h2>
              Wind:
              {' '}
              {weatherInfo?.current?.wind_kph}
              {' '}
              kph
            </h2>
            <h2>
              Humidity:
              {' '}
              {weatherInfo?.current?.humidity}
              {' '}
              %
            </h2>
            <h2>
              Pressure:
              {' '}
              {weatherInfo?.current?.pressure_mb}
              {' '}
              mb
            </h2>
            <h2>
              UV:
              {' '}
              {weatherInfo?.current?.uv}
            </h2>
          </div>
        </div>
        <div>
          <h2>
            {weatherInfo?.forecast?.forecastday[0].day.condition?.text}
          </h2>
          <p>
            {weatherInfo?.forecast?.forecastday[0].date}
          </p>
        </div>
      </div>
    </div >
  );
};

export default WeatherInfo;
