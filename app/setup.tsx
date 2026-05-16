import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function SetupScreen() {
  const [apiId, setApiId] = useState('');
  const [apiHash, setApiHash] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    if (!apiId.trim() || !apiHash.trim()) {
      Alert.alert('خطأ', 'يرجى إدخال API ID و API Hash');
      return;
    }

    setLoading(true);
    try {
      await AsyncStorage.setItem('telegram_api_id', apiId);
      await AsyncStorage.setItem('telegram_api_hash', apiHash);
      await AsyncStorage.setItem('telegram_setup_done', 'true');
      
      Alert.alert('نجاح', 'تم حفظ البيانات بنجاح');
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('خطأ', 'حدث خطأ أثناء حفظ البيانات');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إعداد Falcon Pro</Text>
      <Text style={styles.subtitle}>أدخل بيانات Telegram API</Text>
      
      <TextInput
        style={styles.input}
        placeholder="API ID"
        placeholderTextColor="#999"
        value={apiId}
        onChangeText={setApiId}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="API Hash"
        placeholderTextColor="#999"
        value={apiHash}
        onChangeText={setApiHash}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSave}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'جاري الحفظ...' : 'حفظ والمتابعة'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#030712',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#1a1a2e',
  },
  button: {
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
