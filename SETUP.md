# Chatify Privacy - Next.js Migration Setup

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Firebase (for account deletion functionality):**
   Create a `.env.local` file in the root directory with your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Framer Motion** - Modern animations and interactions
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Firebase** - Backend services (Firestore for account deletion requests)
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── features/          # Features page
│   ├── how-it-works/      # How It Works page
│   ├── download/          # Download page
│   ├── support/           # Support page
│   ├── reporting/         # Reporting page
│   ├── privacy-policy/    # Privacy policy page
│   ├── account-deletion/  # Account deletion form
│   ├── terms/             # Terms of Service page
│   └── cookies/           # Cookie Policy page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   └── Footer.tsx         # Site footer
└── lib/                   # Utility functions
    ├── utils.ts           # Tailwind class utilities
    └── firebase.ts        # Firebase configuration
```

## 🎨 Features

- ✅ **Modern Design** - Clean, responsive layout with animations
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **Responsive** - Works perfectly on mobile and desktop
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Firebase Integration** - Account deletion and reporting functionality
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Complete Page Set** - All original pages migrated and enhanced

## 📄 Available Pages

### Core Pages
- **Home** (`/`) - Landing page with hero section, features, and CTAs
- **About** (`/about`) - Company story, mission, values, and team
- **Features** (`/features`) - Detailed feature showcase
- **How It Works** (`/how-it-works`) - Step-by-step guide
- **Download** (`/download`) - App download links and system requirements

### Support & Legal
- **Support** (`/support`) - Help center with FAQ and contact methods
- **Privacy Policy** (`/privacy-policy`) - Comprehensive privacy information
- **Terms of Service** (`/terms`) - Legal terms and conditions
- **Cookie Policy** (`/cookies`) - Cookie usage and management

### User Actions
- **Account Deletion** (`/account-deletion`) - Request account and data deletion
- **Reporting** (`/reporting`) - Report inappropriate behavior or issues

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 What's New

This migration includes:
- **Next.js 15** with App Router for better performance
- **TypeScript** for enhanced development experience
- **Framer Motion** for modern animations
- **Improved design system** with CSS variables
- **Better SEO** with proper meta tags
- **Enhanced accessibility** features
- **Complete page migration** - All original pages preserved and enhanced
- **Modern forms** - Account deletion and reporting with Firebase integration
- **Interactive elements** - FAQ accordions, animated sections, hover effects

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Render

## 📝 Notes

- All existing functionality has been preserved
- The design has been modernized while maintaining brand consistency
- Firebase integration is optional - the site works without it
- All pages are fully responsive and accessible
- Forms include proper validation and error handling
- Animations are optimized for performance
- SEO meta tags are included for all pages

## 🔗 Navigation Structure

The navigation includes all major pages:
- Home
- Features
- How It Works
- Download
- About
- Support
- Account Deletion
- Privacy Policy

Footer links include:
- Product pages (Features, How It Works, Download, About)
- Support pages (Help Center, Account Deletion, Reporting, Privacy Policy)
- Legal pages (Privacy Policy, Terms of Service, Cookie Policy)
