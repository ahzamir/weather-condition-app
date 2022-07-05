import { combineReducers } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducers from './CountriesState/countriesState';

const rootReducer = combineReducers({
  countries: countriesReducers,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
