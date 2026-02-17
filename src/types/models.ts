export type BookStatus = 'reading' | 'completed' | 'want-to-read';

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  readingGoal: number;
}

export interface Book {
  id: string;
  userId: string;
  title: string;
  author: string;
  totalPages: number;
  currentPage: number;
  coverUrl?: string;
  genre: string;
  status: BookStatus;
  startedAt?: string;
  finishedAt?: string;
}

export interface ReadingSession {
  id: string;
  bookId: string;
  pagesRead: number;
  durationMinutes: number;
  timestamp: string;
  notes?: string;
}

export interface Achievement {
  id: string;
  userId: string;
  achievementType: string;
  unlockedAt: string;
}

export interface ReadingGoal {
  id: string;
  userId: string;
  goalType: 'pages-per-day' | 'books-per-month';
  targetValue: number;
  startDate: string;
  endDate: string;
}
