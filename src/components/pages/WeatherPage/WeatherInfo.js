import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import Carousel from 'react-multi-carousel';
import { getWeather } from '../../../redux/WeatherState/weatherState';
import snowy from '../../../aassets/weather-conditions/snowy.png';
import cloudy from '../../../aassets/weather-conditions/cloudy.png';
import rainy from '../../../aassets/weather-conditions/rainy.png';
import sunny from '../../../aassets/weather-conditions/sunny.png';
import thundery from '../../../aassets/weather-conditions/thundery.png';
import partlySunny from '../../../aassets/weather-conditions/partly-sunny.png';
import sunriseIcon from '../../../aassets/icons/sunrise.png';
import sunsetIcon from '../../../aassets/icons/sunset.png';
import humidityIcon from '../../../aassets/icons/humidity.png';
import windIcon from '../../../aassets/icons/wind.png';
import lowTemperatueIcon from '../../../aassets/icons/low-temperature.png';
import highTemperatureIcon from '../../../aassets/icons/high-temperatures.png';
import pressureIcon from '../../../aassets/icons/atmospheric.png';
import uvIcon from '../../../aassets/icons/uv.png';
import cloudIcon from '../../../aassets/icons/clouds-and-sun.png';
import 'react-multi-carousel/lib/styles.css';

const WeatherInfo = () => {
  const [day, setDay] = useState(0);
  const weatherInfo = useSelector((state) => (state.stateWeather));
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  const weaterLocation = useParams().name;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(weaterLocation));
  }, []);
  const weatherIcon = (weather) => {
    const weatherCondition = weather.toLowerCase();
    if (weatherCondition.includes('snow', 'sleet')) {
      return snowy;
    }
    if (weatherCondition.includes('cloud', 'overcast', 'fog', 'mist')) {
      return cloudy;
    }
    if (weatherCondition.includes('rain')) {
      return rainy;
    }
    if (weatherCondition.includes('sun', 'clear', 'sunny', 'fair')) {
      return sunny;
    }
    if (weatherCondition.includes('thunder', 'storm', 'hail')) {
      return thundery;
    }
    if (weatherCondition.includes('partly', 'drizzle')) {
      return partlySunny;
    }
    return sunny;
  };
  if (weatherInfo.length === 0) {
    return (
      <div className="pt-5 mt-5 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white weather-page">
      <div className="rounded-3 d-flex justify-content-between w-100">
        <div className="rounded-3 p-2 d-flex justify-content-between align-items-center background-dark weather-location">
          <div className="d-flex flex-column">
            <h2 className="text-center fw-bold text-uppercase mb-3 text-shadow fs-3">
              <IoLocationSharp className="color-primary" />
              {' '}
              {weatherInfo.location.name}
            </h2>
            <p>
              Latitude:
              {' '}
              {weatherInfo.location.lat}
            </p>
            <p>
              Longitude:
              {' '}
              {weatherInfo.location.lon}
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mb-3">
            <img src={weatherIcon(weatherInfo.current.condition.text)} alt="weather" className="img-fluid weather-icon mb-3" />
            <h2 className="text-center fw-bold text-shadow fs-3">{weatherInfo.current.temp_c}</h2>
            <h2 className="text-center fw-bold text-shadow fs-5">{weatherInfo.current.condition.text}</h2>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center rounded-3 p-2 background-dark weather-info justify-content-evenly">
          <div className="p-1 ps-3 pe-3 rounded-5 w-100 d-flex justify-content-between align-items-center background-dark mb-1 border border-1 border-white">
            <p className="text-center fw-bold text-shadow mb-0">
              Cloudliness:
              {weatherInfo.current.cloud}
            </p>
            <img src={cloudIcon} alt="cloud" className="img-fluid weather-condition-icon" />
          </div>
          <div className="p-1 ps-3 pe-3 rounded-5 w-100 d-flex justify-content-between align-items-center background-dark mb-1 border border-1 border-white">
            <p className="text-center fw-bold text-shadow mb-0">
              Max Temp:
              {weatherInfo.forecast.forecastday[0].day.maxtemp_c}
            </p>
            <img src={highTemperatureIcon} alt="air-quality" className="img-fluid weather-condition-icon" />
          </div>
          <div className="p-1 ps-3 pe-3 rounded-5 w-100 d-flex justify-content-between align-items-center background-dark mb-1 border border-1 border-white">
            <p className="text-center fw-bold text-shadow mb-0">
              Min Temp:
              {weatherInfo.forecast.forecastday[0].day.mintemp_c}
            </p>
            <img src={lowTemperatueIcon} alt="low-temprature" className="img-fluid weather-condition-icon" />
          </div>
          <div className="p-1 ps-3 pe-3 rounded-5 w-100 d-flex justify-content-between align-items-center background-dark mb-1 border border-1 border-white">
            <p className="text-center fw-bold text-shadow mb-0">
              Sunrise:
              {weatherInfo.forecast.forecastday[0].astro.sunrise}
            </p>
            <img src={sunriseIcon} alt="sunrise" className="img-fluid weather-condition-icon" />
          </div>
          <div className="p-1 ps-3 pe-3 rounded-5 w-100 d-flex justify-content-between align-items-center background-dark border border-1 border-white">
            <p className="text-center fw-bold text-shadow mb-0">
              Sunset:
              {weatherInfo.forecast.forecastday[0].astro.sunset}
            </p>
            <img src={sunsetIcon} alt="sunset" className="img-fluid weather-condition-icon" />
          </div>
        </div>
        <div className="rounded-3 p-2 d-flex flex-column align-items-center background-dark w-25">
          <h2 className="text-center fw-bold text-uppercase mb-2 text-shadow fs-1">
            {weatherInfo.location.localtime.split(' ')[1]}
          </h2>
          <p className="text-center fw-bold text-uppercase mb-1 text-shadow fs-5">
            {weatherInfo.location.localtime.split(' ')[0]}
          </p>
          <div className="row w-100 d-flex justify-content-center">
            <div className="col-5 d-flex flex-column align-items-center background-dark border border-1 border-white p-1 m-1">
              <img src={windIcon} alt="wind" className="img-fluid weather-quality-icon mb-1" />
              <h2 className="text-center fw-bold text-shadow mb-0">
                Wind
                <br />
                {' '}
                {weatherInfo.current.wind_kph}
                {' '}
                kph
              </h2>
            </div>
            <div className="col-5 d-flex flex-column align-items-center background-dark border border-1 border-white p-1 m-1">
              <img src={humidityIcon} alt="humidity" className="img-fluid weather-quality-icon mb-1" />
              <h2 className="text-center fw-bold text-shadow mb-0">
                Humidity
                <br />
                {' '}
                {weatherInfo.current.humidity}
                {' '}
                %
              </h2>
            </div>
            <div className="col-5 d-flex flex-column align-items-center background-dark border border-1 border-white p-1 m-1">
              <img src={pressureIcon} alt="pressure" className="img-fluid weather-quality-icon mb-1" />
              <h2 className="text-center fw-bold text-shadow mb-0">
                Pressure
                <br />
                {' '}
                {weatherInfo.current.pressure_mb}
                {' '}
                mb
              </h2>
            </div>
            <div className="col-5 d-flex flex-column align-items-center background-dark border border-1 border-white p-1 m-1">
              <img src={uvIcon} alt="uv" className="img-fluid weather-quality-icon mb-1" />
              <h2 className="text-center fw-bold text-shadow mb-0">
                UV
                <br />
                {' '}
                {weatherInfo.current.uv}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="fw-bold text-shadow text-white w-25">
          Select the day you want to see the hourly forecast for
        </span>
        <select
          className="form-select w-25 ms-2"
          aria-label="Default select example"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option value="0">Today</option>
          <option value="1">Tomorrow</option>
          <option value="2">Day after tomorrow</option>
        </select>
        <h2 className="text-center">
          Selected day:
          {' '}
          {weatherInfo.forecast.forecastday[day].date}
        </h2>
      </div>
      <div id="rooms-container" className="w-100">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container ms-2 me-2 pt-2 pb-2"
          deviceType={responsive.deviceType}
          partialVisible
          swipeable
          showDots
          itemClass="carousel-item-padding-40-px ps-md-4 pe-md-2 rounded-5 room-card"
          slidesToSlide={1}
          arrows
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {weatherInfo.forecast.forecastday[day].hour.map((hour) => (
            <div className="d-flex flex-column align-items-center" key={hour.time}>
              <h2>
                {hour.time.split(' ')[1]}
              </h2>
              <img src={weatherIcon(hour.condition.text)} alt="weather" className="weather-icon img-fluid w-25 h-25 mt-5 mb-5" />
              <h2>
                {hour.temp_c}
                {' '}
                °C
              </h2>
              <h2>
                {hour.condition.text}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WeatherInfo;
