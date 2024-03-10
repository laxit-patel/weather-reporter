import { Card, Typography } from "@material-tailwind/react";

interface TileProps {
    title: string;
    value: string;
}

export function Tile({ title, value }: TileProps) {
    return (
        <Card placeholder={true} color="gray" variant="gradient" className="w-full max-w-[20rem] p-3">
            <Typography
                placeholder={'placeholder'}
                variant="lead"
                color="white"
                className="font-normal uppercase"
            >
                {title}
            </Typography>
            <Typography
                placeholder={'placeholder'}
                color="cyan"
                className=" flex  justify-center gap-1 text-3xl font-normal"
            >
                {value}
            </Typography>
        </Card>
    )
}
