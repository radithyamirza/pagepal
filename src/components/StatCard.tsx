import { View, Text } from 'react-native';

interface StatCardProps {
  label: string;
  value: string | number;
}

export const StatCard = ({ label, value }: StatCardProps) => (
  <View className="flex-1 rounded-2xl bg-slate-800 p-4">
    <Text className="text-xs uppercase tracking-wide text-slate-400">{label}</Text>
    <Text className="mt-2 text-2xl font-bold text-white">{value}</Text>
  </View>
);
