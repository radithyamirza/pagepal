import { Book } from '@/types/models';

export const mockBooks: Book[] = [
  {
    id: '1',
    userId: 'demo',
    title: 'Atomic Habits',
    author: 'James Clear',
    totalPages: 320,
    currentPage: 124,
    genre: 'Self-help',
    status: 'reading',
    coverUrl: 'https://covers.openlibrary.org/b/id/10521270-L.jpg',
    startedAt: new Date().toISOString(),
  },
  {
    id: '2',
    userId: 'demo',
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt',
    totalPages: 352,
    currentPage: 352,
    genre: 'Technology',
    status: 'completed',
    finishedAt: new Date().toISOString(),
  },
];
