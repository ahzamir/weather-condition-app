const GET_COUNTRY = 'my-app/countries/GET_COUNTRY';
const initialState = {};

const apiGetCountries = async (continentName) => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${continentName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const countries = await response.json();
  return countries;
};

const getCountries = (continentName) => async (dispatch) => {
  const countries = await apiGetCountries(continentName);
  const countriesData = {};
  countries.forEach((country) => {
    countriesData[country.name.common] = country;
  });
  dispatch({
    type: GET_COUNTRY,
    payload: countriesData,
  });
};

const countriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    default: return state;
  }
};

export default countriesReducers;
export { getCountries };
