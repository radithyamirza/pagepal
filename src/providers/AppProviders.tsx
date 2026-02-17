import { PropsWithChildren, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as Notifications from 'expo-notifications';
import { initDatabase } from '@/services/database';

const queryClient = new QueryClient();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const AppProviders = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    initDatabase().catch(() => undefined);
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
