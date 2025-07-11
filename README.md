# AI Bar Exam Answer Ranker

A web application for reviewing and ranking AI-generated answers to bar exam questions. Users can compare AI answers to model answers, provide feedback across multiple legal criteria, and help improve the quality of AI legal reasoning.

## Features

- Presents real bar exam questions and both AI-generated and model answers
- Interactive review interface with sliders for:
  - Accuracy
  - Relevance
  - Legal Reasoning
  - Comprehensiveness
  - Clarity
- Comment box for qualitative feedback
- Progress bar and navigation between questions
- Built with React, TypeScript, and Vite
- Styled with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation & Running

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `App.tsx` — Main application component
- `components/QuestionReviewer.tsx` — Review UI for each question
- `data/mockData.ts` — Sample questions and answers
- `types.ts` — TypeScript interfaces for data models
- `constants.ts` — Feedback criteria definitions
- `index.html`, `index.tsx` — Entry point and bootstrapping

## License

MIT
