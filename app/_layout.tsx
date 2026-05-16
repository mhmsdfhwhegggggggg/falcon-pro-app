import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isSetupDone, setIsSetupDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkSetup();
  }, []);

  const checkSetup = async () => {
    try {
      const setup = await AsyncStorage.getItem('telegram_setup_done');
      setIsSetupDone(setup === 'true');
    } catch (error) {
      console.error('Error checking setup:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <Stack>
      {!isSetupDone ? (
        <Stack.Screen name="setup" options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="details" />
        </>
      )}
    </Stack>
  );
}
