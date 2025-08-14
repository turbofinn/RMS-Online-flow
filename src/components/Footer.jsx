import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] pt-2">
      {/* Top Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-gray-300">
          {/* Logo and App Stores */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Image
                src="/assets/logo.svg"
                alt="Turbo Logo"
                width={160}
                height={60}
                className="mb-4"
              />

              <div className="flex gap-4 mb-4">
                {/* App Store */}
                <Link href="#">
                  <div className="bg-black text-white rounded-md p-3 flex items-center gap-2 hover:bg-gray-800 w-40">
                    <div className="text-left">
                      <p className="text-xs text-gray-300">Download on the</p>
                      <p className="text-sm font-semibold">App Store</p>
                    </div>
                  </div>
                </Link>

                {/* Google Play */}
                <Link href="#">
                  <div className="bg-black text-white rounded-md p-3 flex items-center gap-2 hover:bg-gray-800 w-40">
                    <div className="text-left">
                      <p className="text-xs text-gray-300">GET IT ON</p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <p className="text-gray-600 text-xs mt-2">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 mt-10 pt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get Exclusive Deals in your inbox
            </h3>
            <div className="relative mb-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-200 px-2 py-2 pr-24 border text-black border-gray-300 rounded-full outline-none focus:border-[#33a9c9] focus:ring-1 focus:ring-[#33a9c9] transition text-sm"
              />
              <button className="absolute right-1 top-1 px-4 py-1.5 bg-[#33a9c9] text-white rounded-full hover:bg-[#2e94b3] text-sm font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-600">
              We won’t spam you. Read our{" "}
              <Link
                href="#"
                className="underline hover:text-[#33a9c9] transition-colors"
              >
                email policy
              </Link>
              .
            </p>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-4 mt-10 pt-10">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase">
                  Legal
                </h4>
                <ul className="space-y-2">
                  {[
                    "Terms and Conditions",
                    "Privacy",
                    "Cookies",
                    "Modern Slavery Statement",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        className="text-xs text-gray-700 hover:text-[#33a9c9] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase">
                  Useful Links
                </h4>
                <ul className="space-y-2">
                  {[
                    "Get help",
                    "Add your restaurant",
                    "Sign up to deliver",
                    "Create a business account",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        className="text-xs text-gray-700 hover:text-[#33a9c9] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Full Width */}
      <div className="w-full bg-[#03081F] py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p>© 2025 TurboTreats. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="#" className="hover:text-[#33a9c9] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#33a9c9] transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#33a9c9] transition">
              Pricing
            </Link>
            <Link
              href="#"
              className="hover:text-[#33a9c9] transition text-wrap"
            >
              Do not sell or share my personal information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
