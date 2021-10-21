import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { WeatherAPI } from '../services';
import { WeatherResponse } from '../interfaces/types';

//  https://medium.com/@devluispereira/react-context-api-typescript-507eec884549

type ContextValue = {
  weather: WeatherResponse | undefined;
  isTempUnitCelsius: boolean;
  setIsTempUnitCelsius: Function;
};

const DEFAULT_VALUE = {
  weather: undefined,
  isTempUnitCelsius: true,
  setIsTempUnitCelsius: () => {},
};

export const WeatherContext = createContext<ContextValue>(DEFAULT_VALUE);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [isTempUnitCelsius, setIsTempUnitCelsius] = useState(true);

  const updateWeather = async () => {
    const { status, data } = await WeatherAPI.getWeatherByLocalName();
    if (status !== 200) throw new Error();
    setWeather(data);
  };

  const context = { weather, isTempUnitCelsius, setIsTempUnitCelsius };

  useEffect(() => {
    updateWeather();
  }, []);

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
