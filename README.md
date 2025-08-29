# Chatify Privacy Policy Website

A modern, responsive privacy policy website for the Chatify app built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chatify-privacy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
chatify-privacy/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── [other-pages]/     # Other page routes
│   ├── components/            # Reusable React components
│   ├── contexts/              # React contexts (Theme, etc.)
│   ├── lib/                   # Utility functions
│   └── utils/                 # Helper utilities
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Dark/Light Theme** - Toggle between themes
- **Modern UI** - Built with Tailwind CSS and Framer Motion
- **TypeScript** - Full type safety
- **SEO Optimized** - Meta tags and structured data
- **Accessibility** - WCAG compliant components

## 📱 Pages

- **Home** - Landing page with features and stats
- **Features** - Detailed feature showcase
- **How It Works** - App functionality explanation
- **Download** - App download links
- **About** - Company information
- **Support** - Help and contact information
- **Privacy Policy** - Legal privacy information
- **Terms of Service** - Legal terms
- **Cookie Policy** - Cookie usage information
- **Account Deletion** - Data deletion instructions
- **Reporting** - Content reporting system

## 🎯 Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Deployment**: Vercel (recommended)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for any environment-specific variables:

```env
# Example environment variables
NEXT_PUBLIC_APP_NAME=Chatify
NEXT_PUBLIC_APP_URL=https://chatify.com
```

### Tailwind CSS

The project uses Tailwind CSS with a custom color scheme. Colors are defined in `src/app/globals.css` and can be customized there.

### Next.js Configuration

The Next.js configuration is in `next.config.ts` and includes:
- Package import optimization
- Image domain configuration

## 🚀 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
3. **Deploy automatically**
   - Vercel will use the settings from `vercel.json`
   - Build command: `npm run build`
   - Output directory: `.next` (Next.js default)
   - Framework: Next.js

**Important**: Make sure your Vercel project settings are:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (leave empty for Next.js default)
- **Install Command**: `npm install`

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # or use a different port
   npm run dev -- -p 3001
   ```

2. **Build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

3. **TypeScript errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

### Development Tips

- Use the browser's developer tools to debug
- Check the terminal for error messages
- Ensure all dependencies are installed
- Verify Node.js version compatibility

### Vercel Deployment Issues

If you encounter deployment issues on Vercel:

1. **"No Output Directory named 'dist' found"**
   - This happens when Vercel is configured for static export
   - Solution: Use Next.js framework preset, not static export
   - Make sure output directory is `.next` (Next.js default)

2. **Build fails with SSR errors**
   - Check that all browser APIs are wrapped with `typeof window !== 'undefined'`
   - Ensure components using `localStorage` or `window` are client-side only

3. **Missing dependencies**
   - Run `npm install` locally to ensure all dependencies are in `package.json`
   - Check that all imports are correct

4. **Environment variables**
   - Add any required environment variables in Vercel project settings
   - Use `NEXT_PUBLIC_` prefix for client-side variables

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

For internal development only. Please follow the existing code style and add tests for new features.

## 📞 Support

For support, contact the development team or create an issue in the repository.
