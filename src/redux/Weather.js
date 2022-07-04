const key = 'b134e251af58430f964152538220407';

const getWeather = async (state) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${state}&aqi=yes`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const weatherinfo = await response.json();
  console.log(weatherinfo);
  return weatherinfo;
};

export { getWeather };
