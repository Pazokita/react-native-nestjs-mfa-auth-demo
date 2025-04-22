import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FONTS } from '../../../shared/theme/fonts';
import { COLORS } from '../../../shared/theme/theme';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* <Image source={require('@/assets/login-image.png')} style={styles.image} /> */}

      <Text style={styles.title}>Démo MFA</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Mot de passe" secureTextEntry style={styles.input} />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontFamily: FONTS.regular,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: COLORS.background,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  button: {
    backgroundColor: COLORS.background,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: COLORS.text,
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});