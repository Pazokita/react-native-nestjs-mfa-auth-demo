import React from 'react';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { AuthProvider } from './src/features/auth/context/AuthProvider';
import LoginScreen from './src/features/auth/screens/LoginScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  
  if (!fontsLoaded) return null;
  return (
    <AuthProvider>
      <LoginScreen />
    </AuthProvider>
  );
}