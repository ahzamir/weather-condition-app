const GET_COUNTRY = 'my-app/countries/GET_COUNTRY';
const GET_COUNTRY_STATES = 'my-app/countries/GET_STATES'

const getCountries = async () => {
  const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const countries = await response.json();
  console.log(countries);
  dispatch({
    type: GET_COUNTRY,
    payload: countries.data,
  });
};

const getCountryStates = (name) => (
  {
    type: GET_COUNTRY_STATES,
    payload: name,
  }
);

export { getCountries, getCountryStates };
