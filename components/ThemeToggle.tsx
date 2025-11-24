
import React from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="sun-and-moon fixed top-7 right-5 z-50 px-3 py-2 rounded-full bg-gray-900 dark:bg-gray-500 text-[18px] transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
