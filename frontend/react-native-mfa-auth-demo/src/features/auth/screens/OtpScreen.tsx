import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useAuth } from '../context/AuthProvider';
import { FONTS } from '../../../shared/theme/fonts';
import { COLORS } from '../../../shared/theme/theme';

export default function OtpScreen() {
  const { verifyOtpCode } = useAuth();
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    verifyOtpCode(code);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code de vérification</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="6 chiffres"
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.background,
    padding: 12,
    fontFamily: FONTS.regular,
    fontSize: 18,
    borderRadius: 8,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.background,
    padding: 14,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});