import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "280px", sm: "360px", md: "420px" },
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <Image
          src="/assets/burger-fries.svg"
          alt="McDonald's Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(4, 4, 4, 0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "1rem", md: "3rem" },
            left: 0,
            p: { xs: 2, md: 5 },
            color: "white",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box component="p" sx={{ fontSize: "0.875rem", mb: 0.5 }}>
            I&#39;m lovin&#39; it!
          </Box>
          <Box
            component="h1"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.75rem" },
              fontWeight: "bold",
              mb: { xs: 2, md: 4 },
            }}
          >
            McDonald&#39;s East London
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "18px",
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Box
              sx={{
                bgcolor: "transparent",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "white",
                px: 2.5,
                py: 1,
                borderRadius: "9999px",
                fontSize: "0.9rem",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Image
                src="/assets/Order Completed.svg"
                alt="Money"
                width={20}
                height={20}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              Minimum Order: 12 GBP
            </Box>
            <Box
              sx={{
                bgcolor: "transparent",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "white",
                px: 2.5,
                py: 1,
                borderRadius: "9999px",
                fontSize: "0.9rem",
                fontWeight: "medium",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Image
                src="/assets/Motocross.svg"
                alt="Clock"
                width={20}
                height={20}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              Delivery in 20-25 Minutes
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "1rem", md: "3rem" },
            right: { xs: "1rem", md: "3rem" },
            width: { xs: "120px", sm: "240px", md: "420px" },
            height: { xs: "90px", sm: "180px", md: "320px" },
            borderRadius: "12px",
            overflow: "visible",
            boxShadow: 3,
            zIndex: 20,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/assets/burger-fries.svg"
              alt="Burger Close-up"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "24px",
              bgcolor: "white",
              borderRadius: "8px",
              px: 1,
              py: 1.5,
              boxShadow: 3,
              zIndex: 30,
              transform: { sm: "translateX(-60%)", md: "translateX(-60%)" },
              width: { sm: "80px", md: "auto" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: { sm: "1.5rem", md: "3rem" },
                  fontWeight: "semi-bold",
                  lineHeight: 1,
                }}
              >
                3.4
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                {[...Array(5)].map((_, i) => (
                  <Box
                    key={i}
                    component="span"
                    sx={{
                      color: "#facc15",
                      fontSize: { sm: "0.75rem", md: "1rem" },
                    }}
                  >
                    ★
                  </Box>
                ))}
              </Box>
              <Box
                component="span"
                sx={{
                  fontSize: { sm: "0.6rem", md: "0.75rem" },
                  color: "grey.500",
                }}
              >
                1,360 reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ position: "relative", mt: { xs: "-10px", md: "-20px" }, ml: 0 }}
      >
        <Box
          sx={{
            bgcolor: "#33a9c9",
            color: "white",
            px: { xs: 3, md: 5 },
            py: 1.5,
            borderRadius: "0 8px 8px 0",
            fontSize: { xs: "0.8rem", md: "0.9rem" },
            fontWeight: "medium",
            boxShadow: 3,
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Image
            src="/assets/Clock.svg"
            alt="Clock"
            width={20}
            height={20}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          Open until 3:00 AM
        </Box>
      </Box>
    </div>
  );
};

export default Header;
