import React from 'react';
import { useSelector } from 'react-redux';

const WeatherInfo = () => {
  const weatherInfo = useSelector((state) => (state.stateWeather[0]));
  return (
    <div>
      <ul>
        <li>
          Name:
          {' '}
          {weatherInfo.name}
        </li>
        <li>
          Region:
          {' '}
          {weatherInfo.region}
        </li>
        <li>
          <div>
            Localtime:
            {' '}
            {weatherInfo.localtime}
          </div>
          <div>
            Last Updated:
            {' '}
            {weatherInfo.weather.last_updated}
          </div>
        </li>
        <li>
          <div>
            <p>
              Lat:
              {' '}
              {weatherInfo.lat}
            </p>
            <p>
              Lon:
              {' '}
              {weatherInfo.lon}
            </p>
          </div>
        </li>
        <li>
          <div>
            <h3>
              {weatherInfo.weather.temp_c}
            </h3>
            <p>
              {weatherInfo.weather.temp_f}
            </p>
          </div>
          <div>
            <h4>
              {weatherInfo.weather.condition.text}
            </h4>
            <img src={weatherInfo.weather.condition.icon} alt="weater condition" />
          </div>
          <div>
            Cloud:
            {' '}
            {weatherInfo.weather.cloud}
          </div>
          <div>
            Feelslike_c:
            {' '}
            {weatherInfo.weather.feelslike_c}
          </div>
          <div>
            Pressure in:
            {' '}
            {weatherInfo.weather.pressure_in}
          </div>
          <div>
            Pressure mb:
            {' '}
            {weatherInfo.weather.pressure_mb}
          </div>
          <div>
            UV:
            {' '}
            {weatherInfo.weather.uv}
          </div>
          <div>
            Air quality
            <p>
              Co:
              {' '}
              {weatherInfo.weather.air_quality.co}
            </p>
            <p>
              NO2:
              {' '}
              {weatherInfo.weather.air_quality.no2}
            </p>
            <p>
              O3:
              {' '}
              {weatherInfo.weather.air_quality.o3}
            </p>
            <p>
              pm2_5:
              {' '}
              {weatherInfo.weather.air_quality.pm2_5}
            </p>
            <p>
              pm10:
              {' '}
              {weatherInfo.weather.air_quality.pm10}
            </p>
            <p>
              So2:
              {' '}
              {weatherInfo.weather.air_quality.so2}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherInfo;
