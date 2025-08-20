import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] pt-6">
      {/* Top Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8  border-b border-gray-300">
          {/* Logo and App Stores */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex flex-col items-center md:items-start">
              {/* Logo */}
              <Image
                src="/assets/logo.svg"
                alt="Turbo Logo"
                width={170}
                height={80}
                style={{ marginBottom: -30 }}
                className="mx-auto md:mx-0"
              />

              {/* Store Buttons */}
              <div
                className="flex flex-row gap-2 items-center justify-center md:justify-start"
                style={{ marginTop: -20 }}
              >
                <Link href="#" aria-label="Download on the App Store">
                  <img
                    src="/assets/appstore.svg"
                    alt="App Store"
                    className="w-32 h-auto object-contain block"
                  />
                </Link>
                <Link href="#" aria-label="Get it on Google Play">
                  <img
                    src="/assets/googleplay.svg"
                    alt="Google Play"
                    className="w-32 h-auto object-contain block"
                  />
                </Link>
              </div>
            </div>

            <p className="text-gray-600 text-xs mt-2 text-center md:text-left">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 mt-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">
              Get Exclusive Deals in your inbox
            </h3>

            {/* Original Desktop Form */}
            <div className="relative mb-3 hidden md:block">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-200 px-2 py-2 pr-24 border text-black border-gray-300 rounded-full outline-none focus:border-[#33a9c9] focus:ring-1 focus:ring-[#33a9c9] transition text-sm"
              />
              <button className="absolute right-1 top-1 px-4 py-1.5 bg-[#33a9c9] text-white rounded-full hover:bg-[#2e94b3] text-sm font-medium">
                Subscribe
              </button>
            </div>

            {/* Mobile Stacked Form */}
            <div className="block md:hidden mb-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-200 px-4 py-3 border text-black border-gray-300 rounded-full outline-none focus:border-[#33a9c9] focus:ring-1 focus:ring-[#33a9c9] transition text-sm mb-3"
              />
              <button className="w-full py-3 bg-[#33a9c9] text-white rounded-full hover:bg-[#2e94b3] text-sm font-medium">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-600 text-center md:text-left mb-4">
              We won't spam you. Read our{" "}
              <Link
                href="#"
                className="underline hover:text-[#33a9c9] transition-colors"
              >
                email policy
              </Link>
              .
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#33a9c9] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#33a9c9] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-[#33a9c9] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-[#33a9c9] transition-colors"
              >
                <LinkedIn className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
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

              <div className="text-center md:text-left">
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

      {/* Bottom Bar*/}
      <div className="w-full bg-[#03081F] py-4 mt-8">
        <div className="hidden md:block">
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

        {/* Mobile -layout */}
        <div className="block md:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs text-gray-400 mb-3">
              © 2025 TurboTreats. All rights reserved.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#33a9c9] transition py-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#33a9c9] transition py-1"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#33a9c9] transition py-1"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#33a9c9] transition py-1"
              >
                Do not sell my info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
