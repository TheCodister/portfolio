# Portfolio Website

A modern, data-driven portfolio website with a terminal-inspired aesthetic. Built with React, TypeScript, and Vite, this portfolio dynamically renders content from a JSON configuration file, making it easy to update your professional information without touching code.

## Features

- **Data-Driven Architecture**: All portfolio content is managed through a single JSON file (`public/portfolio.json`)
- **Terminal Aesthetic**: Cyberpunk-inspired UI with terminal-style typography and visual effects
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Type-Safe**: Built with TypeScript for type safety and better developer experience
- **Modern Stack**: Leverages React 18, Vite, and TanStack Query for optimal performance
- **Component Library**: Uses shadcn/ui components built on Radix UI primitives
- **Smooth Animations**: Framer Motion animations and typewriter effects for engaging user experience
- **SEO Optimized**: Includes robots.txt and proper meta tags for search engine optimization

## Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Data Management
- **TanStack Query** - Server state management and data fetching
- **JSON** - Portfolio data storage

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **Prettier** - Code formatting (via ESLint)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm) for version management)
- npm, pnpm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Project Structure

```
portfolio/
├── public/
│   ├── portfolio.json      # Main data file containing all portfolio content
│   ├── robots.txt          # SEO robots configuration
│   └── favicon.ico         # Site favicon
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── CertificationsSection.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── usePortfolio.ts
│   ├── pages/             # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── types/             # TypeScript type definitions
│   │   └── portfolio.ts
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── package.json
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Customization

### Updating Portfolio Content

All portfolio content is stored in `public/portfolio.json`. Simply edit this file to update:

- **Profile Information**: Name, title, social links, email
- **Experience**: Work history with descriptions and technologies
- **Education**: Academic background and achievements
- **Skills**: Programming languages, frameworks, and methodologies
- **Projects**: Portfolio projects with descriptions, tech stacks, and links
- **Certifications**: Professional certifications and credentials

The application will automatically reflect changes after reloading.

### Styling

The project uses Tailwind CSS for styling. Key customization points:

- **Colors**: Edit `tailwind.config.ts` to modify the color scheme
- **Typography**: Font families and sizes are configured in `tailwind.config.ts`
- **Components**: Individual component styles can be modified in `src/components/`

### Theme

The terminal aesthetic is achieved through:
- Custom CSS classes in `src/index.css`
- Terminal-style fonts (monospace)
- Glow effects and scanline overlays
- Color scheme optimized for dark terminal themes

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

## Deployment

This portfolio can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

### Other Platforms
Any platform that supports static site hosting (AWS S3, Cloudflare Pages, etc.) will work. Simply build the project and upload the `dist/` directory.

## Testing

The project includes both unit tests and end-to-end tests:

- **Unit Tests**: Located in `src/test/`, using Vitest
- **E2E Tests**: Configured with Playwright

Run tests with:
```bash
npm test              # Unit tests
npm run test:watch    # Watch mode
npx playwright test   # E2E tests
```

## Browser Support

This portfolio supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The portfolio is optimized for performance:
- Code splitting with Vite
- Lazy loading of components
- Optimized asset bundling
- Minimal runtime dependencies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Contact

For questions or inquiries, please reach out through the contact information in the portfolio.
