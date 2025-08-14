// components/SimilarRestaurants.js
"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const SimilarRestaurants = () => {
  const restaurants = [
    { name: "McDonald's London", logo: "/assets/mc.svg" },
    { name: "PAPA JOHNS", logo: "/assets/papaJohns.svg" },
    { name: "KFC", logo: "/assets/kfc.svg" },
    { name: "Texas Chicken", logo: "/assets/texas.svg" },
    { name: "Burger King", logo: "/assets/BurgerKing.svg" },
    { name: "Shaurma", logo: "/assets/Shaurma.svg" },
  ];

  return (
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
          fontFamily: "poppins",
          textAlign: "left",
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
  );
};

export default SimilarRestaurants;