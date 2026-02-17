import { getAveragePagesPerSession, getCompletedThisMonth, getPagesPerHour } from '@/utils/analytics';

describe('analytics', () => {
  it('computes average pages per session', () => {
    expect(
      getAveragePagesPerSession([
        { id: '1', bookId: 'a', pagesRead: 20, durationMinutes: 40, timestamp: '2026-01-01' },
        { id: '2', bookId: 'a', pagesRead: 10, durationMinutes: 20, timestamp: '2026-01-02' },
      ]),
    ).toBe(15);
  });

  it('computes pages per hour', () => {
    expect(
      getPagesPerHour([
        { id: '1', bookId: 'a', pagesRead: 30, durationMinutes: 60, timestamp: '2026-01-01' },
      ]),
    ).toBe(30);
  });

  it('counts completed books this month', () => {
    const now = new Date().toISOString();
    expect(
      getCompletedThisMonth([
        {
          id: '1',
          userId: 'u',
          title: 't',
          author: 'a',
          totalPages: 10,
          currentPage: 10,
          genre: 'g',
          status: 'completed',
          finishedAt: now,
        },
      ]),
    ).toBe(1);
  });
});
