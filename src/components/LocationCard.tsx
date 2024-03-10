import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
} from "@material-tailwind/react";
import { Location } from "../types/ForecastResponse";

interface LocationCardProps {
    location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
    return (
        <Card placeholder={"Card"} className="mt-6 w-96">
            <CardHeader
                placeholder={"Card Header"}
                variant="gradient"
                color="gray"
                className="mb-4 grid h-12 place-items-center"
            >
                <Typography placeholder={"Typography"} variant="h3" color="white">
                    {location.name}
                </Typography>
            </CardHeader>
            <CardBody placeholder={"Card Body"} className=" flex flex-col gap-3">

                <Input crossOrigin label="City" value={location.name} />
                <Input crossOrigin label="Region" value={location.region} />
                <Input crossOrigin label="Country" value={location.country} />
                <Input crossOrigin label="Latitude" value={location.lat} />
                <Input crossOrigin label="Longitude" value={location.lon} />
                <Input crossOrigin label="Timezone" value={location.tz_id} />
                <Input crossOrigin label="Localtime" value={location.localtime} />

            </CardBody>
        </Card>
    );
}