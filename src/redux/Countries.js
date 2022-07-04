const getCountries = async () => {
  const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const countries = await response.json();
  console.log(countries);
  return countries;
};

export { getCountries };
