import { Button, TextField } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-12 pl-4 md:pl-16 flex rounded-2xl flex-col md:flex-row items-center justify-between min-h-[400px] relative overflow-hidden border border-gray-200">
      {/* Left: Text and Search */}
      <div className="flex-1 z-10 max-w-xl relative">
        <p className="text-gray-500 mb-2 text-sm">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="font-bold text-4xl md:text-5xl text-[#23223A] mb-2 leading-tight">
          Feast Your Senses,
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl text-[#ff2e3a] mb-6 leading-tight">
          Fast and Fresh
        </h2>
        <p className="mb-4 text-gray-600">
          Enter a postcode to see what we deliver
        </p>
        <form className="flex gap-2 items-center">
          <TextField
            variant="outlined"
            placeholder="e.g. EC4R 3TE"
            size="small"
            sx={{
              background: "#fff",
              borderRadius: "9999px",
              width: "200px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "9999px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              background: "#33a9c9",
              borderRadius: "9999px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "Poppins",
              "&:hover": { background: "#2e94b3" },
            }}
          >
            Search
          </Button>
        </form>
      </div>

      {/* Center Image (between left and right sections) */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 -translate-y-1/2 z-20">
        <Image
          src="/hero2.png"
          alt="Secondary hero"
          width={1200}
          height={1000}
          className="object-cover"
          priority
        />
      </div>

      {/* Right: Hero Image and Notifications */}
      <div className="flex-1 flex items-center justify-center relative mt-12 md:mt-0 h-[500px]">
        {/* Blue background image */}
        <Image
          src="/herobgright.png"
          alt="Background"
          fill
          className="object-cover absolute right-0 top-0 w-full h-full z-0"
          style={{ objectPosition: "right" }}
        />

        {/* Main Hero Image (centered, large) */}
        <Image
          src="/hero1.png"
          alt="Main hero"
          width={400}
          height={500}
          className="rounded-2xl shadow-xl object-cover z-10 absolute bottom-0 left-1/2 -translate-x-1/2"
          priority
        />

        {/* Notification Stack */}
        <div className="absolute top-8 right-0 flex flex-col gap-8 z-30">
          {/* Notification 1 */}
          <div className="flex items-center relative">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col border border-blue-100 min-w-[320px] max-w-[340px]">
              <span className="text-xs text-[#33a9c9] font-bold mb-1">
                TURBO
              </span>
              <span className="font-semibold text-base">
                We've Received your order!
              </span>
              <span className="text-xs text-gray-500">
                Awaiting Restaurant acceptance
              </span>
              <span className="text-[11px] text-gray-400 absolute top-3 right-6">
                now
              </span>
            </div>
            <span
              className="ml-4 text-[64px] font-extrabold text-[#b3e3f3] leading-none select-none pointer-events-none drop-shadow-sm"
              style={{
                WebkitTextStroke: "2px #33a9c9",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              1
            </span>
          </div>
          {/* Notification 2 */}
          <div className="flex items-center relative">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col border border-blue-100 min-w-[320px] max-w-[340px]">
              <span className="text-xs text-[#33a9c9] font-bold mb-1">
                TURBO
              </span>
              <span className="font-semibold text-base">
                Order Accepted! <span className="text-green-600">✔️</span>
              </span>
              <span className="text-xs text-gray-500">
                Your order will be delivered shortly
              </span>
              <span className="text-[11px] text-gray-400 absolute top-3 right-6">
                now
              </span>
            </div>
            <span
              className="ml-4 text-[64px] font-extrabold text-[#b3e3f3] leading-none select-none pointer-events-none drop-shadow-sm"
              style={{
                WebkitTextStroke: "2px #33a9c9",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              2
            </span>
          </div>
          {/* Notification 3 */}
          <div className="flex items-center relative">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col border border-blue-100 min-w-[320px] max-w-[340px]">
              <span className="text-xs text-[#33a9c9] font-bold mb-1">
                TURBO
              </span>
              <span className="font-semibold text-base">
                Your rider's nearby! 🎉
              </span>
              <span className="text-xs text-gray-500">
                They're almost there – get ready!
              </span>
              <span className="text-[11px] text-gray-400 absolute top-3 right-6">
                now
              </span>
            </div>
            <span
              className="ml-4 text-[64px] font-extrabold text-[#b3e3f3] leading-none select-none pointer-events-none drop-shadow-sm"
              style={{
                WebkitTextStroke: "2px #33a9c9",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
