// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  // Verifica si hay un token en el localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to="/blog/login" />;
}

export default PrivateRoute;
