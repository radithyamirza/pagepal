import { Book, ReadingSession } from '@/types/models';

export const getAveragePagesPerSession = (sessions: ReadingSession[]) => {
  if (!sessions.length) return 0;
  return sessions.reduce((sum, s) => sum + s.pagesRead, 0) / sessions.length;
};

export const getPagesPerHour = (sessions: ReadingSession[]) => {
  const totalPages = sessions.reduce((sum, s) => sum + s.pagesRead, 0);
  const totalHours = sessions.reduce((sum, s) => sum + s.durationMinutes / 60, 0);
  if (totalHours === 0) return 0;
  return totalPages / totalHours;
};

export const getCompletedThisMonth = (books: Book[]) => {
  const now = new Date();
  return books.filter((book) => {
    if (!book.finishedAt) return false;
    const finished = new Date(book.finishedAt);
    return finished.getMonth() === now.getMonth() && finished.getFullYear() === now.getFullYear();
  }).length;
};
