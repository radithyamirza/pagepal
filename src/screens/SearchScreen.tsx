import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { searchBooks } from '@/services/booksApi';
import { useBooksStore } from '@/store/useBooksStore';

export const SearchScreen = () => {
  const addBook = useBooksStore((s) => s.addBook);
  const [query, setQuery] = useState('');
  const { mutate, data, isPending, error } = useMutation({
    mutationFn: searchBooks,
  });

  return (
    <View className="flex-1 bg-slate-950 px-4 pt-16">
      <Text className="text-3xl font-bold text-white">Search books</Text>
      <View className="mt-4 flex-row gap-2">
        <TextInput
          className="flex-1 rounded-xl bg-slate-800 p-3 text-white"
          placeholder="Search by title or author"
          placeholderTextColor="#94A3B8"
          value={query}
          onChangeText={setQuery}
        />
        <Pressable className="rounded-xl bg-brand px-5 py-3" onPress={() => mutate(query)}>
          <Text className="font-semibold text-white">Find</Text>
        </Pressable>
      </View>

      {error ? <Text className="mt-3 text-red-400">Search failed. Try again.</Text> : null}
      {isPending ? <Text className="mt-3 text-slate-300">Searching...</Text> : null}

      <ScrollView className="mt-4">
        {(data ?? []).map((book) => (
          <View key={book.key} className="mb-3 rounded-2xl bg-slate-800 p-3">
            <View className="flex-row gap-3">
              {book.coverUrl ? (
                <Image source={{ uri: book.coverUrl }} className="h-16 w-12 rounded" />
              ) : (
                <View className="h-16 w-12 rounded bg-slate-700" />
              )}
              <View className="flex-1">
                <Text className="text-base font-semibold text-white">{book.title}</Text>
                <Text className="text-slate-300">{book.author}</Text>
                <Text className="text-slate-400">~{book.totalPages} pages</Text>
              </View>
            </View>
            <Pressable
              className="mt-3 rounded-xl border border-brand px-3 py-2"
              onPress={() =>
                addBook({
                  userId: 'demo',
                  title: book.title,
                  author: book.author,
                  totalPages: book.totalPages,
                  currentPage: 0,
                  genre: 'General',
                  status: 'want-to-read',
                  coverUrl: book.coverUrl,
                })
              }
            >
              <Text className="text-center font-semibold text-brand">Add to shelf</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
