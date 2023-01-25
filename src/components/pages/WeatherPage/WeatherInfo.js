import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import homePageCover from '../../../aassets/images/weather-world.svg';
import Carousel from 'react-multi-carousel';
import { getWeather } from '../../../redux/WeatherState/weatherState';
import snowy from '../../../aassets/weather-conditions/snowy.png';
import cloudy from '../../../aassets/weather-conditions/cloudy.png';
import rainy from '../../../aassets/weather-conditions/rainy.png';
import sunny from '../../../aassets/weather-conditions/sunny.png';
import thundery from '../../../aassets/weather-conditions/thundery.png';
import partlySunny from '../../../aassets/weather-conditions/partly-sunny.png';
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
    <div className="pt-5 mt-5 d-flex flex-column justify-content-center align-items-center text-white weather-page">
      <div className="rounded-3 p-5 d-flex justify-content-between w-100">
        <div className="rounded-3 p-2 d-flex justify-content-between align-items-center background-dark w-25">
          <div className="d-flex flex-column align-items-center">
            <h2 className="text-center">
              <IoLocationSharp className='color-primary' />
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
          <div className="d-flex flex-column align-items-center">
            <img src={homePageCover} alt="world-map" className="img-fluid w-75 h-75" />
          </div>
        </div>
        <div className="rounded-3 p-2 d-flex flex-column align-items-center background-dark">
          <div className="d-flex flex-column align-items-center">
            <img src={weatherIcon(weatherInfo.current.condition.text)} alt="weather" className="img-fluid weather-icon" />
            <h2>{weatherInfo.current.temp_c}</h2>
            <h2>{weatherInfo.current.condition.text}</h2>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h2>
              Cloudliness:
              {weatherInfo.current.cloud}
            </h2>
            <h2>
              Max Temp:
              {weatherInfo.forecast.forecastday[0].day.maxtemp_c}
            </h2>
            <h2>
              Min Temp:
              {weatherInfo.forecast.forecastday[0].day.mintemp_c}
            </h2>
            <h2>
              Sunrise:
              {weatherInfo.forecast.forecastday[0].astro.sunrise}
            </h2>
            <h2>
              Sunset:
              {weatherInfo.forecast.forecastday[0].astro.sunset}
            </h2>
          </div>
        </div>
        <div>
          <h2>
            {weatherInfo.location.localtime.split(' ')[1]}
          </h2>
          <p>
            {weatherInfo.location.localtime.split(' ')[0]}
          </p>
          <div>
            <h2>
              Wind:
              {' '}
              {weatherInfo.current.wind_kph}
              {' '}
              kph
            </h2>
            <h2>
              Humidity:
              {' '}
              {weatherInfo.current.humidity}
              {' '}
              %
            </h2>
            <h2>
              Pressure:
              {' '}
              {weatherInfo.current.pressure_mb}
              {' '}
              mb
            </h2>
            <h2>
              UV:
              {' '}
              {weatherInfo.current.uv}
            </h2>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-center">Select a day to see the weather for</h2>
        <select
          className="form-select w-50"
          aria-label="Default select example"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option value="0">Today</option>
          <option value="1">Tomorrow</option>
          <option value="2">Day after tomorrow</option>
        </select>
      </div>
      <div id="rooms-container" className="w-100">
        {/* show the date of the day selected */}
        <h2 className="text-center">
          {weatherInfo.forecast.forecastday[day].date}
        </h2>
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
