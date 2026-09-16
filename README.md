# Professional Services React

A responsive professional services website built with React and Vite as part of the Nile University Front-End Internship Challenge.

## Live Demo

[View the live website](professional-services-react.vercel.app)

## Overview

This project is a fully responsive React application designed to present professional services and provide users with information about the company and its services.

The application follows the provided Figma design while using reusable React components and mock data where a live API is not available.

## Features

* Responsive design for desktop, tablet, and mobile
* Home page
* Services page
* Individual Service Details pages
* About page
* Contact page
* Responsive navigation menu
* Light/Dark theme support
* Reusable React components
* Mock JSON data for services
* Contact form connected to the provided API
* Loading and error handling for mock data
* Client-side routing with React Router

## Technologies

* React
* Vite
* React Router
* JavaScript (ES6+)
* HTML5
* CSS3
* REST API
* JSON mock data

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── hooks/
│   └── useFetchMock.js
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetails.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── data/
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── mockData/
    └── services.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hagarniazi/professional-services-react
```

### 2. Navigate to the project

```bash
cd professional-services-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available through the local development URL shown in the terminal.

## Available Scripts

### Development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

## Data & API

The application uses mock JSON data for services because a dedicated Services API is not available.

The Contact form is connected to the provided backend API and submits user messages through the API endpoint.

## Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile

The layout adapts to different screen sizes without horizontal scrolling.

## Design

The UI was implemented based on the provided Figma designs, with reusable components and responsive behavior while preserving the required project functionality.

## Project Requirements

The project focuses on:

* Clean and reusable React components
* React hooks
* Responsive layouts
* Proper routing
* Mock data handling
* API integration
* Error and loading states
* Maintainable project structure
* Lint-free and production-build-ready code

## Authors

Nile University Graduation Project Team
