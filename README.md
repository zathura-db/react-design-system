# React Design System

A comprehensive, production-ready React component library built with TypeScript and Tailwind CSS. Designed for modern web applications with a focus on accessibility, performance, and developer experience.

[![npm version](https://img.shields.io/npm/v/@zathura-db/react-design-system.svg)](https://www.npmjs.com/package/@zathura-db/react-design-system)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

## ✨ Features

- 🎨 **16+ Production-Ready Components** - Comprehensive component library
- 📘 **TypeScript First** - Full type safety and IntelliSense support
- 🎭 **Storybook Documentation** - Interactive component playground
- 🎯 **Tailwind CSS** - Utility-first styling with customization

## 📦 Installation

```bash
npm install @zathura-db/react-design-system
```

```bash
yarn add @zathura-db/react-design-system
```

```bash
pnpm add @zathura-db/react-design-system
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

### Tailwind CSS Setup

If using Tailwind CSS, add the package to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@zathura-db/react-design-system/**/*.{js,ts,jsx,tsx}",
  ],
  // ...rest of your config
};
```

## 🚀 Quick Start

```tsx
import { Button, Card } from "@zathura-db/react-design-system";

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("Clicked!")}>
        Click Me
      </Button>

      <Card title="Welcome" description="Get started with our design system" />
    </div>
  );
}
```

For implementation examples, please see [Zathura React Design System Github](https://github.com/zathura-db/react-design-system) each component has stories which outline its usage.

## 📚 Components

### Layout

- **Footer** - Customizable page footer
- **Section** - Page section wrapper with styling options

### Interactive Elements

- **Button** - Multiple variants and sizes with loading states
- **Link** - Styled link component with Next.js support
- **DropDown** - Accessible dropdown menu
- **DirectionButtons** - Navigation direction controls
- **Pagination** - Customizable pagination controls

### Content Display

- **InformationCard** - Card components for displaying information
- **ProjectTile** - Project display tiles with hover effects
- **Timeline** - Vertical/horizontal timeline component
- **Carousel** - Image/content carousel with controls
- **Chart** - Data visualization charts (powered by Chart.js)

### Visual Effects

- **AnimatedText** - Text animation effects
- **StarBackground** - Animated particle background

## 🔧 Development

### Clone and Install

```bash
git clone https://github.com/zathura-db/react-design-system.git
cd react-design-system
npm install
```

### Available Scripts

```bash
# Start Storybook development server
npm run storybook

# Build Storybook static site
npm run build-storybook

# Build the package
npm run build

# Lint code
npm run lint
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook 8** - Component documentation

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

**Commercial Use**: For commercial licensing options, please raise issue using github.

See [licence.txt](./licence.txt) for the full license text.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

**Note**: Direct pushes to the `master` branch are restricted. All contributions must be made through pull requests.

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/zathura-db/react-design-system/issues) with:

- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)
