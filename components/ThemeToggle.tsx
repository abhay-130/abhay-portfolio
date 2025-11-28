
import React from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="sun-and-moon fixed top-4 sm:top-6 md:top-7 right-3 sm:right-4 md:right-5 z-50 px-2 py-1 rounded-full bg-gray-900 dark:bg-gray-500 text-base sm:text-lg transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
