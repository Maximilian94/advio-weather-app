import { Api } from '../providers';
import { weatherResponse } from '../interfaces/types';

const getWeatherByLocalName = () => Api.get<weatherResponse>('');

export const WeatherAPI = {
  getWeatherByLocalName,
};
