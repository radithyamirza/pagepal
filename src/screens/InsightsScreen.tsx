import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useBooksStore } from '@/store/useBooksStore';
import { useReadingInsights } from '@/hooks/useReadingInsights';

export const InsightsScreen = () => {
  const books = useBooksStore((s) => s.books);
  const insights = useReadingInsights();

  const genreData = Object.entries(
    books.reduce<Record<string, number>>((acc, book) => {
      acc[book.genre] = (acc[book.genre] || 0) + 1;
      return acc;
    }, {}),
  ).map(([x, y]) => ({ x, y }));

  return (
    <View className="flex-1 bg-slate-950 px-4 pt-16">
      <Text className="text-3xl font-bold text-white">Insights</Text>
      <Text className="mt-2 text-slate-300">Avg pages/session: {insights.avgPagesPerSession}</Text>
      <Text className="text-slate-300">Reading pace: {insights.pagesPerHour} pages/hour</Text>

      <View className="mt-6 items-center rounded-2xl bg-slate-800 p-4">
        <Text className="mb-2 text-lg font-semibold text-white">Genre distribution</Text>
        {genreData.length ? (
          <VictoryPie
            width={280}
            height={240}
            innerRadius={45}
            colorScale={['#4F46E5', '#06B6D4', '#22C55E', '#F97316', '#EAB308']}
            data={genreData}
            style={{ labels: { fill: 'white', fontSize: 12 } }}
          />
        ) : (
          <Text className="text-slate-400">No data yet</Text>
        )}
      </View>
    </View>
  );
};
