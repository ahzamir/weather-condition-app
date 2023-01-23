const apiUrl = 'https://countriesnow.space/api/v0.1/countries/states';
const GET_COUNTRY_STATES = 'my-app/countries/GET_COUNTRY_STATES';

const apiGetCountriesStates = async (countryName) => {
  const response = await fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: countryName,
    }),
  });
  const countriesStates = await response.json();
  return countriesStates;
};

const getCountriesStates = (countryName) => async (dispatch) => {
  const countryData = await apiGetCountriesStates(countryName);
  const countryStates = countryData.data.states;
  dispatch({
    type: GET_COUNTRY_STATES,
    payload: countryStates,
  });
};

const countriesStatesReducers = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRY_STATES:
      return action.payload;
    default: return state;
  }
};

export default countriesStatesReducers;
export { getCountriesStates };
