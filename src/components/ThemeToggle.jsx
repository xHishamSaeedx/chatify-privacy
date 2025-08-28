import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun size={18} className="theme-icon" />
      ) : (
        <Moon size={18} className="theme-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
