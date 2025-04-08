import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Typography, Box } from '@mui/material';
import Register from './components/Register';
import Login from './components/Login';
import Order from './components/Order';

const socket = io('http://localhost:4000');

const App = () => {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  useEffect(() => {
    socket.on('locationUpdate', (newLocation) => {
      setLocation(newLocation);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Petrol Delivery App
      </Typography>
      <Box sx={{ my: 4 }}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={{ height: '400px', width: '100%' }} center={location} zoom={15}>
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </Box>
      <Register />
      <Login />
      <Order />
    </Container>
  );
};

export default App;
