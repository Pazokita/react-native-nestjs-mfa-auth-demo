import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../features/auth/screens/LoginScreen';
import OtpScreen from '../../features/auth/screens/OtpScreen';
import HomeScreen from '../../features/home/screens/HomeScreen';
import { useAuth } from '../../features/auth/context/AuthProvider';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { sessionToken, accessToken } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!sessionToken && <Stack.Screen name="Login" component={LoginScreen} />}
        {sessionToken && !accessToken && <Stack.Screen name="OTP" component={OtpScreen} />}
        {accessToken && <Stack.Screen name="Home" component={HomeScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
