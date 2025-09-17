# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server using Vite
- `pnpm build` - Build for production using Vite
- `pnpm lint` - Run ESLint to check for code issues
- `pnpm preview` - Preview the production build locally

This project uses pnpm as the package manager (version 10.4.1+).

## Architecture Overview

This is a React-based neo-brutalist portfolio website built with modern frontend technologies:

### Tech Stack
- **Framework**: React 19.1.0 with Vite as build tool
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui library with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode support

### Project Structure
- `src/components/` - Main portfolio sections (Hero, About, Skills, Projects, Experience)
- `src/components/ui/` - Reusable UI components from shadcn/ui
- `src/lib/utils.js` - Utility functions (mainly `cn` for className merging)
- `src/hooks/` - Custom React hooks
- `src/App.css` - Global styles and Tailwind configuration
- `components.json` - shadcn/ui configuration

### Design System
The project uses a neo-brutalist design approach with:
- Bold borders (`border-4 border-black`)
- Heavy shadows (`shadow-[4px_4px_0px_0px_#000000]`)
- Bright color palette (primary: #00bcd4, secondary: #2196f3, accent: #ff9800)
- Custom gradient utility class `.gradient-text`
- CSS custom properties for theming

### Key Configuration
- **Alias**: `@` points to `src/` directory
- **Import Resolution**: Configured in vite.config.js
- **Tailwind**: Uses v4 with custom theme variables and dark mode support
- **ESLint**: Configured for React with hooks and refresh plugins

### Component Architecture
Portfolio sections are organized as separate components imported into App.jsx:
- Single-page layout with vertical sections
- Each section is a self-contained component
- Uses shadcn/ui components for consistent styling
- Responsive design with grid layouts

When working with this codebase:
- Follow the established neo-brutalist design patterns
- Use the `cn()` utility from `@/lib/utils` for className merging
- Import UI components from `@/components/ui/`
- Maintain the bold, high-contrast visual style
- Use the existing color variables defined in App.css