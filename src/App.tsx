import { useState } from 'react';
import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import { ForecastData } from './types/ForecastResponse';
import { getWeatherForecast } from './services/forecast';
import Profile from './layout/partials/Profile';
import GeoLocationButton from './components/GeoLocationButton';
import Dashboard from './components/Dashboard';

export default function App() {

    const [forecastData, setForecastData] = useState<ForecastData | null>(null);
    const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleForecast = async () => {
        setLoading(true);
        try {
            const data: ForecastData = await getWeatherForecast(city);
            setForecastData(data);
        } catch (error) {
            console.error('Error fetching weather forecast:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <header className="bg-gray-200 p-8">

                <Navbar placeholder={"navbar"} className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
                    <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                        <Typography
                            placeholder={"Title"}
                            as="a"
                            href="#"
                            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                        >
                            Weather Reporter
                        </Typography>

                        <div className="flex items-center gap-4">

                            <GeoLocationButton setCity={setCity} />

                            <div className="relative flex w-full gap-2 md:w-max">
                                <Input
                                    crossOrigin={"anonymous"}
                                    type="search"
                                    label="Search You City . . ."
                                    className="pr-20 rounded-full"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    containerProps={{
                                        className: "min-w-[288px]",
                                    }}
                                />
                                <Button
                                    placeholder={"search"}
                                    size="sm"
                                    color="light-blue"
                                    className="!absolute right-1 top-1 rounded-full"
                                    onClick={handleForecast}
                                >
                                    Search
                                </Button>
                            </div>

                            <Profile />
                        </div>
                    </div>
                </Navbar>

                <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
                    <div className="container mx-auto px-4 text-center">

                        <Dashboard forecastData={forecastData} loading={loading} />

                    </div>
                </div>
            </header>
        </>
    )
}
