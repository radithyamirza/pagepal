import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Book, ReadingSession } from '@/types/models';
import { mockBooks } from '@/data/mockBooks';

interface BooksState {
  books: Book[];
  sessions: ReadingSession[];
  addBook: (book: Omit<Book, 'id'>) => void;
  logSession: (session: Omit<ReadingSession, 'id' | 'timestamp'>) => void;
  updatePage: (bookId: string, currentPage: number) => void;
  markFinished: (bookId: string) => void;
}

export const useBooksStore = create<BooksState>()(
  persist(
    (set) => ({
      books: mockBooks,
      sessions: [],
      addBook: (book) =>
        set((state) => ({
          books: [
            ...state.books,
            { ...book, id: Math.random().toString(36).slice(2) },
          ],
        })),
      logSession: (session) =>
        set((state) => ({
          sessions: [
            ...state.sessions,
            {
              ...session,
              id: Math.random().toString(36).slice(2),
              timestamp: new Date().toISOString(),
            },
          ],
        })),
      updatePage: (bookId, currentPage) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === bookId ? { ...book, currentPage, status: 'reading' } : book,
          ),
        })),
      markFinished: (bookId) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === bookId
              ? {
                  ...book,
                  currentPage: book.totalPages,
                  status: 'completed',
                  finishedAt: new Date().toISOString(),
                }
              : book,
          ),
        })),
    }),
    {
      name: 'pagepal-books-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
