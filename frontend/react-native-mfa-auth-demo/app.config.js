import 'dotenv/config';

export default {
  expo: {
    name: "react-native-mfa-auth-demo",
    slug: "react-native-mfa-auth-demo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      backgroundColor: '#ffffff',
      resizeMode: 'contain',
    },
    newArchEnabled: true,
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      apiUrl: process.env.API_URL
    }
  }
};