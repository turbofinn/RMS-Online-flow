"use client";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const BurgerCard = ({ title, description, price, burgerImage }) => {
  return (
    <Card sx={{
      width: { xs: '100%', sm: 386 },
      height: { xs: 150, sm: 180 },
      borderRadius: 2,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      border: '1px solid #f0f0f0',
      position: 'relative',
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
            {title}
          </Typography>
          
          <Typography variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 2,
              fontSize: { xs: "0.5rem", sm: "0.6rem" },
              fontWeight: 600, // "semi-bold" is not a valid value, use 600 instead
              fontFamily: "Poppins", 
            }}>
            {description}
          </Typography>
          
          <Typography variant="h6" sx={{ 
              fontSize: { xs: "0.7rem", sm: "0.8rem" },
              mb: {xs: 2, md: 2}, // Fixed prop name (bottomMargin -> mb)
              fontWeight: "bold",
              fontFamily: "Poppins", 
            }}>
            {price}
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
          width: {xs: 60, md: 80},
          height: {xs: 60, md: 80},
          borderRadius: '30px 0 0 0',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          zIndex: 2,
          border: '2px solid white',
        }}>
          <Box
            component="img"
            src="/assets/square.svg"
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
            src="/assets/Plus.svg"
            alt="Add"
            sx={{
              position: 'absolute',
              bottom: {xs: 18, md: 28},
              left: {xs: 12, md: 16},
              width: {xs: 25, md: 30},
              height: {xs: 25, md: 30},
              backgroundColor: 'white',
              borderRadius: '50%',
              p: '3px',
              transform: 'rotate(180deg)'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const defaultBurgerItems = [
  {
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    burgerImage: "/assets/burger-img.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: "GBP 23.10",
    burgerImage: "/assets/burger-img.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: "GBP 23.10",
    burgerImage: "/assets/burger-img.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: "GBP 23.10",
    burgerImage: "/assets/burger-img.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: "GBP 23.10",
    burgerImage: "/assets/burger-img.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: "GBP 23.10",
    burgerImage: "/assets/burger-img.svg",
  }
];

const BurgerSection = ({ burgerItems = defaultBurgerItems  }) => {
  return (
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
  );
};

export default BurgerSection;