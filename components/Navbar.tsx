import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { SunIcon, MoonIcon, GitHubLogo, StarIcon } from './Icons';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <GitHubLogo className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500 dark:from-white dark:to-slate-400">
            GitHub Explorer
          </span>
        </Link>

        {/* Actions Area */}
        <div className="flex items-center gap-4">
          {/* Marketing CTA */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md group"
          >
            <StarIcon className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Star on GitHub</span>
          </a>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;