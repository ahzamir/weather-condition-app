const GET_COUNTRY = 'my-app/countries/GET_COUNTRY';
const initialState = {};

const apiGetCountries = async () => {
  const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const countries = await response.json();
  return countries;
};

const getCountries = () => async (dispatch) => {
  const countries = await apiGetCountries();
  const countriesData = {};
  countries.data.forEach((country) => {
    countriesData[country.name] = country;
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
