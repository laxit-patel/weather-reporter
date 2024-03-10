import { ForecastData } from "../types/ForecastResponse";
import { LocationCard } from "./LocationCard";
import ChartCard from "./ChartCard";
import { Tile } from "./Tile";
import { Loading } from "./Loading";

interface WeatherDashboardProps {
    forecastData: ForecastData | null;
    loading: boolean;
}

const Dashboard: React.FC<WeatherDashboardProps> = ({ forecastData, loading }) => {
    return (
        <div className="p-4 flex flex-col items-center">

            {loading ? (
                <div className="flex items-center justify-center w-full">
                    <Loading />
                </div>
            ) : (
                forecastData ? (
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        {forecastData.location && (
                            <LocationCard location={forecastData.location} />
                        )}
                        <div className="grid w-full">
                            <div className="flex flex-col sm:flex-row gap-4 w-full py-4">
                                {forecastData.current?.condition?.text && (
                                    <Tile title="Condition" value={forecastData.current?.condition?.text} />
                                )}
                                <Tile title="Temperature" value={`${forecastData.current?.temp_c}°C (${forecastData.current?.temp_f}°F)`} />
                                <Tile title="Humidity" value={`${forecastData.current?.humidity}%`} />
                                <Tile title="Wind Speed" value={`${forecastData.current?.wind_kph} km/h`} />
                            </div>
                            {forecastData.forecast?.forecastday && (
                                <ChartCard
                                    hourlyTemperatures={forecastData.forecast.forecastday[0]?.hour?.map(hour => hour.temp_c) || []}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="text-lg text-gray-600">Welcome! Please make a search to view the weather.</div>
                        <img
                            src={`landing.svg?${Date.now()}`} // Append a unique query parameter to the image URL
                            className="rounded-full h-1/3 w-1/3"
                            alt="Landing Image"
                        />
                    </>
                )
            )}
        </div>
    );
};

export default Dashboard;
