const key = 'b134e251af58430f964152538220407';
const GET_WEATHER = 'my-app/states/GET_WEATHER';
const initialState = {};

const apiGetWeather = async (name) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${name}&aqi=yes`, {
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
  const stateWeather = {
    name: weatherinfo.location.name,
    region: weatherinfo.location.region,
    lat: weatherinfo.location.lat,
    lon: weatherinfo.location.lon,
    localtime: weatherinfo.location.localtime,
    weather: {
      condition: {
        icon: `http:${weatherinfo.current.condition.icon}`,
        text: weatherinfo.current.condition.text,
      },
      cloud: weatherinfo.current.cloud,
      feelslike_c: weatherinfo.current.feelslike_c,
      last_updated: weatherinfo.current.last_updated,
      pressure_in: weatherinfo.current.pressure_in,
      pressure_mb: weatherinfo.current.pressure_mb,
      temp_c: `${weatherinfo.current.temp_c} °C`,
      temp_f: `${weatherinfo.current.temp_f} °F`,
      uv: weatherinfo.current.uv,
      wind_degree: weatherinfo.current.wind_degree,
      air_quality: {
        co: weatherinfo.current.air_quality.co,
        no2: weatherinfo.current.air_quality.no2,
        o3: weatherinfo.current.air_quality.o3,
        pm2_5: weatherinfo.current.air_quality.pm2_5,
        pm10: weatherinfo.current.air_quality.pm10,
        so2: weatherinfo.current.air_quality.so2,
      },
    },
  };
  dispatch({
    type: GET_WEATHER,
    payload: stateWeather,
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
