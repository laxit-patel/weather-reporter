import { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

interface ChartProps {
    type: "line" | "bar" | "area" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined;
    height: number;
    series: { name: string, data: number[] }[];
    options: any; // You can replace 'any' with the specific type of options object if available
}

// Sample chart configuration
const chartConfig: ChartProps = {
    type: "line",
    height: 240,
    series: [],
    options: {
        // Your chart options
        xaxis: {
            type: 'category'
        }
    },
};

export default function HourlyForecastChart({ hourlyTemperatures }: { hourlyTemperatures: any }) {
    const [chartData, setChartData] = useState<ChartProps>(chartConfig);

    useEffect(() => {
        if (hourlyTemperatures) {
            setChartData(prevState => ({
                ...prevState,
                series: [
                    {
                        name: 'Hourly Temperature (°C)',
                        data: hourlyTemperatures,
                    },
                ],
            }));
        }
    }, [hourlyTemperatures]);

    return (
        <Card placeholder={"Card"} className="w-full">
            <CardHeader
                placeholder={"Card Header"}
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                    <Square3Stack3DIcon className="h-6 w-6" />
                </div>
                <div className="text-left">
                    <Typography placeholder={"Typography"} variant="h6" color="blue-gray">
                        Hourly Temperature Forecast
                    </Typography>
                    <Typography placeholder={"Typography"}
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        Visualize the hourly temperature forecast using a line chart.
                    </Typography>
                </div>
            </CardHeader>
            <CardBody placeholder={"Card Body"} className="px-2 pb-0">
                <Chart {...chartData} />
            </CardBody>
        </Card>
    );
}
