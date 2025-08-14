// components/PromotionalCards.js
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const PromotionalCards = () => {
  const promotions = [
    {
      id: 1,
      title: "First Order Discount",
      backgroundImage: "/assets/FirstOrder.svg",
      discount: "-20%"
    },
    {
      id: 2,
      title: "Vegan Discount",
      backgroundImage: "/assets/Vegan.svg",
      discount: "-20%"
    },
    {
      id: 3,
      title: "Free Ice-Cream Offer",
      backgroundImage: "/assets/Ice-Cream.svg",
      discount: "-100%"
    }
  ];

  return (
    <Box sx={{ maxWidth: 1728, mx: "auto", px: 2.5, py: 4 }}>
      <Grid container spacing={3}>
        {promotions.map((promo) => (
          <Grid item xs={12} sm={6} md={4} key={promo.id}>
            <Box
              sx={{
                width: { xs: 320, sm: 386 },
                height: { xs: 220, sm: 265 },
                backgroundImage: `url(${promo.backgroundImage})`,
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
                  height: "60px",
                  backgroundColor: '#050505ff',
                  color: 'white',
                  padding: '25px 8px 30px 8px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  zIndex: 2,
                }}
              >
                {promo.discount}
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
                    fontSize: '0.875rem',
                    fontWeight: "bold",
                    fontFamily: "Poppins",
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
                  {promo.title}
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
                  src="/assets/square.svg"
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
                  src="/assets/Plus.svg"
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
        ))}
      </Grid>
    </Box>
  );
};

export default PromotionalCards;