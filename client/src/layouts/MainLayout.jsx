import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust import path if needed
import LandingPage from '../pages/LandingPage';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

    </>
  );
};

export default MainLayout;