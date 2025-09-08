"use client";
import { useState, useEffect } from "react";

export default function FoodLoader() {

    const loadingLines = [
        "Finding tasty restaurants near you…",
        "Fetching the best bites",
        "Loading delicious options…",
        "Your foodie adventure begins shortly…",
        "Sizzling up the menu…",
        "Sniffing out the tastiest spots…"
    ];

    const [line, setLine] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * loadingLines.length);
        setLine(loadingLines[randomIndex]);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]">
            <img
                src="/assets/Foodloder.gif"
                alt="Loading..."
                className="w-32 h-32 md:w-40 md:h-40"
            />
            <p className="mt-4 text-xl font-semibold text-white animate-bounce">
                {line}
            </p>
        </div>
    );
}
