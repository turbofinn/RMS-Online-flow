import Image from "next/image";

// -------------------- DESKTOP --------------------
function HeroDesktop() {
  return (
    <section className="hidden md:block relative w-full overflow-hidden border border-gray-200 rounded-2xl bg-[#FBFBFB] h-[500px]">
      <div className="flex flex-col md:flex-row items-center relative z-10">
        {/* Left Text */}
        <div className="flex-1 pl-6 md:pl-16 pr-6 py-12 max-w-lg relative z-20">
          <p className="text-gray-500 mb-2 text-sm">
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 className="font-bold text-4xl md:text-5xl text-[#23223A] leading-tight whitespace-nowrap">
            Feast Your Senses,
          </h1>
          <h2 className="font-bold text-4xl md:text-5xl text-[#ff2e3a] leading-tight mb-6">
            Fast and Fresh
          </h2>
          <p className="mb-4 text-gray-600">
            Enter a postcode to see what we deliver
          </p>

          {/* Search Bar */}
          <div className="flex items-center rounded-full overflow-hidden border border-gray-300 w-[400px] max-w-md bg-white shadow-sm">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none text-base"
            />
            <button className="bg-[#33a9c9] text-white rounded-full font-semibold px-14 py-3 h-full">
              Search
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative flex items-center justify-center h-[480px] z-10">
          {/* Blue background image */}
          <div className="absolute top-[20px] right-0 w-[626px] h-[500px] z-0">
            <Image
              src="/assets/bgback.svg"
              alt="Background"
              fill
              className="object-contain object-right"
              priority
            />
          </div>

          {/* Noodles girl */}
          <Image
            src="/assets/hero2.svg"
            alt="Noodles"
            width={320}
            height={200}
            className="rounded-2xl shadow-xl object-cover z-10 absolute bottom-[-20px] right-[250px]"
            priority
          />

          {/* Notifications */}
          <div className="absolute bottom-8 right-4 flex flex-col-reverse gap-6 z-30">
            {[
              {
                title: "We've Received your order!",
                subtitle: "Awaiting Restaurant acceptance",
                num: "3",
                offset: "translate-x-[-60px]",
              },
              {
                title: "Order Accepted! ✔️",
                subtitle: "Your order will be delivered shortly",
                num: "2",
                offset: "translate-x-[-20px]",
              },
              {
                title: "Your rider's nearby! 🎉",
                subtitle: "They're almost there – get ready!",
                num: "1",
                offset: "translate-x-[-60px]",
              },
            ].map((note, idx) => (
              <div
                key={idx}
                className={`flex items-start py-2 relative ${note.offset}`}
              >
                <div className="bg-white rounded-xl shadow-lg px-5 py-2 flex flex-col border border-blue-100 min-w-[280px] max-w-[300px] relative">
                  <span className="text-xs text-[#33a9c9] font-bold mb-1">
                    <Image
                      src="/assets/logo2.svg"
                      alt="Noodles"
                      width={40}
                      height={20}
                      priority
                    />
                  </span>
                  <span className="font-semibold text-gray-700 text-sm">
                    {note.title}
                  </span>
                  <span className="text-xs text-gray-500">{note.subtitle}</span>
                  <span className="text-[10px] text-gray-400 absolute top-4 right-4">
                    now
                  </span>
                  <span
                    className="absolute -top-8 -right-4 text-[42px] font-extrabold leading-none drop-shadow-sm"
                    style={{
                      WebkitTextStroke: "2px #33a9c9",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {note.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pizza girl */}
        <Image
          src="/assets/hero1.svg"
          alt="Pizza girl"
          width={700}
          height={925}
          className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-20 object-contain"
          priority
        />
      </div>
    </section>
  );
}

// -------------------- MOBILE --------------------
function HeroMobile() {
  return (
    <section className="block md:hidden bg-[#FBFBFB] p-6 text-center">
      <p className="text-gray-500 mb-2 text-sm">
        Order Restaurant food, takeaway and groceries.
      </p>
      <h1 className="font-bold text-3xl text-[#23223A]">Feast Your Senses,</h1>
      <h2 className="font-bold text-3xl text-[#ff2e3a] mb-4">Fast and Fresh</h2>

      {/* Search bar */}
      <div className="flex items-center rounded-full overflow-hidden border border-gray-300 bg-white shadow-sm mb-6">
        <input
          type="text"
          placeholder="e.g. EC4R 3TE"
          className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none text-base"
        />
        <button className="bg-[#33a9c9] text-white px-6 py-3">Search</button>
      </div>

      {/* Simple hero image */}
      <Image
        src="/hero1.svg"
        alt="Hero mobile"
        width={300}
        height={350}
        className="rounded-2xl shadow-lg object-cover mx-auto"
      />
    </section>
  );
}

// -------------------- EXPORT --------------------
export default function HeroSection() {
  return (
    <>
      <HeroDesktop />
      <HeroMobile />
    </>
  );
}
