import { FlashList } from '@shopify/flash-list';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { BookCard } from '@/components/BookCard';
import { StatCard } from '@/components/StatCard';
import { useReadingInsights } from '@/hooks/useReadingInsights';
import { useBooksStore } from '@/store/useBooksStore';

export const HomeScreen = () => {
  const books = useBooksStore((s) => s.books);
  const logSession = useBooksStore((s) => s.logSession);
  const insights = useReadingInsights();
  const router = useRouter();

  return (
    <View className="flex-1 bg-slate-950 px-4 pt-16">
      <Text className="text-3xl font-bold text-white">PagePal</Text>
      <Text className="mt-1 text-slate-300">Read consistently, finish more books.</Text>

      <View className="mt-5 flex-row gap-3">
        <StatCard label="Streak" value={`${insights.readingStreak} days`} />
        <StatCard label="Books this month" value={insights.booksCompletedThisMonth} />
      </View>

      <FlashList
        estimatedItemSize={124}
        data={books}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <BookCard
            book={item}
            onQuickLog={async () => {
              await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              logSession({
                bookId: item.id,
                pagesRead: 10,
                durationMinutes: 20,
                notes: 'Quick-add session',
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text className="text-slate-300">Add your first book to start tracking.</Text>}
      />

      <Text className="pb-5 text-center text-slate-400" onPress={() => router.push('/search')}>
        Search and add books
      </Text>
    </View>
  );
};
