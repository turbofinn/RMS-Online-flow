"use client";
<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 197ed0c2f3e5e33a1b56ae89a1f4dfc5566f0170
import Link from "next/link";
import Image from "next/image";
import { AccountCircle, Menu, Close } from "@mui/icons-material";
import { IconButton, Drawer, List, ListItem } from "@mui/material";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => () => setMobileOpen(open);

  const navLinks = [
    { label: "Home", href: "#", primary: true },
    { label: "Browse Menu", href: "#" },
    { label: "Special Offers", href: "#" },
    { label: "Restaurants", href: "#" },
    { label: "Track Order", href: "#" },
  ];

  return (
    <nav className="bg-white flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <Image src="/assets/logo.svg" alt="Turbo Eats" width={100} height={70} />
      </div>

      {/* Desktop Links */}
      <div
        className="hidden md:flex items-center gap-3 text-gray-700"
        style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "14px" }}
      >
<<<<<<< HEAD
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
          href="/restaurant"
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
=======
        {navLinks.map((link) =>
          link.primary ? (
            <Link
              key={link.label}
              href={link.href}
              className="px-8 py-1.5 bg-[#33a9c9] text-white rounded-full hover:bg-[#2e94b3] transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 hover:text-[#33a9c9] transition-all duration-300 hover:bg-gray-50 rounded-full hover:scale-105"
            >
              {link.label}
            </Link>
          )
        )}
>>>>>>> 197ed0c2f3e5e33a1b56ae89a1f4dfc5566f0170
      </div>

      {/* Desktop Login */}
      <Link
        href="#"
        className="hidden md:flex items-center gap-2 bg-[#03081F] text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <AccountCircle className="text-[#ff7a00] w-4 h-4" />
        Login/Signup
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-3">
        <IconButton onClick={toggleDrawer(true)}>
          <Menu className="text-gray-800" />
        </IconButton>
      </div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <div className="w-64 flex flex-col h-full bg-white">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Image src="/logo.png" alt="Turbo Eats" width={80} height={50} />
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </div>

          {/* Drawer Links */}
          <List className="flex flex-col gap-1 p-4 font-medium">
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <Link
                  href={link.href}
                  className={`block w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                    link.primary
                      ? "bg-[#33a9c9] text-white hover:bg-[#2e94b3]"
                      : "hover:bg-gray-50 text-gray-700 hover:text-[#33a9c9]"
                  }`}
                  onClick={toggleDrawer(false)}
                >
                  {link.label}
                </Link>
              </ListItem>
            ))}
          </List>

          {/* Mobile Login */}
          <div className="mt-auto p-4">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-[#03081F] text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300"
              onClick={toggleDrawer(false)}
            >
              <AccountCircle className="text-[#ff7a00]" />
              Login/Signup
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}

