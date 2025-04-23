import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../shared/theme/theme';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎉 Bienvenue sur la page d'accueil sécurisée !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.background,
    textAlign: 'center',
  },
});