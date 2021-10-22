import { Api } from '../providers';
import { WeatherResponse } from '../interfaces/types';

const getWeatherByLocalName = (cityName: string) =>
  Api.get<WeatherResponse>(
    `/weather?q=${cityName}&appid=506ee620db3430119fb359febff00209`,
  );

export const WeatherAPI = {
  getWeatherByLocalName,
};
