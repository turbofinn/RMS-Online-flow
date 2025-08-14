// src/components/RestaurantMap.jsx
"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const DefaultIcon = typeof window !== 'undefined' ? 
  require('leaflet').Icon.Default : null;

if (typeof window !== 'undefined') {
  delete DefaultIcon.prototype._getIconUrl;
  require('leaflet').Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

export default function RestaurantMap() {
  const latitude = 51.5035;
  const longitude = -0.0795;
  const position = [latitude, longitude];

  return (
    <Box 
      sx={{
        position: 'relative',
        maxWidth: 1528,
        width: '97%',
        height: { xs: 400, sm: 400 },
        margin: '40px auto 30px',
        borderRadius: "12px",
        overflow: 'hidden',
      }}
    >
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            McDonald's South London <br /> 
            Tooley St, London Bridge
          </Popup>
        </Marker>
      </MapContainer>
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          zIndex: 2,
          p: { xs: 2, sm: 6 },
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          pointerEvents: 'none'
        }}
      >
        <Card sx={{ 
          bgcolor: 'rgba(9, 9, 9, 0.9)',
          color: "white",
          maxWidth: 380,
          height: { xs: 180, sm: 290 },
          width: { xs: '90%', sm: 'auto' },
          borderRadius: 2,
          mx: { xs: 'auto', sm: 0 },
          pointerEvents: 'auto'
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
  );
}