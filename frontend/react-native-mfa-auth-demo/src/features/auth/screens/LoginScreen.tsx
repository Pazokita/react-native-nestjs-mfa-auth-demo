// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../context/AuthProvider';
import { COLORS, SPACING } from '../shared/theme/theme';

export const LoginScreen = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLORS.secondary}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor={COLORS.secondary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Se connecter" onPress={() => signIn(email, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: SPACING.lg,
    color: COLORS.text,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    color: COLORS.text,
  },
});