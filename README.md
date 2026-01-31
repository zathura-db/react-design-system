# React Design System

A comprehensive React component library built with TypeScript, Tailwind CSS, and Material-UI.

## 📦 Components

This design system includes the following components:

- **AnimatedText** - Animated text effects
- **Button** - Customizable button component
- **Carousel** - Image/content carousel
- **Chart** - Data visualization charts
- **DirectionButtons** - Navigation direction controls
- **DropDown** - Dropdown menu component
- **Footer** - Page footer component
- **InformationCard** - Card components for displaying information
- **LayoutNavigation** - Layout navigation wrapper
- **Link** - Styled link component
- **Navigation** - Main navigation component
- **Pagination** - Pagination controls
- **ProjectTile** - Project display tiles
- **Section** - Page section wrapper
- **StarBackground** - Animated star background
- **Timeline** - Timeline component

## 🚀 Getting Started

### Installation

```bash
npm install
```

## 📚 Storybook

This project uses Storybook for component development and documentation.

### Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006)

### Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

The static files will be generated in the `storybook-static` directory.

### Using Storybook

1. **Browse Components**: Navigate through the sidebar to explore available components
2. **View Stories**: Each component has multiple stories showcasing different states and variants
3. **Interactive Controls**: Use the Controls addon to modify component props in real-time
4. **Responsive Testing**: Test components at different viewport sizes using the viewport toolbar
5. **Documentation**: View component documentation, props, and usage examples in the Docs tab

### Writing Stories

Stories are located alongside their components (e.g., `Button/Button.stories.ts`). To create a new story:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./YourComponent";

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // your props here
  },
};
```

## 🧪 Testing

Run tests with Vitest:

```bash
npm run test
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Material-UI** - Component library
- **Storybook** - Component development and documentation
- **Vitest** - Unit testing
- **Next.js** - React framework

## 📝 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

See [licence.txt](./licence.txt) for the full license text.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Note**: Direct pushes to the `main` branch are restricted. All contributions must be made through pull requests.
