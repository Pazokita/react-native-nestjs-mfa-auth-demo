import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { Alert } from 'react-native';
import { login, verifyOtp } from '../services/authApi';
import * as SecureStore from 'expo-secure-store';

type User = {
  email: string;
  firstName?: string;
  lastName?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  sessionToken: string | null;
  accessToken: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  verifyOtpCode: (otp: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
console.log('📨 Tentative login');
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const isAuthenticated = !!accessToken;

  const signIn = async (email: string, password: string) => {
    console.log('📨 Tentative login avec :', email, password);
    try {
      const res = await login(email, password);
      console.log('✅ Réponse login :', res);
      setSessionToken(res.sessionToken);
    } catch (err) {
      console.log('❌ Erreur login :', err);
      Alert.alert('Erreur', 'Email ou mot de passe invalide');
    }
  };

  const verifyOtpCode = async (otp: string) => {
    try {
      if (!sessionToken) return;
      const { accessToken, refreshToken, user } = await verifyOtp(otp, sessionToken);
      await SecureStore.setItemAsync('accessToken', accessToken);
      await SecureStore.setItemAsync('refreshToken', refreshToken);
      setAccessToken(accessToken);
      setUser(user);
    } catch (err) {
      Alert.alert("Erreur", "Code OTP invalide");
    }
  };

  const signOut = () => {
    setUser(null);
    setAccessToken(null);
    setSessionToken(null);
    SecureStore.deleteItemAsync('accessToken');
    SecureStore.deleteItemAsync('refreshToken');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        sessionToken,
        accessToken,
        isAuthenticated,
        signIn,
        verifyOtpCode,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};