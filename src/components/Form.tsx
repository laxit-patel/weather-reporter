import { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { getWeatherForecast } from "../services/forecast";
import Skeleton from './Skeleton';
import { ForecastData } from '../types/ForecastResponse'; // Import the Forecast type

export default function WeatherForecast() {
    const [forecastData, setForecastData] = useState<ForecastData | null>(null);
    const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleForecast = async () => {
        console.log("Forecasting...");
        setLoading(true);
        try {
            const data: ForecastData = await getWeatherForecast(city);
            console.log({ data });
            setForecastData(data);
        } catch (error) {
            console.error('Error fetching weather forecast:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mt-8 grid w-full place-items-start md:justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input
                    type="search"
                    color="gray"
                    label="Enter your City"
                    size="lg"
                    crossOrigin={"anonymous"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button
                    placeholder={"Forecast"}
                    onClick={handleForecast}
                    variant="gradient"
                    color="light-green"
                    className="w-full px-4 md:w-[12rem]"
                >
                    Forecast
                </Button>
            </div>
            {loading ? (
                <Skeleton width="w-96" height="h-5" borderRadius="rounded-full" rows={5} className="mb-4" />
            ) : forecastData ? (
                // Display forecast data when available
                <div className="border border-gray-300 rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-2">Weather Forecast for {forecastData.location?.name}</h2>
                    <p>Current Temperature: {forecastData.current?.temp_c}°C ({forecastData.current?.temp_f}°F)</p>
                    <p>Condition: {forecastData.current?.condition?.text}</p>
                    <p>Wind Speed: {forecastData.current?.wind_kph} km/h</p>
                    <p>Humidity: {forecastData.current?.humidity}%</p>
                    <p>UV Index: {forecastData.current?.uv}</p>
                </div>
            ) : null}

        </div>
    )
}
