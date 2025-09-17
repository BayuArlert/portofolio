# Neo-Brutalist Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a bold neo-brutalist design aesthetic.

## Project Structure

```
neo-brutalist-portfolio/
├── Configuration Files
│   ├── package.json             # Dependencies and scripts
│   ├── vite.config.js           # Vite build configuration
│   ├── components.json          # shadcn/ui component configuration
│   ├── eslint.config.js         # ESLint configuration
│   └── jsconfig.json            # JavaScript project configuration
├── public/
│   └── favicon.ico              # Static assets
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root component
│   ├── App.css                  # Global application styles
│   ├── index.css                # Base styles and Tailwind imports
│   ├── components/              # React components
│   │   ├── HeroSection.jsx      # Landing/hero section
│   │   ├── AboutSection.jsx     # About me section
│   │   ├── SkillsSection.jsx    # Skills and technologies
│   │   ├── ProjectsSection.jsx  # Portfolio projects showcase
│   │   ├── ExperienceSection.jsx # Work experience timeline
│   │   └── ui/                  # Reusable UI components (shadcn/ui)
│   │       ├── button.jsx       # Button component
│   │       ├── card.jsx         # Card component
│   │       ├── badge.jsx        # Badge component
│   │       └── ...              # Other UI components
│   ├── hooks/
│   │   └── use-mobile.js        # Custom React hooks
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   └── assets/
│       └── react.svg            # Static assets and images
├── index.html                   # HTML entry point
└── pnpm-lock.yaml              # Package manager lock file
```

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with neo-brutalist design principles
- **UI Components**: shadcn/ui component library
- **Package Manager**: pnpm
- **Build Tool**: Vite

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## Features

- 🎨 Neo-brutalist design aesthetic
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🧩 Modular component architecture
- 🎯 Modern React patterns and hooks
- 🔧 Comprehensive UI component library