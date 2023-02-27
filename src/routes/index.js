import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import Details from '../pages/Details';

import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details" element={<Details />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;