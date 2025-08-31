# Overview

This is a full-stack web application for a digital marketing professional's portfolio and business website. The application features a modern React frontend with TypeScript, a Node.js/Express backend API, and PostgreSQL database integration. It serves as both a showcase for marketing services and a functional business platform with contact forms and booking capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

The frontend follows a component-based architecture with:
- Page components for different routes (home, services, portfolio, contact, booking)
- Reusable UI components in the shadcn/ui system
- Custom hooks for mobile detection and toast notifications
- Responsive design with mobile-first approach

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Development Server**: Integrated Vite dev server for hot module replacement

The backend implements a clean separation of concerns:
- Route handlers in `/server/routes.ts`
- Data access layer through storage interface abstraction
- Middleware for request logging and error handling
- Development-friendly error overlay integration

## Data Storage Solutions
- **Database**: PostgreSQL with Neon Database serverless integration
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema migrations
- **Validation**: Zod schemas for runtime type validation

The data layer features:
- Three main entities: users, contacts, and bookings
- UUID primary keys with automatic generation
- Timestamp tracking for audit trails
- Type-safe schema definitions shared between client and server

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store
- **Storage**: connect-pg-simple for persistent session storage
- **User Model**: Basic username/password authentication structure (prepared but not fully implemented)

## Build and Deployment
- **Frontend Build**: Vite with React plugin and TypeScript support
- **Backend Build**: esbuild for Node.js bundle generation
- **Development**: Concurrent frontend and backend development with hot reload
- **Production**: Static file serving with Express for SPA routing

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **express**: Web application framework for Node.js
- **react**: Frontend library with React Query for state management
- **vite**: Build tool and development server

## UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility

## Development and Tooling Dependencies
- **typescript**: Static type checking
- **@hookform/resolvers**: React Hook Form integration with Zod
- **zod**: Schema validation library
- **wouter**: Lightweight routing library for React

## Integration Dependencies
- **@tanstack/react-query**: Server state management and caching
- **date-fns**: Date manipulation utilities
- **connect-pg-simple**: PostgreSQL session store for Express
- **@replit/vite-plugin-runtime-error-modal**: Development error handling overlay