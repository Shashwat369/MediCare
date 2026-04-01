import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userInfoString = localStorage.getItem('userInfo');

  if (!token || !userInfoString) {
    return <Navigate to="/login" replace />;
  }

  const userInfo = JSON.parse(userInfoString);

  if (allowedRoles && !allowedRoles.includes(userInfo.role)) {
    if (userInfo.role === 'user') return <Navigate to="/dashboard" replace />;
    if (userInfo.role === 'seller') return <Navigate to="/seller-dashboard" replace />;
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
