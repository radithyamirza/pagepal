import 'react-native-gesture-handler';
import '../src/styles/global.css';
import { Stack } from 'expo-router';
import { AppProviders } from '@/providers/AppProviders';

export default function RootLayout() {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>
  );
}
