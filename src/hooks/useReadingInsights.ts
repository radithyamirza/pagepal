import { useMemo } from 'react';
import { useBooksStore } from '@/store/useBooksStore';
import { getAveragePagesPerSession, getCompletedThisMonth, getPagesPerHour } from '@/utils/analytics';

export const useReadingInsights = () => {
  const books = useBooksStore((s) => s.books);
  const sessions = useBooksStore((s) => s.sessions);

  return useMemo(
    () => ({
      booksCompletedThisMonth: getCompletedThisMonth(books),
      avgPagesPerSession: Math.round(getAveragePagesPerSession(sessions)),
      pagesPerHour: Math.round(getPagesPerHour(sessions)),
      readingStreak: Math.min(books.length + sessions.length, 21),
    }),
    [books, sessions],
  );
};
