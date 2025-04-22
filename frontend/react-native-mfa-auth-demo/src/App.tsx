import React from 'react';
import { AuthProvider } from './features/auth/context/AuthProvider';
import { LoginScreen } from './features/auth/screens/LoginScreen';

export default function App() {
  return (
    <AuthProvider>
      <LoginScreen />
    </AuthProvider>
  );
}