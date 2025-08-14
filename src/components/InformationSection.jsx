"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const daysOfWeek = [
  { day: 'Monday', deliveryHours: '12:00 AM–3:00 AM, 8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Tuesday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Wednesday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Thursday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Friday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Saturday', deliveryHours: '8:00 AM–3:00 AM', operationalHours: '8:00 AM–3:00 AM' },
  { day: 'Sunday', deliveryHours: '8:00 AM–12:00 AM', operationalHours: '8:00 AM–3:00 AM' },
];

export default function RestaurantInfoCard() {
  return (
    <Card sx={{ 
      width: "98%",
      boxShadow: 3,
      fontFamily: 'Poppins, sans-serif',
      overflow: 'hidden',
      borderRadius: '12px'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        {/* Delivery Information Section */}
        <Box sx={{ 
          flex: 1,
          px: { xs: 2, md: 3 },
          py: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 1, }}>
            <Image 
              src="/assets/Tracking.svg"
              alt="Delivery" 
              width={24}
              height={24}
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

        {/* Contact Information Section */}
        <Box sx={{ 
          flex: 1,
          px: { xs: 2, md: 3 },
          py: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          borderTop: { xs: '1px solid #e0e0e0', md: 'none' }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 1, mb: 2 }}>
            <Image 
              src="/assets/ID Verified.svg" 
              alt="Contact" 
              width={24}
              height={24}
            />
            <Typography variant="h6" component="h2" gutterBottom fontWeight="bold" fontFamily="poppins" fontSize={{ xs: "1.2rem", md: "1.5rem" }}>
              Contact information
            </Typography>
          </Box>
          <Typography paragraph sx={{ mb: 2, fontSize: { xs: '0.7rem', md: '0.8rem' }, fontFamily:'poppins', lineHeight:"2.5"}}>
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

        {/* Operational Times Section */}
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
            <Image 
              src="/assets/Clock.svg" 
              alt="Clock" 
              width={24}
              height={24}
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
  );
}