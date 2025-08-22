// src/components/RestaurantReviews.jsx
"use client";
import { Box, Card, CardContent, Container, Divider, IconButton, Rating, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const reviews = [
  {
    author: 'St Gfx',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    content: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.'
  },
  {
    author: 'Jane D.',
    location: 'East London',
    date: '15th October, 2023',
    rating: 4,
    content: 'Great service and tasty food. The delivery was faster than expected. Only minor complaint is that the fries could have been crispier.'
  },
  {
    author: 'Mike T.',
    location: 'Central London',
    date: '5th November, 2023',
    rating: 5,
    content: 'Consistently good quality and fast service. My go-to place for quick meals. The new spicy burger is amazing!'
  }
];

export default function RestaurantReviews() {
  return (
    <Box sx={{ 
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      backgroundColor: '#f5f5f5',
      marginBottom: "80px",
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
            fontFamily: "poppins",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color:"#000000"
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
              p: 2,
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
                      src="/assets/Profile.svg"
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
                        fontFamily: "poppins",
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
                        src="/assets/Time Span.svg"
                        alt=""
                        sx={{
                          width: '14px',
                          height: '14px',
                          mr: 0.5,
                          filter: 'brightness(0) saturate(100%) invert(65%) sepia(6%) saturate(370%) hue-rotate(169deg) brightness(90%) contrast(86%)'
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" fontFamily="poppins" fontSize={{ xs: "0.6rem", md: "0.75rem" }}>
                        {review.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Typography variant="body1" sx={{ 
                  mt: 2,
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  fontFamily: "poppins",
                  fontWeight: "semi-bold",
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
                lineHeight: 1, 
                color: '#000000'
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
  );
}
