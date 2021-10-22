import React, { createContext, ReactNode, useContext, useState } from 'react';
import { WeatherAPI } from '../services';
import { WeatherResponse } from '../interfaces/types';

//  https://medium.com/@devluispereira/react-context-api-typescript-507eec884549

type ContextValue = {
  weather: WeatherResponse | undefined;
  isTempUnitCelsius: boolean;
  setIsTempUnitCelsius: Function;
  updateWeather: Function;
};

const DEFAULT_VALUE = {
  weather: undefined,
  isTempUnitCelsius: true,
  setIsTempUnitCelsius: () => {},
  updateWeather: () => {},
};

export const WeatherContext = createContext<ContextValue>(DEFAULT_VALUE);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [isTempUnitCelsius, setIsTempUnitCelsius] = useState(true);

  const updateWeather = async (cityName: string) => {
    const { status, data } = await WeatherAPI.getWeatherByLocalName(cityName);
    if (status !== 200) throw new Error();
    setWeather(data);
    console.log('Weather updated');
  };

  const context = {
    weather,
    isTempUnitCelsius,
    setIsTempUnitCelsius,
    updateWeather,
  };

  return (
    <WeatherContext.Provider value={context}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}
