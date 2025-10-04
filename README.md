# 🌟 Parthiv Jasoliya - Portfolio# Getting Started with Create React App



A modern, responsive portfolio website built with React and TypeScript, showcasing my journey as a software developer with interactive animations and a clean, professional design.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)## Available Scripts

![React](https://img.shields.io/badge/React-18.2.0-blue)

![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)In the project directory, you can run:

![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.22-purple)

### `npm start`

## ✨ Features

Runs the app in the development mode.\

- **🎨 Modern Design**: Clean, professional interface with smooth animationsOpen [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **📱 Fully Responsive**: Optimized for all devices and screen sizes

- **⚡ Interactive Elements**: Smooth hover effects and transitionsThe page will reload if you make edits.\

- **🎯 Project Showcase**: Detailed project cards with modal previewsYou will also see any lint errors in the console.

- **💼 Professional Sections**: About, Skills, Projects, and Contact

- **🚀 Performance Optimized**: Fast loading and smooth animations### `npm test`

- **♿ Accessible**: Built with accessibility best practices

Launches the test runner in the interactive watch mode.\

## 🛠️ Tech StackSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### Frontend### `npm run build`

- **React 18** - Modern React with hooks and functional components

- **TypeScript** - Type-safe developmentBuilds the app for production to the `build` folder.\

- **Framer Motion** - Smooth animations and transitionsIt correctly bundles React in production mode and optimizes the build for the best performance.

- **Lucide React** - Beautiful, customizable icons

- **CSS3** - Custom styling with modern featuresThe build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

### Development Tools

- **Create React App** - Project bootstrappingSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- **ESLint** - Code linting

- **Git** - Version control### `npm run eject`



## 🚀 Quick Start**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



### PrerequisitesIf you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

- Node.js (v16 or higher)

- npm or yarnInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.



### InstallationYou don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



1. **Clone the repository**## Learn More

   ```bash

   git clone https://github.com/your-username/portfolio.gitYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

   cd portfolio

   ```To learn React, check out the [React documentation](https://reactjs.org/).


2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About/           # About section
│   ├── AnimatedBackground/ # Particle background
│   ├── Contact/         # Contact section
│   ├── Hero/            # Landing section
│   ├── Projects/        # Projects showcase
│   ├── Skills/          # Skills section
│   └── shared/          # Shared components
├── data/                # Portfolio data and content
├── styles/              # Global styles and themes
├── types/               # TypeScript type definitions
└── App.tsx              # Main application component
```

## 🎯 Key Sections

### 🏠 Hero Section
- Dynamic greeting based on time of day
- Typewriter effect for name animation
- Conditional scroll indicator (shows only at top)
- Social media links and resume download

### 👨‍💻 About Section
- Professional summary
- Key highlights and achievements
- Personal background

### 🛠️ Skills Section
- Technical skills with proficiency indicators
- Categorized by technology type
- Interactive skill cards

### 💼 Projects Section
- Project showcase with filtering
- Modal previews with detailed information
- Live demo and GitHub links
- Technology stack for each project

### 📬 Contact Section
- Professional contact information
- Social media links
- Clean, accessible design

## 🎨 Customization

### Personal Information
Update your details in `src/data/portfolioData.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects
Add your projects in the same file:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    // ... other project details
  }
];
```

### Styling
- Main theme variables in `src/styles/variables.css`
- Component-specific styles in respective component folders
- Global styles in `src/index.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- 📱 Mobile: < 768px
- 📲 Tablet: 768px - 1024px
- 💻 Desktop: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package for easy deployment

## 🎁 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

### `npm run eject`
**Note: This is a one-way operation!** Removes the single build dependency and copies all configuration files.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Parthiv Jasoliya**
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- GitHub: [Your GitHub](https://github.com/your-username)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by Parthiv Jasoliya