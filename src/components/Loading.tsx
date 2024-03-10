import React, { useEffect } from 'react';

export const Loading: React.FC = () => {
    useEffect(() => {
        // Refresh the image to restart the animation whenever it's loaded
        const img = document.getElementById('loadingImage') as HTMLImageElement;
        img.onload = () => {
            // Trigger a re-render by setting a timeout
            setTimeout(() => { }, 0);
        };
    }, []); // Run once on component mount

    return (
        <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-96 w-96 border-t-4 border-b-4 border-blue-gray-500"></div>
            <img
                id="loadingImage"
                src="loading.svg"
                className="rounded-full h-96 w-96"
                alt="Loading"
            />
        </div>
    );
};
