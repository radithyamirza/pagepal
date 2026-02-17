# PagePal (Expo + React Native)

A production-oriented starter app for tracking reading habits, progress, and insights.

## Implemented foundation

- Expo SDK 52+ + TypeScript + Expo Router
- Zustand + AsyncStorage persistence for local-first state
- React Query for server state (book search)
- SQLite initialization for offline-first data model foundation
- FlashList for virtualized shelves
- Victory-native chart for genre distribution
- NativeWind styling and dark UI baseline
- Haptics + notifications setup hooks
- CI workflow, lint/typecheck/test scaffolding, husky pre-commit hook

## Screens

- Home: shelf overview, streak stat, quick-add progress
- Insights: pace and genre distribution chart
- Search: OpenLibrary API search and add to shelf

## Folder structure

```txt
/src
  /components
  /screens
  /hooks
  /services
  /store
  /utils
  /types
```

## Run

```bash
npm install
npm run start
```

## Next milestones to match full PRD

- Authentication and cloud sync (Supabase/Firebase)
- Reading sessions UI with notes/highlights and reminders
- Achievements/challenges engine with animations
- Heatmap, projected finish dates, and richer analytics
- Accessibility polish + full test suite to 80%+
