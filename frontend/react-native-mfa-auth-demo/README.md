# ⚛️ React Native MFA – Frontend

Frontend mobile développé avec **React Native (Expo)** pour démontrer un système d'authentification MFA (code OTP) connecté à un backend NestJS.

## 📱 Fonctionnalités

- Écran de connexion (email + mot de passe)
- Vérification OTP via code à 6 chiffres
- Stockage sécurisé des tokens (`accessToken`, `refreshToken`)
- Navigation conditionnelle (Login → OTP → Home)

## 📦 Stack technique

- React Native + Expo SDK 52
- TypeScript
- `@react-navigation/native-stack`
- `axios`, `expo-secure-store`, `expo-font`
- Fonts : Montserrat

## 🚀 Lancer le projet

### 🔧 Prérequis

- [Node.js 18.x (LTS)](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- `nvm` conseillé : `nvm use 18`

### 🛠️ Installation

```bash
cd frontend/react-native-mfa-auth-demo
cp .env.example .env
npm install
npx expo start