const OPEN_LIBRARY_SEARCH = 'https://openlibrary.org/search.json';

export interface RemoteBook {
  key: string;
  title: string;
  author: string;
  totalPages: number;
  coverUrl?: string;
}

export const searchBooks = async (query: string): Promise<RemoteBook[]> => {
  if (!query.trim()) return [];

  const response = await fetch(`${OPEN_LIBRARY_SEARCH}?q=${encodeURIComponent(query)}&limit=10`);
  if (!response.ok) throw new Error('Could not fetch books');

  const json = await response.json();
  return (json.docs ?? []).map((doc: any) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Unknown',
    totalPages: doc.number_of_pages_median ?? 200,
    coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : undefined,
  }));
};
