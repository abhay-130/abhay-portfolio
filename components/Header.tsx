
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto h-20 md:h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="p-2 rounded-full transition-colors">
          <Link to="/" className="mt-2 px-1 py-1 rounded-full font-bold text-2xl sm:text-3xl md:text-4xl lg:text-2xl hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors">ABHAY KISHOR</Link>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Social Life', path: '/social-life' },
            { name: 'Services', path: '/services' },
            { name: 'Blogs', path: '/blogs' },
          ].map((item) => (
            <Link key={item.name} to={item.path} className="p-2 text-lg font-semibold hover:text-theme-red dark:hover:text-theme-red transition-colors">{item.name}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-0">
          <div className="hidden md:block p-2 rounded-full transition-colors">
            <Link to="/contact" className="mt-4 px-1 py-1 rounded-full border-2 border-light-text dark:border-dark-text font-semibold hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors">Contact</Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full border-2 border-light-text dark:border-dark-text font-semibold hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-30 bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col px-4 py-4 space-y-2">
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
                className="p-3 text-lg font-semibold hover:text-theme-red dark:hover:text-theme-red transition-colors border-b border-gray-200 dark:border-gray-700"
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
