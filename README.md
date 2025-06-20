# David Zhao Portfolio

A stunning, modern developer portfolio built with Next.js, React Three Fiber, and Framer Motion. Features a cinematic 3D mountain animation landing experience followed by a professional portfolio showcasing skills, projects, and achievements.

## 🌟 Features

- **Cinematic 3D Landing**: Interactive mountain valley scene with zoom-in animation
- **Smooth Animations**: Framer Motion powered transitions and scroll animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: Next.js, React Three Fiber, TypeScript
- **Professional Sections**: About, Projects, Skills, Certifications, Contact
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance Focused**: Static site generation and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Deployment**: Static Export

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/david-zhao-portfolio.git
cd david-zhao-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The static files will be generated in the `out` directory.

## 📁 Project Structure

```
├── public/
│   └── assets/          # Static assets (images, 3D models)
├── src/
│   ├── components/      # React components
│   │   ├── Landing.tsx  # 3D landing scene
│   │   ├── MountainScene.tsx # 3D mountain animation
│   │   ├── Navbar.tsx   # Navigation bar
│   │   ├── About.tsx    # About section
│   │   ├── Projects.tsx # Projects showcase
│   │   ├── Skills.tsx   # Skills and technologies
│   │   ├── Certifications.tsx # Certifications display
│   │   └── Contact.tsx  # Contact form and info
│   ├── sections/        # Section organization
│   ├── pages/           # Next.js pages
│   └── styles/          # Global styles
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Colors
The primary color scheme is defined in `tailwind.config.js`:
- Primary: `#3B82F6` (blue-500)
- Gradients: Primary to blue-600

### Content
Update the following files to customize your portfolio:
- `src/components/About.tsx` - Personal information
- `src/components/Projects.tsx` - Project showcase
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Certifications.tsx` - Certifications
- `src/components/Contact.tsx` - Contact information

### 3D Scene
Modify `src/components/MountainScene.tsx` to customize the 3D mountain animation.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` directory to Netlify

### GitHub Pages
1. Update `next.config.js` for GitHub Pages
2. Build and deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

David Zhao - [david@example.com](mailto:david@example.com)

Project Link: [https://github.com/yourusername/david-zhao-portfolio](https://github.com/yourusername/david-zhao-portfolio) 