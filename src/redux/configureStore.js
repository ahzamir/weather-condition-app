import { combineReducers } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducers from './CountriesState/countriesState';
import countryStatesReducers from './CountriesState/countryStatesState';
import weatherReducer from './WeatherState/weatherState';

const rootReducer = combineReducers({
  countries: countriesReducers,
  countryStates: countryStatesReducers,
  stateWeather: weatherReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
