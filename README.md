# React App Component 1

A modern React TypeScript application with Tailwind CSS styling and Storybook integration.

## 🚀 Project Overview

This is a clean, modern React application built with TypeScript, Vite, and Tailwind CSS. The project includes Storybook for component development and testing.

## 📁 Project Structure

```
Component 1/
├── src/                       # Source code
│   ├── App.tsx               # Main App component
│   ├── components/           # React components
│   ├── assets/               # Static assets
│   ├── index.css             # Global styles
│   └── main.tsx              # Entry point
├── public/                   # Public assets
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment configuration
```

## 🛠️ Technologies Used

- **React 19** - Latest React version
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Storybook** - Component development environment

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Component-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 📱 Running the Application

### Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build

# Preview the build
npm run preview
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run check:types` - Check TypeScript types
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build static Storybook

## 🧩 Components

- **App.tsx** - Main application component
- Additional components in the `src/components/` directory

## 📚 Storybook

The project includes Storybook for component development and testing:

```bash
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

- **vite.config.ts** - Vite build tool configuration
- **tailwind.config.js** - Tailwind CSS configuration
- **tsconfig.json** - TypeScript configuration
- **vercel.json** - Vercel deployment configuration

## 🚀 Deployment

### Vercel Deployment
The project is configured for easy deployment on Vercel:
- Automatic builds from Git
- Optimized for Vite
- SPA routing support

### Build Process
1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Deploy the `dist` folder

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

---

**Happy Coding! 🎉**
