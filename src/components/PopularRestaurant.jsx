"use client";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import { useState } from "react";
import { categories, restaurants } from "../data/restaurants";

export default function PopularRestaurant() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter restaurants based on selected category
  const filteredRestaurants =
    activeCategory === "All"
      ? restaurants
      : restaurants.filter((r) => r.category === activeCategory);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-white p-6 px-4 md:px-0">
      {/* Header and Category Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000000] px-2 md:px-0">
          Popular Restaurants
        </h2>

        <div className="flex gap-2 md:gap-3 items-center overflow-x-auto sm:overflow-visible scrollbar-hide pb-2 sm:pb-0 px-2 md:px-0">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[16px] font-medium px-5 py-2 rounded-full transition whitespace-nowrap
                  ${
                    isActive
                      ? "border border-blue-400 text-blue-600 font-bold"
                      : "text-gray-700 hover:text-blue-600 cursor-pointer hover:bg-gray-50"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Restaurant Grid - Horizontal scroll on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 sm:grid [@media(max-width:640px)]:grid-cols-none [@media(max-width:640px)]:flex [@media(max-width:640px)]:overflow-x-auto [@media(max-width:640px)]:pb-4 [@media(max-width:640px)]:scroll-smooth [@media(max-width:640px)]:px-2 md:px-0">
        {filteredRestaurants.map((r) => (
          <div
            key={r.id}
            className="w-full [@media(max-width:640px)]:min-w-[260px] flex-shrink-0"
          >
            <Card
              elevation={0}
              className="relative overflow-hidden rounded-2xl"
              sx={{
                width: "100%",
                height: { xs: 280, sm: 325 },
                borderRadius: "16px",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                src={r.image}
                alt={r.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Chip
                label={r.discount}
                size="small"
                className="absolute right-5 py-1 px-2"
                sx={{
                  bgcolor: "#03081F",
                  color: "common.white",
                  fontWeight: 700,
                  borderRadius: "0 0 12px 12px",
                  padding: "20px 8px",
                  top: 0,
                }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: { xs: 1.5, sm: 2 },
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.75) 100%)",
                }}
              >
                <Typography
                  className="text-[#3AA1C4] font-bold"
                  variant="body1"
                  sx={{
                    mb: 0.5,
                    fontWeight: 700,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Restaurant
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "common.white",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    fontSize: { xs: "20px", sm: "24px" },
                  }}
                >
                  {r.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
