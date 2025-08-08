"use client";
import { LocationOn, ArrowCircleDown } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const AnnouncementBar = () => {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "12px",
      }}
      className="bg-[#FAFAFA] border border-gray-200 rounded-b-2xl pl-4 sm:pl-6 lg:pl-8 flex justify-between items-stretch text-sm text-gray-700 h-12"
    >
      <div className="flex items-center h-full py-4">
        🌟 Get 5% Off your first order,{" "}
        <Link href="#" className="text-[#3AA1C4] font-semibold">
          Promo: ORDER5
        </Link>
      </div>

      <div className="flex items-center gap-2 h-full py-4">
        <LocationOn fontSize="small" className="text-[#03081F] font-medium" />
        <span className="hidden sm:inline font">
          Regent Street, A5, A4201, London
        </span>
        <span className="sm:hidden">London</span>
        <Link href="#" className="text-[#FC8A06] text-xs ml-2 underline">
          Change Location
        </Link>
      </div>

      <div className="flex items-center bg-[#d4a995] px-6 border rounded-b-2xl text-white text-xs font-medium h-full">
        <Image
          src="/Shoppingcart.png"
          alt="Shopping Cart"
          width={16}
          height={16}
          className="text-white"
        />
        <div className="w-px h-full bg-white/30 mx-3"></div>
        <span>23 Items</span>
        <div className="w-px h-full bg-white/30 mx-3"></div>
        <span className="font-semibold">Rs 79.89</span>
        <div className="w-px h-full bg-white/30 mx-3"></div>
        <ArrowCircleDown fontSize="small" className="text-white" />
      </div>
    </div>
  );
};

export default AnnouncementBar;
