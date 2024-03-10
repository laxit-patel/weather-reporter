import React from "react";
import { Typography } from "@material-tailwind/react";

interface CustomSkeletonProps {
    width: string;
    height: string;
    borderRadius: string;
    rows: number;
    className?: string;
}

const Skeleton: React.FC<CustomSkeletonProps> = ({
    width,
    height,
    borderRadius,
    rows,
    className = "",
}) => {
    const skeletonRows = Array.from({ length: rows }, (_, index) => (
        <Typography
            placeholder={"placeholder"}
            key={index}
            as="div"
            variant="paragraph"
            className={`${height} ${width} ${borderRadius} bg-gray-500 mb-2`}
        >
            &nbsp;
        </Typography>
    ));

    return (
        <div className={`max-w-full animate-pulse ${className}`}>
            <Typography
                placeholder={"placeholder"}
                as="div"
                variant="h1"
                className={`mb-4 ${height} ${width} ${borderRadius} bg-gray-500`}
            >
                &nbsp;
            </Typography>
            {skeletonRows}
        </div>
    );
};

export default Skeleton;
