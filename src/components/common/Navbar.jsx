"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Avatar,
  Fade,
  Container,
} from "@mui/material";
import {
  AccountCircle,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  LocalOffer as OfferIcon,
  Storefront as StorefrontIcon,
  TrackChanges as TrackIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => setMobileOpen(open);

  // Close drawer when switching to desktop view
  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/", primary: true, icon: HomeIcon },
    { label: "Browse Menu", href: "#", icon: RestaurantIcon },
    { label: "Special Offers", href: "#", icon: OfferIcon },
    { label: "Restaurants", href: "/restaurant", icon: StorefrontIcon },
    { label: "Track Order", href: "#", icon: TrackIcon },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: "16px", 
          py: "8px",  
        }}
      >
          {/* Logo Section */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Image
              src="/assets/logo.svg"
              alt="TurboTreats"
              width={isMobile ? 80 : 100}
              height={isMobile ? 50 : 70}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1.5,
              color: "#374151",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.href}
                sx={{
                  ...(link.primary
                    ? {
                        backgroundColor: "#33a9c9",
                        color: "white",
                        borderRadius: "25px",
                        px: 4,
                        py: 0.75,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#2e94b3",
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                      }
                    : {
                        color: "#374151",
                        borderRadius: "25px",
                        px: 2,
                        py: 0.75,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#33a9c9",
                          backgroundColor: "#f9fafb",
                          transform: "scale(1.05)",
                        },
                      }),
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Login Button */}
          <Button
            component={Link}
            href="#"
            startIcon={
              <AccountCircle
                sx={{
                  color: "#ff7a00",
                  width: "16px",
                  height: "16px",
                }}
              />
            }
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundColor: "#03081F",
              color: "white",
              borderRadius: "25px",
              px: 2.5,
              py: 1,
              fontSize: "14px",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#374151",
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            Login/Signup
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#4a5568",
              p: 1.5,
              borderRadius: "12px",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(51, 169, 201, 0.1)",
                color: "#33a9c9",
                transform: "scale(1.05)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            backgroundColor: "#ffffff",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 3,
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              backgroundColor: "#fafafa",
            }}
          >
            <Image src="/assets/logo.svg" alt="TurboTreats" width={90} height={60} />
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                color: "#4a5568",
                borderRadius: "12px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  color: "#ff4444",
                  transform: "rotate(90deg)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Welcome Section */}
          <Box sx={{ p: 2, backgroundColor: "#f8fafc" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1a202c",
                mb: 0.5,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Welcome to TurboTreats
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              Fast delivery, fresh food
            </Typography>
          </Box>

          <Divider />

          {/* Navigation Links */}
          <List sx={{ flex: 1, p: 2 }}>
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Fade in={mobileOpen} timeout={300 + index * 100} key={link.label}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      component={Link}
                      href={link.href}
                      onClick={toggleDrawer(false)}
                      sx={{
                        borderRadius: "16px",
                        py: 1.5,
                        px: 2.5,
                        transition: "all 0.3s ease",
                        ...(link.primary
                          ? {
                              backgroundColor: "#33a9c9",
                              color: "white",
                              boxShadow: "0 4px 15px rgba(51, 169, 201, 0.2)",
                              "&:hover": {
                                backgroundColor: "#2e94b3",
                                transform: "translateX(8px)",
                                boxShadow: "0 6px 20px rgba(51, 169, 201, 0.3)",
                              },
                            }
                          : {
                              "&:hover": {
                                backgroundColor: "rgba(51, 169, 201, 0.08)",
                                color: "#33a9c9",
                                transform: "translateX(8px)",
                                "& .MuiSvgIcon-root": {
                                  color: "#33a9c9",
                                },
                              },
                            }),
                      }}
                    >
                      <IconComponent
                        sx={{
                          mr: 2,
                          fontSize: "22px",
                          color: link.primary ? "white" : "#64748b",
                          transition: "color 0.3s ease",
                        }}
                      />
                      <ListItemText
                        primary={link.label}
                        sx={{
                          "& .MuiTypography-root": {
                            fontWeight: link.primary ? 600 : 500,
                            fontSize: "15px",
                            fontFamily: "Poppins, sans-serif",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Fade>
              );
            })}
          </List>

          <Divider />

          {/* Mobile Login Section */}
          <Box sx={{ p: 3 }}>
            <Button
              component={Link}
              href="#"
              onClick={toggleDrawer(false)}
              fullWidth
              startIcon={
                <AccountCircle
                  sx={{
                    color: "#ff7a00",
                    fontSize: "22px",
                  }}
                />
              }
              sx={{
                backgroundColor: "#03081F",
                color: "white",
                borderRadius: "16px",
                py: 1.8,
                fontSize: "15px",
                fontWeight: 500,
                textTransform: "none",
                boxShadow: "0 4px 15px rgba(3, 8, 31, 0.2)",
                transition: "all 0.3s ease",
                fontFamily: "Poppins, sans-serif",
                "&:hover": {
                  backgroundColor: "#1a202c",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(3, 8, 31, 0.3)",
                },
              }}
            >
              Login / Signup
            </Button>

            {/* Additional Info */}
            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                mt: 2,
                color: "#94a3b8",
                fontSize: "12px",
              }}
            >
              Join thousands of food lovers
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}