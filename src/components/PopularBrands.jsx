import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { brands } from "../data/brands";

const PopularBrands = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: "white" }}>
      {/* Header */}
      <Box sx={{ mb: 4, px: { xs: 2, md: 0 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 700,
            color: "#000000",
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: "100%",
          }}
        >
          Popular Brands
        </Typography>
      </Box>

      {/* Brands Grid */}
      <Box
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-6 md:gap-4"
        sx={{
          gap: 2,
          px: { xs: 2, md: 0 },
          pb: { xs: 2, md: 0 },
          "::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {brands.map((brand) => (
          <Card
            key={brand.id}
            elevation={0}
            className="snap-center"
            sx={{
              minWidth: { xs: "200px", md: "auto" },
              backgroundColor: "transparent",
              borderRadius: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              overflow: "hidden",
              flex: { xs: "0 0 auto", md: "1" },
              aspectRatio: "1/1",
              border: "none",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent
              sx={{
                p: 0,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                "&:last-child": { pb: 0 },
              }}
            >
              {/* Brand Image */}
              <CardMedia
                component="img"
                image={brand.image}
                alt={brand.name}
                sx={{
                  width: "100%",
                  height: "80%",
                  objectFit: "cover",
                  objectPosition: "center",
                  p: 0,
                  backgroundColor: "#f8f9fa",
                  filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))",
                  mixBlendMode: "multiply",
                }}
              />

              {/* Brand Name Section */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  backgroundColor: "#3AA1C4",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: "white",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    textAlign: "center",
                  }}
                >
                  {brand.name}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PopularBrands;
