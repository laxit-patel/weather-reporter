import { fetchData } from './api';
import { ForecastData } from '../types/ForecastResponse'

export const getWeatherForecast = async (city: string): Promise<ForecastData> => {
  try {
    const forecastData: ForecastData = await fetchData('/forecast.json', {
      q: city,
    });
    return forecastData;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};
