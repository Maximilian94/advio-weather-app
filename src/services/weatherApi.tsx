import { Api } from '../providers';
import { WeatherResponse } from '../interfaces/types';

const getWeatherByLocalName = () => Api.get<WeatherResponse>('');

export const WeatherAPI = {
  getWeatherByLocalName,
};
