import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { categories } from "../data/categories";

// Displays grid of food categories with horizontal scroll on mobile
const PopularCategories = () => {
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
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          <Box sx={{ display: { xs: "none", md: "inline" } }}>Turbotreats </Box>
          Popular Categories
          <span style={{ fontSize: "32px" }}>🤩</span>
        </Typography>
      </Box>

      {/* Scrollable Category Grid */}
      <Box
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        sx={{
          display: "flex",
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
        {categories.map((category) => (
          <Card
            key={category.id}
            elevation={0}
            className="snap-center"
            sx={{
              minWidth: { xs: "200px", md: "238px" },
              width: { xs: "200px", md: "238px" },
              height: "266px",
              backgroundColor: "transparent",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              overflow: "hidden",
              flex: { xs: "0 0 auto", md: "0 1 auto" },
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
              <CardMedia
                component="img"
                image={category.image}
                alt={category.title}
                sx={{
                  width: "100%",
                  height: "90%",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  bottom: 5,
                  left: 0,
                  borderRadius: "12px",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  textAlign: "left",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "0 0 12px 12px",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#1f2937",
                    fontSize: "17px",
                    lineHeight: 1.2,
                    mb: 0.5,
                  }}
                >
                  {category.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#3AA1C4",
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  {category.restaurants}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PopularCategories;
