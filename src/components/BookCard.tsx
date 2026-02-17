import { View, Text, Pressable, Image } from 'react-native';
import { Book } from '@/types/models';

interface BookCardProps {
  book: Book;
  onQuickLog: () => void;
}

export const BookCard = ({ book, onQuickLog }: BookCardProps) => {
  const percent = Math.round((book.currentPage / book.totalPages) * 100);

  return (
    <View className="mb-3 rounded-2xl bg-slate-800 p-4">
      <View className="flex-row gap-3">
        {book.coverUrl ? (
          <Image source={{ uri: book.coverUrl }} className="h-20 w-14 rounded-md" />
        ) : (
          <View className="h-20 w-14 rounded-md bg-slate-700" />
        )}
        <View className="flex-1">
          <Text className="text-lg font-semibold text-white">{book.title}</Text>
          <Text className="text-slate-300">{book.author}</Text>
          <Text className="mt-2 text-sm text-slate-400">
            {book.currentPage}/{book.totalPages} pages ({percent}%)
          </Text>
        </View>
      </View>
      <Pressable className="mt-3 rounded-xl bg-brand p-3" onPress={onQuickLog}>
        <Text className="text-center font-semibold text-white">Quick Add Progress</Text>
      </Pressable>
    </View>
  );
};
