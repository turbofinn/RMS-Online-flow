"use client";
import { Tabs, Tab, TextField, Grid, Box, InputAdornment } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { Card, CardContent, IconButton, Divider, Rating, Container } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BurgerCard = ({ title, description, price, burgerImage }) => {
  return (
     <Card sx={{
      width: { xs: '100%', sm: 386 },
      height: { xs: 150, sm: 180 },
      borderRadius: 2,
      boxShadow: 'none',
      border: '1px solid #f0f0f0',
      position: 'relative',
      padding: { xs: 1, sm: 2 },
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      p: { xs: 1, sm: 2 }
    }}>
      <CardContent sx={{  
        width: 'calc(100% - 50px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {/* Text Content */}
        <Box sx={{ width: { xs: '60%', sm: '70%' } }}>
          <Typography variant="h6" 
          sx={{ 
             fontSize: { xs: "0.7rem", sm: "0.8rem" },
             fontWeight: "bold",
            fontFamily: "Poppins",
            mb: 1
             }}>
            Royal Cheese Burger with extra Fries
          </Typography>
          
          <Typography variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
             fontSize: { xs: "0.5rem", sm: "0.6rem" },
            fontWeight: "semi-bold",
            fontFamily: "Poppins", 
          }}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </Typography>
          
          <Typography variant="h6" sx={{ 
             fontSize: { xs: "0.7rem", sm: "0.8rem" },
             bottomMargin:{xs:2, md:2},
            fontWeight: "bold",
            fontFamily: "Poppins", 
            }}>
            GBP 23.10
          </Typography>
        </Box>

        {/* Burger Image - Right Side */}
        <Box
          component="img"
          src={burgerImage}
          alt="Burger"
          sx={{
            position: 'absolute',
            top: 15,
            right: 15,
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
            objectFit: 'cover',
            zIndex: 0
          }}
        />

        {/* INVERTED Quarter-circle with plus image */}
        <Box sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          width: {xs:60, md:80},
          height: {xs:60, md:80},
          borderRadius: '30px 0 0 0',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          <Box
            component="img"
            src="/square.svg"
            alt="Fries"
            sx={{
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              ml: '-20%',
              mt: '-20%',
              transform: 'rotate(180deg)'
            }}
          />
          
          <Box
            component="img"
            src="/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: {xs:18, md:28},
              left: {xs:12, md:16},
              width: {xs:25, md:30},
              height:  {xs:25, md:30},
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '3px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const FriesCard = ({ title, description, price, friesImage }) => {
  return (
     <Card sx={{
      width: { xs: '100%', sm: 386 },
      height: { xs: 150, sm: 180 },
      borderRadius: 2,
      boxShadow: 'none',
      border: '1px solid #f0f0f0',
      position: 'relative',
      padding: { xs: 1, sm: 2 },
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      p: { xs: 1, sm: 2 }
    }}>
      <CardContent sx={{  
        width: 'calc(100% - 50px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Box sx={{ width: { xs: '60%', sm: '70%' } }}>
          <Typography variant="h6" 
          sx={{ 
             fontSize: { xs: "0.7rem", sm: "0.8rem" },
             fontWeight: "bold",
            fontFamily: "Poppins",
            mb: 1
             }}>
            Royal Cheese Burger with extra Fries
          </Typography>
          
          <Typography variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
             fontSize: { xs: "0.5rem", sm: "0.6rem" },
            fontWeight: "semi-bold",
            fontFamily: "Poppins", 
          }}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </Typography>
          
          <Typography variant="h6" sx={{ 
             fontSize: { xs: "0.7rem", sm: "0.8rem" },
            fontWeight: "bold",
            fontFamily: "Poppins", 
            }}>
            GBP 23.10
          </Typography>
        </Box>

        <Box
          component="img"
          src={friesImage}
          alt="Fries"
          sx={{
            position: 'absolute',
            top: 15,
            right: 15,
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
            objectFit: 'cover',
            zIndex: 0
          }}
        />

        <Box sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          width: {xs:60, md:80},
          height: {xs:60, md:80},
          borderRadius: '30px 0 0 0',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          <Box
            component="img"
            src="/square.svg"
            alt="Fries"
            sx={{
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              ml: '-20%',
              mt: '-20%',
              transform: 'rotate(180deg)'
            }}
          />
          
          <Box
            component="img"
            src="/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: {xs:18, md:28},
              left: {xs:12, md:16},
              width: {xs:25, md:30},
              height: {xs:25, md:30},
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '3px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const ColdDrinkCard = ({ title, description, price, coldDrinkImage }) => {
  return (
     <Card sx={{
      width: { xs: '100%', sm: 386 },
      height: { xs: 150, sm: 180 },
      borderRadius: 2,
      boxShadow: 'none',
      border: '1px solid #f0f0f0',
      position: 'relative',
      padding: { xs: 1, sm: 2 },
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      p: { xs: 1, sm: 2 }
    }}>
      <CardContent sx={{  
        width: 'calc(100% - 50px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Box sx={{ width: { xs: '60%', sm: '70%' } }}>
          <Typography variant="h6" 
          sx={{ 
             fontSize: { xs: "0.7rem", sm: "0.8rem" },
             fontWeight: "bold",
            fontFamily: "Poppins",
            mb: 1
             }}>
            Royal Cheese Burger with extra Fries
          </Typography>
          
          <Typography variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
             fontSize: { xs: "0.5rem", sm: "0.6rem" },
            fontWeight: "semi-bold",
            fontFamily: "Poppins", 
          }}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </Typography>
          
          <Typography variant="h6" sx={{ 
             fontSize: { xs: "0.7rem", sm: "0.8rem" },
            fontWeight: "bold",
            fontFamily: "Poppins", 
            }}>
            GBP 23.10
          </Typography>
        </Box>

        <Box
          component="img"
          src={coldDrinkImage}
          alt="coldDrink"
          sx={{
            position: 'absolute',
            top: 15,
            right: 15,
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
            objectFit: 'cover',
            zIndex: 0
          }}
        />

        <Box sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          width: {xs:60, md:80},
          height: {xs:60, md:80},
          borderRadius: '30px 0 0 0',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          <Box
            component="img"
            src="/square.svg"
            alt="Fries"
            sx={{
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              ml: '-20%',
              mt: '-20%',
              transform: 'rotate(180deg)'
            }}
          />
          
          <Box
            component="img"
            src="/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: {xs:18, md:28},
              left: {xs:12, md:16},
              width: {xs:25, md:30},
              height: {xs:25, md:30},
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '3px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const daysOfWeek = [
  { day: 'Monday', deliveryHours: '12:00 AM–3:00 AM, 8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Tuesday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Wednesday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Thursday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Friday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Saturday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Sunday', deliveryHours: '8:00 AM–12:00 AM', operationalHours: '8:00 AM–3:00 AM' },
];

export default function RestaurantDetailsPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const burgerItems = [
    {
      title: "Royal Cheese Burger with extra Fries",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "GBP 23.10",
      burgerImage: "/Burger.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      burgerImage: "/Burger.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      burgerImage: "/Burger.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      burgerImage: "/Burger.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      burgerImage: "/Burger.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      burgerImage: "/Burger.svg",
    }
  ];

  const friesItems = [
    {
      title: "Royal Cheese Burger with extra Fries",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "GBP 23.10",
      friesImage: "/Fries.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      friesImage: "/Fries.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      friesImage: "/Fries.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      friesImage: "/Fries.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      friesImage: "/Fries.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      friesImage: "/Fries.svg",
    }
  ];

  const coldDrinkItems = [
    {
      title: "Royal Cheese Burger with extra Fries",
      description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: "GBP 23.10",
      coldDrinkImage: "/CD1.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      coldDrinkImage: "/CD2.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      coldDrinkImage: "/CD3.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      coldDrinkImage: "/CD4.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      coldDrinkImage: "/CD5.svg",
    },
    {
      title: "The classics for 3",
      description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
      price: "GBP 23.10",
      coldDrinkImage: "/CD3.svg",
    }
  ];

  const reviews = [
    {
      author: 'St Gfx',
      location: 'South London',
      date: '24th September, 2023',
      rating: 5,
      content: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.'
    },
    {
      author: 'St Gfx',
      location: 'South London',
      date: '24th September, 2023',
      rating: 5,
      content: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.'
    },
    {
      author: 'St Gfx',
      location: 'South London',
      date: '24th September, 2023',
      rating: 5,
      content: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.'
    }
  ];

  const restaurants = [
    { name: "McDonald's London", logo: "/mc.svg" },
    { name: "PAPA JOHNS", logo: "/papaJohns.svg" },
    { name: "KFC", logo: "/kfc.svg" },
    { name: "Texas Chicken", logo: "/Texas.svg" },
    { name: "Burger King", logo: "/BurgerKing.svg" },
    { name: "Shaurma", logo: "/Shaurma.svg" },
  ];

  return (
    <Box sx={{ width: "100%", fontFamily: "Poppins" }}>
      {/* Hero Section */}
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
          src="/burger-fries.svg"
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
            I'm lovin' it!
          </Box>
          <Box
            component="h1"
            sx={{ 
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.75rem" }, 
              fontWeight: "bold", 
              mb: { xs: 2, md: 4 } 
            }}
          >
            McDonald's East London
          </Box>

          <Box sx={{ 
            display: "flex", 
            gap: "18px", 
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "auto" }
          }}>
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
                src="/Order Completed.svg"
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
                src="/Motocross.svg"
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
              src="/burger-fries.svg"
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
                  lineHeight: 1 
                }}
              >
                3.4
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                {[...Array(5)].map((_, i) => (
                  <Box
                    key={i}
                    component="span"
                    sx={{ color: "#facc15", fontSize: { sm: "0.75rem", md: "1rem" } }}
                  >
                    ★
                  </Box>
                ))}
              </Box>
              <Box
                component="span"
                sx={{ fontSize: { sm: "0.6rem", md: "0.75rem" }, color: "grey.500" }}
              >
                1,360 reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative", mt: { xs: "-10px", md: "-20px" }, ml: 0 }}>
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
            src="/Clock.svg"
            alt="Clock"
            width={20}
            height={20}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          Open until 3:00 AM
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{ maxWidth: 1728, mx: "auto", px: { xs: 2, md: 3 }, py: 3 }}
      >
        <Grid item xs={12} md={6}>
          <Box 
            component="h2" 
            sx={{ 
              fontSize: { xs: "1rem", md: "1.25rem" }, 
              fontWeight: 600,
              textAlign: { xs: "center", md: "left" }
            }}
          >
            All Offers from McDonald's East London
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ 
            display: "flex", 
            justifyContent: { xs: "center", md: "flex-end" } 
          }}
        >
          <TextField
            placeholder="Search from menu..."
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "#fff",
              borderRadius: "9999px",
              width: { xs: "100%", sm: "300px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "9999px",
                paddingLeft: "12px",
              },
              "& .MuiOutlinedInput-input": {
                padding: "8.5px 14px 8.5px 0",
              },
              marginLeft: { xs: 0, md: "520px" },
              marginRight: 0,
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          bgcolor: "#33a9c9",
          py: 1,
          overflowX: "auto",
        }}
      >
        <Box sx={{ maxWidth: 1728, mx: "auto", px: { xs: 1, md: 3 } }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", md: "space-between" },
                width: "100%",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "Poppins",
                fontSize: { xs: "0.75rem", md: "0.9rem" },
                color: "#fff",
                minHeight: "36px",
                px: { xs: 1, md: 2 },
                mx: 0.5,
                flex: { xs: "0 0 auto", md: "1 1 auto" },
                maxWidth: "none",
              },
              "& .Mui-selected": {
                color: "#33a9c9",
                bgcolor: "#fff",
                borderRadius: "9999px",
              },
            }}
          >
            {[
              "Offers",
              "Burgers",
              "Fries",
              "Snacks",
              "Salads",
              "Cold drinks",
              "Happy Meal®",
              "Desserts",
              "Hot drinks",
              "Sauces",
              "Orbit®",
            ].map((label) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1728, mx: "auto", px: 2.5, py: 4 }}>
  <Grid container spacing={3}>
    {/* First Order Discount Card */}
    <Grid item xs={10} sm={6} md={4}>
      <Box
        sx={{
          width:{ xs: 320, sm: 386 },
          height: { xs: 220, sm: 265 },
          backgroundImage: 'url(FirstOrder.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: -10,
            right: 30,
            height:"60px",
            backgroundColor: '#050505ff',
            color: 'white',
            padding: '25px 8px 30px 8px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          -20%
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            zIndex: 1,
          }}
        >
          <Typography 
            variant="body2"
            sx={{
              color: '#33a9c9',
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: '0.875rem',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            McDonald's East London
          </Typography>
          
          <Typography 
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            First Order Discount
          </Typography>
        </Box>
        
        {/* INVERTED Quarter-circle with plus image */}
        <Box sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          width: 80,
          height: 80,
          borderRadius: '40px 0 0 0', // Inverted quarter-circle (top-left curve)
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          {/* Quarter-circle background image */}
          <Box
            component="img"
            src="/square.svg"
            alt=""
            sx={{
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              ml: '-20%',
              mt: '-20%',
              transform: 'rotate(180deg)'
            }}
          />
          
          {/* Plus image */}
          <Box
            component="img"
            src="/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: 24,
              left:20,
              width: 35,
              height: 35,
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '4px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </Box>
    </Grid>
    
    {/* Second Discount Card */}
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          width:{ xs: 320, sm: 386 },
          height: { xs: 220, sm: 265 },
          backgroundImage: 'url(Vegan.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
           px: { xs: 4, md: 3 }, 
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: -10,
            right: 30,
            height:"60px",
            backgroundColor: '#050505ff',
            color: 'white',
            padding: '25px 8px 30px 8px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          -20%
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            zIndex: 1,
          }}
        >
          <Typography 
            variant="body2"
            sx={{
              color: '#33a9c9',
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: '0.875rem',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            McDonald's East London
          </Typography>
          
          <Typography 
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            Vegan Discount
          </Typography>
        </Box>
        
        {/* INVERTED Quarter-circle with plus image */}
        <Box sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          width: 80,
          height: 80,
          borderRadius: '40px 0 0 0',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          <Box
            component="img"
            src="/square.svg"
            alt=""
            sx={{
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              ml: '-20%',
              mt: '-20%',
              transform: 'rotate(180deg)'
            }}
          />
          
          <Box
            component="img"
            src="/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: 24,
              left: 20,
              width: 35,
              height: 35,
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '4px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </Box>
    </Grid>
    
    {/* Third Discount Card */}
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
         width:{ xs: 320, sm: 386 },
          height: { xs: 220, sm: 265 },
          backgroundImage: 'url(Ice-Cream.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: -10,
            right: 30,
            height:"60px",
            backgroundColor: '#050505ff',
            color: 'white',
            padding: '25px 8px 30px 8px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          -100% 
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            zIndex: 1,
          }}
        >
          <Typography 
            variant="body2"
            sx={{
              color: '#33a9c9',
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: '0.875rem',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            McDonald's East London
          </Typography>
          
          <Typography 
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            Free Ice-Cream Offer
          </Typography>
        </Box>
        
        {/* INVERTED Quarter-circle with plus image */}
        <Box sx={{
          position: 'absolute',
          bottom: -10,
          right: -10,
          width: 80,
          height: 80,
          borderRadius: '40px 0 0 0',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          <Box
            component="img"
            src="/square.svg"
            alt=""
            sx={{
              width: '140%',
              height: '140%',
              objectFit: 'cover',
              ml: '-20%',
              mt: '-20%',
              transform: 'rotate(180deg)'
            }}
          />
          
          <Box
            component="img"
            src="/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: 24,
              left: 20,
              width: 35,
              height: 35,
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '4px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box>


      <Box sx={{ 
        maxWidth: 1728, 
        mx: "auto", 
        px: { xs: 4, md: 3 }, 
        py: 4,
        fontFamily: "Poppins"
      }}>
        <Typography variant="h4" sx={{ 
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          fontWeight: "bold",
          mb: 4,
          fontFamily: "Poppins",
          color: '#33a9c9',
        }}>
          Burgers
        </Typography>
        
        <Grid container spacing={3}>
          {burgerItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BurgerCard 
                title={item.title}
                description={item.description}
                price={item.price}
                burgerImage={item.burgerImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    
      <Box sx={{ 
        maxWidth: 1728, 
        mx: "auto", 
        px: { xs: 4, md: 3 }, 
        py: 4,
        fontFamily: "Poppins"
      }}>
        <Typography variant="h4" sx={{ 
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          fontWeight: "bold",
          mb: 4,
          fontFamily: "Poppins",
          color: '#33a9c9',
        }}>
          Fries
        </Typography>
        
        <Grid container spacing={3}>
          {friesItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FriesCard 
                title={item.title}
                description={item.description}
                price={item.price}
                friesImage={item.friesImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ 
        maxWidth: 1728, 
        mx: "auto", 
        px: { xs: 4, md: 3 }, 
        py: 4,
        fontFamily: "Poppins"
      }}>
        <Typography variant="h4" sx={{ 
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          fontWeight: "bold",
          mb: 4,
          fontFamily: "Poppins",
          color: '#33a9c9',
        }}>
          Cold Drinks
        </Typography>
        
        <Grid container spacing={3}>
          {coldDrinkItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ColdDrinkCard 
                title={item.title}
                description={item.description}
                price={item.price}
                coldDrinkImage={item.coldDrinkImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ 
        maxWidth: 1728, 
        mx: "auto", 
        px: { xs: 2, md: 3 }, 
        py: 4,
        fontFamily: "Poppins"
      }}>
        <Card sx={{ 
          width: "100%",
          boxShadow: 3,
          fontFamily: 'Poppins, sans-serif',
          overflow: 'hidden',
          borderRadius: '12px'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}>
            <Box sx={{ 
              flex: 1,
              px: { xs: 2, md: 3 },
              py: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 1, }}>
                <img 
                  src="/Tracking.svg"
                  alt="Delivery" 
                  style={{ width: 24, height: 24 }} 
                />
                <Typography variant="h6" component="h2" gutterBottom fontWeight="bold" fontFamily="poppins" fontSize={{ xs: "1.2rem", md: "1.5rem" }}>
                  Delivery information
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
                {daysOfWeek.map(({ day, deliveryHours }) => (
                  <Box key={day}>
                    <Typography component="span" fontWeight="600" sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, fontFamily: 'Poppins' }}>
                      {day}:
                    </Typography>
                    <Typography component="span" sx={{ ml: 1, fontSize: { xs: '0.65rem', md: '0.75rem' }, fontFamily: 'Poppins'}}>
                      {deliveryHours}
                    </Typography>
                  </Box>
                ))}
                <Box sx={{ mt: 1.5 }}>
                  <Typography component="span" fontWeight="600" sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
                    Estimated time until delivery:
                  </Typography>
                  <Typography component="span" sx={{ ml: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                    20 min
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              flex: 1,
              px: { xs: 2, md: 3 },
              py: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              borderTop: { xs: '1px solid #e0e0e0', md: 'none' }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 1, mb: 2 }}>
                <img 
                  src="/ID Verified.svg" 
                  alt="Contact" 
                  style={{ width: 24, height: 24 }} 
                />
                <Typography variant="h6" component="h2" gutterBottom fontWeight="bold" fontFamily="poppins" fontSize={{ xs: "1.2rem", md: "1.5rem" }}>
                  Contact information
                </Typography>
              </Box>
              <Typography paragraph sx={{ mb: 2, fontSize: { xs: '0.7rem', md: '0.8rem' }, fontFamily:'poppins', lineHeight:"1.5"}}>
                If you have allergies or other dietary restrictions, please contact the restaurant. 
                The restaurant will provide food-specific information upon request.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box>
                  <Typography fontWeight="600" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>Phone number</Typography>
                  <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, mt: 0.5 }}>+934443-43</Typography>
                </Box>
                <Box>
                  <Typography fontWeight="600" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>Website</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              flex: 1,
              backgroundColor: 'black', 
              color: 'white', 
              p: { xs: 2, md: 3 },
              py: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              borderTop: { xs: '1px solid #e0e0e0', md: 'none' }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 1, mb: 2 }}>
                <img 
                  src="Clock.svg" 
                  alt="Clock" 
                  style={{ width: 24, height: 24 }} 
                />
                <Typography variant="h6" component="h2" gutterBottom fontWeight="bold" fontFamily="poppins" fontSize={{ xs: "1.2rem", md: "1.5rem" }}>
                  Operational Times
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {daysOfWeek.map(({ day, operationalHours }) => (
                  <Box key={`operational-${day}`}>
                    <Typography component="span" fontWeight="600" sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, fontFamily: 'Poppins' }}>
                      {day}:
                    </Typography>
                    <Typography component="span" sx={{ ml: 1, fontSize: { xs: '0.65rem', md: '0.75rem' }, fontFamily: 'Poppins' }}>
                      {operationalHours}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box 
        sx={{
          position: 'relative',
          maxWidth: 1528,
          width: '100%',
          height: { xs: 200, sm: 280 },
          margin: '40px auto 30px',
          borderRadius: "12px",
          overflow: 'hidden',
          backgroundImage: 'url(/map.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            p: { xs: 2, sm: 6 },
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}
        >
          <Card sx={{ 
            bgcolor: 'rgba(9, 9, 9, 0.9)',
            color:"white",
            maxWidth: 400,
            height: { xs: 180, sm: 250 },
            width: { xs: '90%', sm: 'auto' },
            borderRadius: 2,
            mx: { xs: 'auto', sm: 0 }
          }}>
            <CardContent>
              <Typography variant={{ xs: "h6", sm: "h5" }} gutterBottom fontWeight="bold" fontSize={{ xs: "0.9rem", sm: "1rem" }} fontFamily="poppins">
                McDonald's South London
              </Typography>
              
              <Typography variant="body1" paragraph fontSize={{ xs: "0.7rem", sm: "0.75rem" }} fontFamily="poppins">
                Tooley St, London Bridge, London SE1 21F, United Kingdom
              </Typography>

              <Box>
                <Typography variant={{ xs: "subtitle2", sm: "h6" }} fontWeight="bold" gutterBottom fontSize={{ xs: "0.8rem", sm: "1rem" }}>
                  Contact Information
                </Typography>
                <Typography fontSize={{ xs: "0.7rem", sm: "0.8rem" }}>Phone number: +934443-43</Typography>
                <Typography fontSize={{ xs: "0.7rem", sm: "0.8rem" }}>Website: http://mcdonoids.uk/</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box sx={{ 
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        backgroundColor: '#f5f5f5',
        marginBottom:"80px",
        py: { xs: 6, md: 12 },
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4
          }}>
            <Typography variant="h4" component="h1" sx={{ 
              fontWeight: 'bold',
              fontFamily:"poppins",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}>
              Customer Reviews
            </Typography>
            
            <Box>
              <IconButton sx={{ 
                mr: 1,
                backgroundColor: '#33a9c9',
                color: 'white',
                '&:hover': { backgroundColor: '#2a8fb3' }
              }}>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{
                backgroundColor: '#33a9c9',
                color: 'white',
                '&:hover': { backgroundColor: '#2a8fb3' }
              }}>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            pb: 2
          }}>
            {reviews.map((review, index) => (
              <Card key={index} elevation={0} sx={{ 
                flex: 1,
                minWidth: { xs: '100%', md: 'auto' },
                backgroundColor: 'white',
                borderRadius: 2,
                p: 3,
                boxShadow: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                },
                position: 'relative'
              }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src="/Profile.svg"
                        alt="Profile"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #f5f5f5',
                        }}
                      />
                      
                      <Divider orientation="vertical" flexItem sx={{ 
                        height: 34,
                        borderColor: ' #3AA1C4',
                        alignSelf: 'center'
                      }} />
                      
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 'bold',
                           fontFamily:"poppins",
                           fontSize: { xs: "0.7rem", md: "0.8rem" },
                        }}>
                          {review.author}
                        </Typography>
                        <Typography variant="body2" color=" #3AA1C4" fontSize={{ xs: "0.6rem", md: "0.7rem" }}>
                          {review.location}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={review.rating} size="small" readOnly />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                        <Box
                          component="img"
                          src="/Time Span.svg"
                          alt=""
                          sx={{
                            width: '14px',
                            height: '14px',
                            mr: 0.5,
                            filter: 'brightness(0) saturate(100%) invert(65%) sepia(6%) saturate(370%) hue-rotate(169deg) brightness(90%) contrast(86%)'
                          }}
                        />
                        <Typography variant="body2" color="text.secondary"  fontFamily="poppins" fontSize={{ xs: "0.6rem", md: "0.75rem" }}>
                          {review.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ 
                    mt: 2,
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                    fontFamily:"poppins",
                    fontWeight:"semi-bold",
                    lineHeight: 1.6
                  }}>
                    {review.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: -50, md: -50 },
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: 'white',
              borderRadius: '8px',
              px: 0.75,
              py: 1.5,
              boxShadow: 3,
              zIndex: 30,
              width: { xs: '100px', md: '90px' },
              textAlign: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="span"
                sx={{ 
                  fontSize: { xs: '1.5rem', md: '2rem' }, 
                  fontWeight: 'semi-bold', 
                  lineHeight: 1 
                }}
              >
                3.4
              </Box>
              <Box sx={{ display: 'flex', mb: 0.5 }}>
                {[...Array(5)].map((_, i) => (
                  <Box
                    key={i}
                    component="span"
                    sx={{ color: '#facc15', fontSize: { xs: '0.75rem', md: '1rem' } }}
                  >
                    ★
                  </Box>
                ))}
              </Box>
              <Box
                component="span"
                sx={{ fontSize: { xs: '0.6rem', md: '0.75rem' }, color: 'grey.500' }}
              >
                1,360 reviews
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ 
  width: '100%',
  py: 6,
  backgroundColor: '#ffffff',
  fontFamily: 'Poppins, sans-serif'
}}>
  <Container maxWidth="lg">
    {/* Section Title */}
    <Typography variant="h4" sx={{ 
      fontWeight: 'bold',
      fontSize: '1.5rem',
      fontFamily:"poppins",
      textAlign:"left",
      mb: 4,
      color: '#333'
    }}>
      Similar Restaurants
    </Typography>
    
    {/* Restaurant Grid */}
    <Grid container spacing={3} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
      {restaurants.map((restaurant, index) => (
        <Grid item xs={10} sm={4} md={2} key={index} sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box sx={{
            width: 170,
            height: 208,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)'
            }
          }}>
            {/* Image Section - Top */}
            <Box sx={{ 
              height: 140,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              
            }}>
              <Box sx={{ 
                width: '100%',
                height: '100%',
                position: 'relative'
              }}>
                <Image
                  src={restaurant.logo}
                  alt={restaurant.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
            
            {/* Text Section - Bottom with Blue BG */}
            <Box sx={{ 
              height: 65,
              backgroundColor: '#33a9c9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
            }}>
              <Typography sx={{ 
                fontWeight: "bold",
                fontSize: '1rem',
                textAlign: 'center',
                color: 'white',
                
              }}>
                {restaurant.name}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
    </Box>
  );
}