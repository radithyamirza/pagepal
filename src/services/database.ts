import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase | null = null;

export const getDb = async () => {
  if (db) return db;
  db = await SQLite.openDatabaseAsync('pagepal.db');
  return db;
};

export const initDatabase = async () => {
  const database = await getDb();
  await database.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS books (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      total_pages INTEGER NOT NULL,
      current_page INTEGER NOT NULL,
      genre TEXT,
      status TEXT NOT NULL,
      cover_url TEXT
    );

    CREATE TABLE IF NOT EXISTS reading_sessions (
      id TEXT PRIMARY KEY NOT NULL,
      book_id TEXT NOT NULL,
      pages_read INTEGER NOT NULL,
      duration_minutes INTEGER NOT NULL,
      timestamp TEXT NOT NULL,
      notes TEXT
    );
  `);
};
