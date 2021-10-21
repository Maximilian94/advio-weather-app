export const getWeather = async () => {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=506ee620db3430119fb359febff00209',
  );
  const data = await response.json();
  return data;
};
