import axios from 'axios';

export const Api = axios.create({
  baseURL:
    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=506ee620db3430119fb359febff00209',
});
