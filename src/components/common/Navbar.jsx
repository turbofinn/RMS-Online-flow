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
  Menu,
  MenuItem,
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
  Logout,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthModal from "./AuthModal";
import AuthService from "@/services/authService";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname(); // Get current route

  // Check if user is already logged in on component mount
  useEffect(() => {
    const userData = AuthService.getUserData();
    if (userData) {
      setUser(userData);
    }
  }, []);

  const toggleDrawer = (open) => () => setMobileOpen(open);

  // Close drawer when switching to desktop view
  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

  const handleAuthClick = () => {
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setAuthModalOpen(false);
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setAnchorEl(null);
    setMobileOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Browse Menu", href: "/menu", icon: RestaurantIcon },
    { label: "Special Offers", href: "/offers", icon: OfferIcon },
    { label: "Restaurants", href: "/restaurant", icon: StorefrontIcon },
    { label: "Track Order", href: "/track", icon: TrackIcon },
  ];

  // Function to check if a route is active
  const isActiveRoute = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
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
            {navLinks.map((link) => {
              const isActive = isActiveRoute(link.href);
              return (
                <Button
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    ...(isActive
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
              );
            })}
          </Box>

          {/* User Section - Show name if logged in, otherwise show login button */}
          {user ? (
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Button
                onClick={handleUserMenuOpen}
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
                Hi, {user.name || user.userName}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 180,
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <MenuItem onClick={handleUserMenuClose}>
                  <AccountCircle sx={{ mr: 1, color: "#64748b" }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleUserMenuClose}>
                  <TrackIcon sx={{ mr: 1, color: "#64748b" }} />
                  Orders
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1, color: "#64748b" }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              onClick={handleAuthClick}
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
          )}

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
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
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
              <Image
                src="/assets/logo.svg"
                alt="TurboTreats"
                width={90}
                height={60}
              />
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
                {user
                  ? `Welcome, ${user.name || user.userName}`
                  : "Welcome to TurboTreats"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#64748b",
                  fontSize: "13px",
                }}
              >
                {user ? "Good to see you again!" : "Fast delivery, fresh food"}
              </Typography>
            </Box>

            <Divider />

            {/* Navigation Links */}
            <List sx={{ flex: 1, p: 2 }}>
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                const isActive = isActiveRoute(link.href);
                return (
                  <Fade
                    in={mobileOpen}
                    timeout={300 + index * 100}
                    key={link.label}
                  >
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
                          ...(isActive
                            ? {
                              backgroundColor: "#33a9c9",
                              color: "white",
                              boxShadow: "0 4px 15px rgba(51, 169, 201, 0.2)",
                              "&:hover": {
                                backgroundColor: "#2e94b3",
                                transform: "translateX(8px)",
                                boxShadow:
                                  "0 6px 20px rgba(51, 169, 201, 0.3)",
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
                            color: isActive ? "white" : "#64748b",
                            transition: "color 0.3s ease",
                          }}
                        />
                        <ListItemText
                          primary={link.label}
                          sx={{
                            "& .MuiTypography-root": {
                              fontWeight: isActive ? 600 : 500,
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

            {/* User Section - Show logout if logged in, otherwise show login */}
            <Box sx={{ p: 3 }}>
              {user ? (
                <>
                  <Button
                    onClick={handleLogout}
                    fullWidth
                    startIcon={
                      <Logout
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
                    Logout
                  </Button>
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
                    Signed in as {user.name || user.userName}
                  </Typography>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setAuthModalOpen(true);
                      setMobileOpen(false);
                    }}
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
                </>
              )}
            </Box>
          </Box>
        </Drawer>
      </AppBar>

      {/* Auth Modal */}
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Navbar;