# raj.gg - Personal Portfolio

A modern, responsive personal portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to showcase projects, skills, and interests.

**Live Site:** [https://raj-gg.vercel.app](https://raj-gg.vercel.app)

## ✨ Features

- **⚡ High Performance**: Built with Next.js for server-side rendering and static site generation.
- **🎨 Modern Design**: Styled with Tailwind CSS for a clean and responsive UI.
- **🎭 Smooth Animations**: Enhanced user experience with Framer Motion transitions.
- **📱 Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- **🧩 Interactive Components**: Utilizes Headless UI and custom React components.
- **🔍 SEO Friendly**: Integrated with `next-seo` for better search engine visibility.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/raj.gg.git
   cd raj.gg
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3070](http://localhost:3070) in your browser to view the site.

### Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server on port 3070. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server on port 3070. |
| `npm run lint` | Runs ESLint to check for code quality and errors. |

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── ...           # Buttons, Cards, Modals, etc.
├── pages/            # Next.js pages
│   ├── index.tsx     # Main landing page
│   └── ...
├── styles/           # Global styles
└── lib/              # Utility functions and configurations
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve the codebase, feel free to open an issue or submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is open source.
