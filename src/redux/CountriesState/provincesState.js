const apiUrl = 'https://countriesnow.space/api/v0.1/countries/states';

const apiGetCountriesStates = async (countryName) => {
    const response = await fetch(`${apiUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            country: countryName,
        }),
    });
    const countriesStates = await response.json();
    console.log(countriesStates);
    return countriesStates;
};