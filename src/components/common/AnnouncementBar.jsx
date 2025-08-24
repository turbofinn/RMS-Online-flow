"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LocationOn, ArrowCircleDown } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const GOOGLE_MAPS_API_KEY = "AIzaSyD-_p4x8ysVeIqV1H92viTaonxkBW80QYA";

const AnnouncementBar = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;

        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
          );
          const data = await res.json();

          if (data.status === "OK" && data.results.length > 0) {
            const components = data.results[0].address_components;
            let city = "",
              state = "";

            components.forEach((comp) => {
              if (comp.types.includes("locality") && !city) {
                city = comp.long_name;
              } else if (
                comp.types.includes("administrative_area_level_2") &&
                !city
              ) {
                city = comp.long_name;
              }
              if (
                comp.types.includes("administrative_area_level_1") &&
                !state
              ) {
                state = comp.long_name;
              }
            });

            setLocation(city ? `${city}, ${state}` : `${lat}, ${lng}`);
          } else {
            setLocation(`Lat: ${lat}, Lng: ${lng}`);
          }
        } catch (error) {
          setLocation("Error fetching location");
        }
        setLoading(false);
      },
      () => {
        setLocation("Permission denied");
        setLoading(false);
      }
    );
  };

  const locationText = loading
    ? isMobile
      ? "Fetching..."
      : "Fetching location..."
    : location;

  return (
    <Box
      sx={{
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "12px",
        backgroundColor: "#FAFAFA",
        border: "1px solid #e5e7eb",
        borderRadius: "0 0 16px 16px",
        pl: { xs: 1, sm: 2, lg: 4 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        color: "#374151",
        height: "48px",
        overflow: "hidden",
      }}
    >
      {/* Promo Section - Hidden on Mobile */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          height: "100%",
          py: 2,
          minWidth: 0,
          flexShrink: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "12px", fontFamily: "Poppins", fontWeight: 500 }}
        >
          🌟 Get 5% Off your first order,{" "}
        </Typography>
        <Typography
          component={Link}
          href="#"
          sx={{
            color: "#3AA1C4",
            fontWeight: 600,
            fontSize: "12px",
            textDecoration: "none",
            ml: 0.5,
            fontFamily: "Poppins",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Promo: ORDER5
        </Typography>
      </Box>

      {/* Desktop Location */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: { md: 0.5, lg: 1 },
          height: "100%",
          py: 2,
          px: 1,
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        <LocationOn fontSize="small" sx={{ color: "#03081F", flexShrink: 0 }} />
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            fontFamily: "Poppins",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {locationText}
        </Typography>
        <Button
          onClick={fetchLocation}
          sx={{
            color: "#FC8A06",
            fontSize: "11px",
            textDecoration: "underline",
            minWidth: "auto",
            p: 0,
            textTransform: "none",
            fontFamily: "Poppins",
            flexShrink: 0,
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          Change Location
        </Button>
      </Box>

      {/* Mobile Location */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          gap: 0.5,
          height: "100%",
          py: 1,
          px: 0.5,
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <LocationOn
          fontSize="small"
          sx={{ color: "#03081F", flexShrink: 0, fontSize: "16px" }}
        />
        <Box sx={{ flex: 1, minWidth: 0, mr: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "10px",
              fontWeight: 500,
              fontFamily: "Poppins",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: 1.2,
            }}
          >
            {locationText}
          </Typography>
          <Button
            onClick={fetchLocation}
            sx={{
              color: "#FC8A06",
              fontSize: "9px",
              textDecoration: "underline",
              minWidth: "auto",
              p: 0,
              mt: -0.5,
              textTransform: "none",
              fontFamily: "Poppins",
              fontWeight: 600,
              lineHeight: 1,
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
                color: "#e67e22",
              },
            }}
          >
            Change Location
          </Button>
        </Box>
      </Box>

      {/* Cart Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#d4a995",
          px: { xs: 2, sm: 2, lg: 3 },
          borderRadius: "0 0 16px 0",
          color: "white",
          fontSize: "12px",
          fontWeight: 500,
          height: "100%",
          flexShrink: 0,
          minWidth: { xs: "100px", sm: "auto" },
        }}
      >
        <Box
          component={Link}
          href="/order"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            p: 0.5,
            borderRadius: "4px",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src="/assets/scart.svg"
            alt="Shopping Cart"
            width={14}
            height={14}
          />
        </Box>

        {/* Desktop Cart Details */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 1.5,
              height: "24px",
            }}
          />
          <Typography
            sx={{ fontSize: "12px", fontFamily: "Poppins", fontWeight: 500 }}
          >
            23 Items
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 1.5,
              height: "24px",
            }}
          />
          <Typography
            sx={{ fontWeight: 600, fontSize: "12px", fontFamily: "Poppins" }}
          >
            Rs 79.89
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 1.5,
              height: "24px",
            }}
          />
          <ArrowCircleDown fontSize="small" />
        </Box>

        {/* Tablet Cart Details */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex", lg: "none" },
            alignItems: "center",
          }}
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 1,
              height: "24px",
            }}
          />
          <Typography
            sx={{ fontSize: "11px", fontFamily: "Poppins", fontWeight: 500 }}
          >
            23
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 1,
              height: "24px",
            }}
          />
          <Typography
            sx={{ fontWeight: 600, fontSize: "11px", fontFamily: "Poppins" }}
          >
            Rs 79.89
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 1,
              height: "24px",
            }}
          />
          <ArrowCircleDown fontSize="small" />
        </Box>

        {/* Mobile Cart Details */}
        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 0.5,
              height: "16px",
              width: "1px",
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "11px",
              fontFamily: "Poppins",
              whiteSpace: "nowrap",
            }}
          >
            Rs 79.89
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              mx: 0.5,
              height: "16px",
              width: "1px",
            }}
          />
          <ArrowCircleDown sx={{ color: "white", fontSize: "16px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default AnnouncementBar;
