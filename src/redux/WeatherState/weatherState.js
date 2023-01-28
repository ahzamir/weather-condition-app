const key = 'b134e251af58430f964152538220407';
const GET_WEATHER = 'my-app/states/GET_WEATHER';
const initialState = [];

const apiGetWeather = async (name) => {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${name}&days=3&aqi=yes`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const weatherinfo = await response.json();
  return weatherinfo;
};

const getWeather = (name) => async (dispatch) => {
  const weatherinfo = await apiGetWeather(name);
  dispatch({
    type: GET_WEATHER,
    payload: weatherinfo,
  });
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload;
    default: return state;
  }
};

export default weatherReducer;
export { getWeather };
