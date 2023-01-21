import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { getWeather } from '../../../redux/WeatherState/weatherState';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import snowy from '../../../aassets/weather-conditions/snowy.png';
import cloudy from '../../../aassets/weather-conditions/cloudy.png';
import rainy from '../../../aassets/weather-conditions/rainy.png';
import sunny from '../../../aassets/weather-conditions/sunny.png';
import thundery from '../../../aassets/weather-conditions/thundery.png';
import partlySunny from '../../../aassets/weather-conditions/partly-sunny.png';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const WeatherInfo = () => {
  const weaterLocation = useParams().name
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(weaterLocation));
  }, []);
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
  const CustomRightArrow = ({ onClick }) => (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        zIndex: '1',
        backgroundColor: '#97BF11',
        border: 'none',
        borderRadius: '50% 0 0 50%',
        width: '80px',
        height: '60px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <BiRightArrow />
    </button>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <button
      type="button"
      className="btn btn-primary arrows"
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        zIndex: '1',
        backgroundColor: '#97BF11',
        border: 'none',
        borderRadius: '0 50% 50% 0',
        width: '80px',
        height: '60px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <BiLeftArrow />
    </button>
  );
  console.log(weatherInfo);
  if (weatherInfo.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 mt-5 pt-5 mt-md-0 pt-md-0">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } if (weatherInfo.length > 0) {
    return (
      <div className="pt-5 mt-5">
        <div className='text-white'>
          <div className="d-flex flex-column align-items-center text-white">
            <img src={weatherIcon(weatherInfo.current.condition.text)} alt="weather" className='weather-icon img-fluid w-25 h-25 mt-5 mb-5' />
            <h2>{weatherInfo.current.temp_c}</h2>
            <h2>{weatherInfo.current.condition.text}</h2>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h2>Cloudliness: {weatherInfo.current.cloud}</h2>
            <h2>Max Temp: {weatherInfo.forecast.forecastday[0].day.maxtemp_c}</h2>
            <h2>Min Temp: {weatherInfo.forecast.forecastday[0].day.mintemp_c}</h2>
            <h2>Sunrise: {weatherInfo.forecast.forecastday[0].astro.sunrise}</h2>
            <h2>Sunset: {weatherInfo.forecast.forecastday[0].astro.sunset}</h2>
          </div>
          <div>
            <h2 className="text-center">
              <IoLocationSharp />
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
              dotListClass="custom-dot-list-style carousel-dots"
              renderDotsOutside
              itemClass="carousel-item-padding-40-px ps-md-4 pe-md-2 rounded-5 room-card"
              slidesToSlide={1}
              arrows
              customRightArrow={<CustomRightArrow onClick={() => { }} />}
              customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
              removeArrowOnDeviceType={['tablet', 'mobile']}
            >
            </Carousel>
          </div>
        </div >
      </div >
    );
  };
};

export default WeatherInfo;
