# Index

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## About
With `react-portfolio`, you can use JSON and Markdown files to render create pages per different languages.

## Features
- Converts JSON and Markdown files to a Single Page Application.
- Fully responsive and mobile first.
- Supports localization for multi-lingual portfolios.
- Supports build-time and runtime theming.
- Supports routing: each markdown file is mapped to a different route.
- Uses LocalStorage for persisting state between visits.
- Uses caching for improved performance and user experience.
- Leverages `.env` files to support different configurations in dev and prod environments.
- Uses CSS animations, animated SVG, and Lottie animations where they serve best.
- And more...

## Demo
[My very own Portfolio](https://iding.ir)

## Tech Stack
- `TypeScript`.
- `React`.
- `Redux Toolkit` for state management, querying, caching, and handling effects.
- `React Router` for handling routes.
- `React i18next` for localization.
- `Redux Persist` for persisting the state of app between user views.
- `Markdown to JSX` for rendering `.md` files.
- `SCSS Modules` for component-scoped styles.
- `React Helmet Async` for changing `head` in runtime.
- `Lottie` animations for loader.
- `Vite` for building the project.

## Installation

Clone:
```
git clone https://github.com/iding-ir/react-portfolio.git
```

Install dependencies:
```
yarn install
```

Run dev environment:
```
yarn dev
```