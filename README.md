# 🔐 React Native MFA Auth Demo

Démo complète d'**authentification multi-facteurs (MFA)** avec code OTP, développée avec :
- ⚛️ React Native (Expo) pour le frontend
- 🛡️ NestJS pour le backend
- 🧱 Architecture modulaire et sécurisée

---

## 🚀 Fonctionnalités

- Authentification par **email/mot de passe**
- Génération d'un **code OTP** (à usage unique)
- Vérification de l'OTP
- Génération et stockage sécurisé de :
  - `accessToken` (JWT)
  - `refreshToken`
- Navigation conditionnelle (Login → OTP → Home)
- Tokens stockés via `expo-secure-store`

---

## 📦 Stack technique

### Frontend (React Native Expo)
- `expo` avec TypeScript
- `@react-navigation/native` + `native-stack`
- `axios` pour les appels API
- `expo-secure-store` pour les tokens
- `@expo-google-fonts/montserrat` pour la typographie

### Backend (NestJS)
- `@nestjs/core`, `@nestjs/common`
- `class-validator` pour sécuriser les DTOs
- `jsonwebtoken` pour les tokens
- Génération OTP en mémoire avec expiration (5 min)
- CORS activé (`app.enableCors()`)

---

## 🧠 Architecture frontend

```bash
src/
├── features/
│   └── auth/
│       ├── context/         # AuthProvider central
│       ├── screens/         # LoginScreen, OtpScreen
│       └── services/        # authApi.ts
├── features/home/           # HomeScreen sécurisé
├── shared/
│   ├── theme/               # Fonts, couleurs
│   ├── utils/               # axiosInstance
│   └── components/          # Boutons réutilisables
└── navigation/              # AppNavigator.tsx
```

## 🧠 Architecture backend (NestJS)

```bash
src/
├── auth/                        # Feature d'authentification
│   ├── auth.controller.ts       # Reçoit les requêtes HTTP
│   ├── auth.service.ts          # Contient la logique métier
│   ├── auth.module.ts           # Déclare les dépendances
│   ├── otp/                     # Service de génération OTP
│   │   └── otp.service.ts
│   └── dto/                     # Objets de validation des requêtes
│       ├── login.dto.ts
│       ├── verify-otp.dto.ts
│       └── refresh-token.dto.ts
├── app.module.ts                # Module principal
├── app.controller.ts            # Route GET /
└── main.ts                      # Point d'entrée (NestFactory)
```
---

## 🧪 Identifiants de test

> Utilise ces identifiants pour tester l’authentification MFA :

```bash
Email        : test@example.com
Mot de passe : password123
OTP          : affiché dans la console du backend

```
---

## ✍️ Auteure

Démo conçue et développée par **Amalia Maturana**  
🔗 [amaliamaturana.com](https://www.amaliamaturana.com)

> 💬 Passionnée par la Clean Architecture, la sécurité côté frontend et le code bien structuré.

---
