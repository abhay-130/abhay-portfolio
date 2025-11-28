import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; 

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-sm transition-all duration-300">
      {/* Container: Adjusted padding for a cleaner look on laptops */}
      <div className="max-w-[1440px] mx-auto h-20 md:h-24 flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        
        {/* 1. LOGO: Smoother sizing. Removed the huge 'text-4xl' jump. */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl hover:text-theme-red dark:hover:text-theme-red transition-colors">
            ABHAY KISHOR
          </Link>
        </div>

        {/* 2. DESKTOP NAV: Adjusted font size and spacing for Laptop (lg) vs Desktop (xl) */}
        {/* text-base (16px) looks much cleaner on laptops than text-lg */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Social Life', path: '/social-life' },
            { name: 'Services', path: '/services' },
            { name: 'Blogs', path: '/blogs' },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              // Added whitespace-nowrap so text never breaks into two lines
              className="text-base xl:text-lg font-semibold whitespace-nowrap hover:text-theme-red dark:hover:text-theme-red transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          
          {/* 3. CONTACT BUTTON: Removed 'mt-4'. Added proper padding for a 'pill' shape */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="px-5 py-2 rounded-full border-2 border-light-text dark:border-dark-text font-semibold text-sm xl:text-base hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden py-1 px-2 rounded-full border-2 border-light-text dark:border-dark-text font-semibold hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

           {/* Theme Toggle */}
           <div className="flex items-center">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} variant="relative" />
          </div>

        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-30 bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700 h-screen sm:h-auto shadow-lg">
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Social Life', path: '/social-life' },
              { name: 'Services', path: '/services' },
              { name: 'Blogs', path: '/blogs' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-semibold hover:text-theme-red dark:hover:text-theme-red transition-colors border-b border-gray-100 dark:border-gray-800 pb-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;