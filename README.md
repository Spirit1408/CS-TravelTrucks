# Travel Trucks

Travel Trucks is a web application for managing cargo transportation, developed using modern React and Vite technologies.

## Technologies

- React 18
- Vite
- Redux Toolkit (state management)
- React Router DOM (routing)
- Axios (HTTP requests)
- React DatePicker (date selection)
- React Toastify (notifications)
- Yet Another React Lightbox (image gallery)

## Requirements

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [repository URL]
cd cs-traveltrucks
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Linting
```bash
npm run lint
```

## Project Structure

- `/src` - source code
  - `/components` - reusable components
  - `/images` - images and media files
  - `/pages` - page components
  - `/redux` - Redux configuration, reducers and actions
  - `helpers.js` - utility functions
  - `index.css` - global styles
  - `main.jsx` - application entry point
- `/public` - static files
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration
- `package.json` - project dependencies and scripts
- `vercel.json` - deployment configuration

## Deployment

The project is configured for deployment on the Vercel platform. Configuration can be found in the `vercel.json` file.

## License

MIT
