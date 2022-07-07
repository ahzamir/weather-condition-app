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
  if (!weatherInfo.weather) {
    return <p>loading...</p>;
  }
  return (
    <div className="weatherInfoPage">
      <ul className="padding">
        <li className="stateNameAndImage">
          <img src={weatherInfo.weather.condition.icon} alt="weater condition" />
          <div>
            <div>
              <div>
                <h4>
                  {weatherInfo.weather.condition.text}
                </h4>
              </div>
              <h1 className="tempratureC">
                {weatherInfo.weather.temp_c}
              </h1>
              <p className="weatherParagraph">
                {weatherInfo.weather.temp_f}
              </p>
            </div>
            <h2>
              {weatherInfo.name}
            </h2>
            <div className="weatherParagraph">
              Localtime:
              {' '}
              {weatherInfo.localtime}
            </div>
            <div className="weatherParagraph">
              Last Updated:
              {' '}
              {weatherInfo.weather.last_updated}
            </div>
          </div>
        </li>
        <li className="weatherInfoLocation">
          <div>
            <h4>
              Region:
              {' '}
              {weatherInfo.region}
            </h4>
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
          </div>
          <div className="weatherInfoLocation">
            <IoLocationSharp className="locationIcon" />
          </div>
        </li>
        <h4 className="weatherInfoPadding condition">
          Condition:
        </h4>
        <li className="weatherCondition weatherInfoPadding">
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
        </li>
        <li className="weatherInfoPadding">
          <h4>
            Air quality
          </h4>
          <div>
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
