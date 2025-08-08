import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AccountCircle } from "@mui/icons-material";

export default function Navbar() {
  return (
    <nav className="bg-white  flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Image src="/logo.png" alt="Turbo Eats" width={100} height={70} />
      </div>

      <div
        className="flex items-center gap-3 text-gray-700"
        style={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "14px",
        }}
      >
        <Link
          href="#"
          className="px-8 py-1.5 bg-[#33a9c9] text-white rounded-full hover:bg-[#2e94b3] transition-all duration-300 hover:scale-105 hover:shadow-md"
        >
          Home
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 hover:text-[#33a9c9] transition-all duration-300 hover:bg-gray-50 rounded-full hover:scale-105"
        >
          Browse Menu
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 hover:text-[#33a9c9] transition-all duration-300 hover:bg-gray-50 rounded-full hover:scale-105"
        >
          Special Offers
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 hover:text-[#33a9c9] transition-all duration-300 hover:bg-gray-50 rounded-full hover:scale-105"
        >
          Restaurants
        </Link>
        <Link
          href="#"
          className="px-4 py-1.5 hover:text-[#33a9c9] transition-all duration-300 hover:bg-gray-50 rounded-full hover:scale-105"
        >
          Track Order
        </Link>
      </div>

      <Link
        href="#"
        className="flex items-center gap-2 bg-[#03081F] text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <AccountCircle className="text-[#ff7a00] w-4 h-4" />
        Login/Signup
      </Link>
    </nav>
  );
}
