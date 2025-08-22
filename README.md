# Component 1

A modern web development project featuring a React TypeScript application with Tailwind CSS styling and Storybook integration.

## 🚀 Project Overview

This project contains a main web application and a React TypeScript sub-application (`my-app`) with modern development tools and best practices.

## 📁 Project Structure

```
Component 1/
├── Index.html                 # Main HTML entry point
├── src/                       # Main source code
│   ├── App.jsx               # Main React application
│   ├── components/           # React components
│   │   ├── Hello.jsx         # Hello component
│   │   ├── InputField.tsx    # Input field component
│   │   ├── InputField.stories.tsx  # Storybook stories
│   │   └── MyInput.jsx       # Custom input component
│   ├── styles/               # Styling files
│   │   └── tailwind.css      # Tailwind CSS styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Main entry point
├── my-app/                    # React TypeScript sub-application
│   ├── src/                  # Source code
│   │   ├── App.tsx           # Main App component
│   │   ├── components/       # React components
│   │   ├── assets/           # Static assets
│   │   └── main.tsx          # Entry point
│   ├── public/               # Public assets
│   ├── package.json          # Dependencies and scripts
│   └── vite.config.ts        # Vite configuration
├── package.json               # Root package.json
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Technologies Used

### Main Project
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

### React TypeScript App (`my-app`)
- **React 18** - Latest React version
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Storybook** - Component development environment

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Component-1
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install React app dependencies**
   ```bash
   cd my-app
   npm install
   ```

## 📱 Running the Applications

### Main Application
```bash
# From the root directory
npm start
```

### React TypeScript App
```bash
# From the my-app directory
cd my-app
npm run dev
```

The React app will be available at `http://localhost:5173`

### Build for Production
```bash
# Build the React app
cd my-app
npm run build

# Preview the build
npm run preview
```

## 🎨 Available Scripts

### Root Directory
- `npm start` - Start the main application
- `npm build` - Build the main application

### React App (`my-app`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 🧩 Components

### Main Application Components
- **Hello.jsx** - Basic greeting component
- **InputField.tsx** - Reusable input field component
- **MyInput.jsx** - Custom input implementation

### React App Components
- **App.tsx** - Main application component
- Additional components in the `src/components/` directory

## 📚 Storybook

The project includes Storybook for component development and testing:

```bash
cd my-app
npm run storybook
```

Access Storybook at `http://localhost:6006`

## 🎨 Styling

The project uses **Tailwind CSS** for styling:
- Utility-first CSS framework
- Responsive design utilities
- Custom component styling
- PostCSS processing

## 🔧 Configuration Files

- **tailwind.config.js** - Tailwind CSS configuration
- **tsconfig.json** - TypeScript configuration
- **vite.config.ts** - Vite build tool configuration
- **eslint.config.js** - ESLint configuration
- **postcss.config.js** - PostCSS configuration

## 📦 Dependencies

### Main Dependencies
- React
- Tailwind CSS
- PostCSS

### Development Dependencies
- TypeScript
- Vite
- ESLint
- Storybook

## 🚀 Deployment

### Build Process
1. Install dependencies
2. Run build command
3. Deploy the `dist` folder (for React app) or build output

### Environment Variables
Create `.env` files for environment-specific configurations:
- `.env.local` - Local development
- `.env.production` - Production environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the component stories in Storybook

## 🔄 Updates and Maintenance

- Keep dependencies updated regularly
- Run `npm audit` to check for security vulnerabilities
- Update TypeScript and React versions as needed
- Maintain Storybook stories for all components

---

**Happy Coding! 🎉**
