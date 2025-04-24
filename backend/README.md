---

# 🛡️ Backend NestJS – Authentification MFA

Ce backend fournit les routes nécessaires à un système MFA via OTP pour une app mobile React Native.

## 📦 Stack

- NestJS + TypeScript
- `jsonwebtoken` pour access/refresh token
- `class-validator` pour la validation des DTOs
- OTP temporaire stocké en mémoire

## 🔐 Routes

| Méthode | URL               | Description                            |
|---------|-------------------|----------------------------------------|
| POST    | /auth/login       | Vérifie email/mot de passe             |
| POST    | /auth/verify-otp  | Vérifie le code OTP                    |
| POST    | /auth/refresh     | Renvoie un nouveau accessToken        |

## 🛠️ Installation

```bash
cd backend/nest-mfa-auth-demo
cp .env.example .env
npm install
npm run start