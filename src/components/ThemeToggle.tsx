"use client";

import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Safely access theme context
  const themeContext = useContext(ThemeContext);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
        <Moon size={18} className="text-blue-600" />
      </button>
    );
  }

  // If theme context is not available, show fallback
  if (!themeContext) {
    return (
      <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
        <Moon size={18} className="text-blue-600" />
      </button>
    );
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
