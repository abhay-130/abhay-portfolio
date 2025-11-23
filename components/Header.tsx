
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto h-24 flex items-center justify-between px-12 sm:px-16 lg:px-20">
        <div className="p-2 rounded-full transition-colors">
          <Link to="/" className="mt-2 px-1 py-1 rounded-full font-bold text-5xl md:text-6xl lg:text-2xl hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors">ABHAY KISHOR</Link>
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
        <div className="p-2 rounded-full transition-colors">
            <Link to="/contact" className="mt-4 px-1 py-1 rounded-full border-2 border-light-text dark:border-dark-text font-semibold hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
