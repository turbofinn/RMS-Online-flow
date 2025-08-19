
/*"use client";
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
        width: '96%',
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
}*/

"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';

// Dynamically import all Leaflet components with SSR disabled
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
const useMapEvents = dynamic(
  () => import('react-leaflet').then((mod) => mod.useMapEvents),
  { ssr: false }
);

export default function RestaurantMap() {
  const defaultPosition = [51.5035, -0.0795];
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Fix for default marker icons (client-side only)
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, []);

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setSelectedPosition([lat, lng]);
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setAddress(data.display_name || 'Address not found');
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Could not fetch address');
    }
  };

  if (!isClient) return null;

  return (
    <Box 
      sx={{
        position: 'relative',
        maxWidth: 1528,
        width: '96%',
        height: { xs: 400, sm: 400 },
        margin: '40px auto 30px',
        borderRadius: "12px",
        overflow: 'hidden',
      }}
    >
      <MapContainer 
        center={defaultPosition} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={defaultPosition}>
          <Popup>
            McDonald's South London <br /> 
            Tooley St, London Bridge
          </Popup>
        </Marker>
        
        {selectedPosition && (
          <Marker position={selectedPosition}>
            <Popup>
              Selected Location <br />
              Latitude: {selectedPosition[0].toFixed(6)} <br />
              Longitude: {selectedPosition[1].toFixed(6)}
            </Popup>
          </Marker>
        )}
        
        <MapClickHandler onMapClick={handleMapClick} />
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
            <Typography variant={{ xs: "h6", sm: "h5" }} gutterBottom fontWeight="bold">
              McDonald's South London
            </Typography>
            
            <Typography variant="body1" paragraph>
              Tooley St, London Bridge, London SE1 21F, United Kingdom
            </Typography>

            {selectedPosition && (
              <Box mt={2}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  Selected Location
                </Typography>
                <Typography fontSize="0.8rem">
                  Latitude: {selectedPosition[0].toFixed(6)}
                </Typography>
                <Typography fontSize="0.8rem">
                  Longitude: {selectedPosition[1].toFixed(6)}
                </Typography>
                {address && (
                  <Typography fontSize="0.8rem" mt={1}>
                    Address: {address}
                  </Typography>
                )}
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

function MapClickHandler({ onMapClick }) {
  const map = useMapEvents({
    click(e) {
      onMapClick(e);
    },
  });
  return null;
}