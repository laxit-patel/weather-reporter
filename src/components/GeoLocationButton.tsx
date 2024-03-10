import { IconButton } from "@material-tailwind/react";
import { MapPinIcon } from '@heroicons/react/24/solid';

interface GeoLocationButtonProps {
    setCity: (city: string) => void;
}

const GeoLocationButton = ({ setCity }: GeoLocationButtonProps) => {
    const handleGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                try {
                    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2bfbf3fe4b2b4054a7579d335c1c7ed7`);
                    const data = await response.json();
                    const cityName = data.results[0].components.city;
                    setCity(cityName);
                } catch (error) {
                    console.error('Error fetching city:', error);
                }
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <IconButton placeholder={"heart"} className="rounded-full" onClick={handleGeoLocation}>
            <MapPinIcon className="h-8 w-8" />
        </IconButton>
    );
};

export default GeoLocationButton;
