# Maxi Web Components

<div align="center">
  <img src="public/assets/logo.png" alt="Maxi Logo" width="300" />
</div>

<div align="center">
  <h3>Angular Components Library</h3>
  <p>A comprehensive collection of reusable UI components for Angular applications</p>
</div>

---

## 🚀 Overview

Maxi Web Components is a modern Angular component library designed to provide developers with a comprehensive set of UI elements for building beautiful and functional web applications. Built with Angular 20 and compatible with Angular 18, 19, and 20, this library offers a consistent design system and seamless integration.

## ✨ Features

- **Modern Angular Support**: Compatible with Angular 18, 19, and 20
- **Comprehensive Component Set**: 20+ pre-built components
- **Consistent Design System**: Unified styling and behavior
- **TypeScript Support**: Full type safety and IntelliSense
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Easy Integration**: Simple installation and usage

## 📦 Installation

```bash
npm install maxi-angular-components
```

## 🎯 Quick Start

1. **Install the package**:
   ```bash
   npm install maxi-angular-components
   ```

2. **Import the module** in your Angular application:
   ```typescript
   import { MaxiAngularComponentsModule } from 'maxi-angular-components';
   
   @NgModule({
     imports: [MaxiAngularComponentsModule],
     // ...
   })
   export class AppModule { }
   ```

3. **Use components** in your templates:
   ```html
   <maxi-button>Click me!</maxi-button>
   <maxi-input-field placeholder="Enter text"></maxi-input-field>
   ```

## 🧩 Components

### Input Components
- **Input Field** - Text input with validation and styling options
- **Input Number** - Numeric input with increment/decrement controls
- **Input Switch** - Toggle switch for boolean values
- **Input Radio** - Radio button for single selection
- **Checkbox** - Checkbox for multiple selections
- **Autocomplete** - Input with suggestions and filtering
- **Dropdown** - Select dropdown with search functionality
- **Multi Select** - Multiple selection dropdown with tags
- **Calendar** - Date picker with calendar interface

### Navigation Components
- **Tabs** - Tabbed interface for content organization
- **Sidebar** - Collapsible navigation sidebar
- **Paginator** - Pagination controls for data navigation

### Action Components
- **Buttons** - Interactive buttons with multiple variants and icons
- **Chips** - Small tags for labels and selections

### Display Components
- **Card** - Content container with header, body, and footer
- **Badge** - Small status indicators and labels
- **Timeline** - Vertical timeline for events and progress
- **Data Table** - Advanced table with sorting, filtering, and pagination

### Feedback Components
- **Notification** - Toast notifications for user feedback
- **Tooltip** - Hover tooltips for additional information
- **Dialog** - Modal dialogs for forms and confirmations

### State Components
- **Preload** - Loading overlay for page transitions
- **Skeleton** - Placeholder content while loading
- **Spinner** - Animated loading spinner

## 🛠️ Development

This project serves as a testing and demonstration environment for the Maxi Angular Components library.

### Prerequisites
- Node.js (v20 or higher)
- Angular CLI (v20.3.3 or higher)
- npm or yarn

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts
- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## 🎨 Styling

The components use SCSS for styling and include:
- Global CSS variables for consistent theming
- Responsive design utilities
- Dark/light mode support
- Customizable color schemes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more information.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:
- Check the [documentation](https://maxi-components.com/docs)
- Open an issue on GitHub
- Contact our support team

## 🔗 Links

- [Documentation](https://maxi-components.com/docs)
- [Live Demo](https://maxi-components.com/demo)
- [GitHub Repository](https://github.com/maxi-components/angular)
- [NPM Package](https://www.npmjs.com/package/maxi-angular-components)

---

<div align="center">
  <p>Made with ❤️ by the Maxi Team</p>
  <p>© 2025 Maxi Web Components. All rights reserved.</p>
</div>
