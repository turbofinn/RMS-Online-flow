"use client";
import { useState } from "react";
import { LocationOn, ArrowCircleDown } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const GOOGLE_MAPS_API_KEY = "AIzaSyD-_p4x8ysVeIqV1H92viTaonxkBW80QYA";

const AnnouncementBar = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [loading, setLoading] = useState(false);

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
          );
          const data = await res.json();

          if (data.status === "OK" && data.results.length > 0) {
            const components = data.results[0].address_components;

            let city = "";
            let state = "";

            components.forEach((comp) => {
              // First priority: locality
              if (comp.types.includes("locality") && !city) {
                city = comp.long_name;
              }
              // Second priority: administrative_area_level_2 (district/city)
              else if (
                comp.types.includes("administrative_area_level_2") &&
                !city
              ) {
                city = comp.long_name;
              }
              // State
              if (
                comp.types.includes("administrative_area_level_1") &&
                !state
              ) {
                state = comp.long_name;
              }
            });

            const address = city ? `${city}, ${state}` : `${lat}, ${lng}`;
            setLocation(address);
          } else {
            setLocation(`Lat: ${lat}, Lng: ${lng}`);
          }
        } catch (error) {
          console.error(error);
          setLocation("Error fetching location");
        }
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLocation("Permission denied");
        setLoading(false);
      }
    );
  };

  return (
    <div
      style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "12px" }}
      className="bg-[#FAFAFA] border border-gray-200 rounded-b-2xl pl-2 sm:pl-4 lg:pl-8 flex justify-between items-stretch text-sm text-gray-700 h-12 overflow-hidden"
    >
      {/* Left Section - Promo */}
      <div className="flex items-center h-full py-2 sm:py-4 min-w-0 flex-shrink">
        <span className="hidden sm:inline">
          🌟 Get 5% Off your first order,{" "}
        </span>
        <span className="sm:hidden text-xs">🌟 5% Off </span>
        <Link
          href="#"
          className="text-[#3AA1C4] font-semibold text-xs sm:text-sm ml-1"
        >
          <span className="hidden sm:inline">Promo: ORDER5</span>
          <span className="sm:hidden">ORDER5</span>
        </Link>
      </div>

      {/* Middle Section - Location */}
      <div className="hidden md:flex items-center gap-1 lg:gap-2 h-full py-4 px-2 flex-shrink min-w-0">
        <LocationOn
          fontSize="small"
          className="text-[#03081F] font-medium flex-shrink-0"
        />
        <span className="font-medium truncate">
          {loading ? "Fetching location..." : location}
        </span>
        <button
          onClick={fetchLocation}
          className="text-[#FC8A06] text-xs underline whitespace-nowrap flex-shrink-0"
        >
          Change Location
        </button>
      </div>

      {/* Mobile Location */}
      <div className="flex md:hidden items-center gap-1 h-full py-2 px-1 flex-shrink min-w-0">
        <LocationOn
          fontSize="small"
          className="text-[#03081F] font-medium flex-shrink-0"
        />
        <span className="text-xs font-medium">
          {loading ? "Fetching..." : location}
        </span>
      </div>

      {/* Right Section - Cart */}
      <div className="flex items-center bg-[#d4a995] px-2 sm:px-4 lg:px-6 border rounded-b-2xl text-white text-xs font-medium h-full flex-shrink-0">
        <Image
          src="/assets/scart.svg"
          alt="Shopping Cart"
          width={14}
          height={14}
          className="text-white flex-shrink-0"
        />

        {/* Desktop Cart Details */}
        <div className="hidden lg:flex items-center">
          <div className="w-px h-6 bg-white/30 mx-3"></div>
          <span>23 Items</span>
          <div className="w-px h-6 bg-white/30 mx-3"></div>
          <span className="font-semibold">Rs 79.89</span>
          <div className="w-px h-6 bg-white/30 mx-3"></div>
          <ArrowCircleDown fontSize="small" className="text-white" />
        </div>

        {/* Tablet Cart Details */}
        <div className="hidden sm:flex lg:hidden items-center">
          <div className="w-px h-6 bg-white/30 mx-2"></div>
          <span className="text-xs">23</span>
          <div className="w-px h-6 bg-white/30 mx-2"></div>
          <span className="font-semibold text-xs">Rs 79.89</span>
          <div className="w-px h-6 bg-white/30 mx-2"></div>
          <ArrowCircleDown fontSize="small" className="text-white" />
        </div>

        {/* Mobile Cart Details */}
        <div className="flex sm:hidden items-center">
          <div className="w-px h-4 bg-white/30 mx-1"></div>
          <span className="font-semibold text-xs">Rs 79.89</span>
          <div className="w-px h-4 bg-white/30 mx-1"></div>
          <ArrowCircleDown fontSize="small" className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
