const key = 'b134e251af58430f964152538220407';
const GET_WEATHER = 'my-app/states/GET_WEATHER';
const initialState = [];

const apiGetWeather = async (state) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${state}&aqi=yes`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const weatherinfo = await response.json();
  return weatherinfo;
};


export default weatherReducer;
export { getWeather };
