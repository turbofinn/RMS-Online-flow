import React from "react";
import { statsData } from "@/data/statsData";

const StatsBanner = () => {
    return (
        <div
            className="rounded-2xl shadow-lg max-w-7xl mx-auto px-4 sm:px-6 py-6"
            style={{ backgroundColor: "#3AA1C4" }}
        >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                {statsData.map((stat, index) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center flex-1 min-w-0 relative"
                    >
                        <div className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl mb-2 leading-none">
                            {stat.value}
                        </div>
                        <div className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight text-center">
                            {stat.label}
                        </div>

                        {index < statsData.length - 1 && (
                            <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-20 bg-white"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsBanner;
