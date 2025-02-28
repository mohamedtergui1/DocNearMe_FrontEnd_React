import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthUserContext } from '../context/AuthUserContext';

// Middleware to protect routes
const AuthMiddleware = ({ children }: { children: React.ReactElement }) => {
  const { authUser } = AuthUserContext();

  // If the user is not authenticated, redirect to the sign-in page
  if (!authUser.user) {
    return <Navigate to="/signin" replace />;
  }

  // If authenticated, render the children (the protected component)
  return children;
};

export default AuthMiddleware;