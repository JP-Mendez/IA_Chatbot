# NeuroStudy Agent

NeuroStudy Agent is a mock full-stack-ready study assistant for university students in demanding fields like biomedical engineering, neuroscience, and machine learning.

It provides a clean, professional workspace for:
- topic understanding and guided study
- source organization
- exam preparation workflows
- active recall and spaced repetition practice
- future Google Cloud + NotebookLM-style integration

## Tech stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Available pages

- `/` Home / Landing page
- `/dashboard` Study Dashboard
- `/courses` Courses list
- `/courses/[id]` Course detail
- `/sources` Source Management
- `/agent` AI Study Agent chat workspace
- `/exam-prep` Exam Preparation Mode
- `/flashcards` Memory and Memorization module
- `/study-plan` Knowledge Acquisition + Notes Generator
- `/settings` Integration readiness settings

## Project structure

```txt
src/
  app/
  components/
  data/
  lib/
  services/
  types/
  utils/
```

## Mock data included

- sample courses with progress and exam metadata
- sample source records with type, topic, date, difficulty, and origin
- sample flashcards with tags, review status, active recall prompts, and cloze examples
- sample exam prep output bundles (study plan, priority topics, practice questions, mistakes)

## AI behavior templates

System prompt templates are provided in `src/lib/prompts.ts`:
- Tutor mode
- Exam coach mode
- Socratic mode
- Flashcard generator mode
- Source-grounded NotebookLM mode

## Google Cloud and NotebookLM-style future integration

Placeholder modules are ready in `src/services/` with explicit TODOs:
- `googleCloudStorage.ts` for source uploads
- `vertexAi.ts` for Gemini/Vertex responses
- `googleDrive.ts` for Drive imports
- `notebookLm.ts` for source-grounded QA
- `userDataStore.ts` for Firestore/Cloud SQL persistence
- `googleAuth.ts` for Google OAuth

These are intentionally mock implementations with TODO markers so real cloud credentials and secure server-side flows can be implemented later.

## Notes

- This is a working mock version designed to run immediately.
- Forms and actions are placeholder UX for architecture demonstration.
