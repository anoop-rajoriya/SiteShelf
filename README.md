# SiteShelf

A collection of modern landing page clones built with plain HTML & CSS.

## About

SiteShelf is a project that showcases recreations of popular landing pages. Each clone accurately replicates the design and layout of the original site using only HTML and CSS, without any JavaScript frameworks.

## Live Demo

Check out the live demo: <https://siteshelf.netlify.app/>

## Project Structure

```
SiteShelf/
├── src/                      # Source files
│   ├── index.html           # Main landing page
│   ├── base.css             # Global styles
│   ├── main.css             # Main page styles
│   ├── cursor-clone/        # Cursor landing page clone
│   │   ├── index.html
│   │   └── style.css
│   └── mintlify-clone/      # Mintlify landing page clone
│       ├── index.html
│       └── style.css
├── public/                   # Static assets
│   ├── fonts/               # Web fonts
│   ├── icons/               # SVG icons
│   └── cursor-assets/       # Cursor clone assets
│   └── mintlify-assets/     # Mintlify clone assets
├── vite.config.js           # Vite configuration
└── package.json             # Project metadata
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Clones Included

- **Cursor Clone** - A recreation of the Cursor landing page
- **Mintlify Clone** - A recreation of the Mintlify landing page

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Styling and layout
- **Vite** - Build tool and dev server

## License

Open source project.
