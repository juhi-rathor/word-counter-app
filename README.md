
# Word Counter App

A simple and interactive web application to count characters and sentences in your text, built with React and Vite.

## Features
- Live character count (ignores extra whitespace)
- Live sentence count (splits on `.`, `!`, `?`, etc.)
- Clean, responsive UI

## How It Works
- Type or paste your text into the textarea.
- The app automatically updates the character and sentence counts as you type.
- Character count collapses multiple spaces/tabs/newlines into a single space.
- Sentence count splits text using punctuation marks like `.`, `!`, and `?` and ignores empty results.

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy (GitHub Pages)
```bash
npm run deploy
```

## Project Structure
```
word-counter-app/
├── public/
├── src/
│   ├── components/
│   │   └── WordCounter.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## License
MIT
