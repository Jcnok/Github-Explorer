import React, { useState, useEffect } from 'react';
import { SearchIcon } from './Icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isSearching }) => {
  const [localQuery, setLocalQuery] = useState('');

  useEffect(() => {
    // Debounce logic: wait 300ms after user stops typing
    const handler = setTimeout(() => {
        onSearch(localQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [localQuery, onSearch]);

  return (
    <div className="w-full max-w-2xl mx-auto relative z-10">
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
        
        <div className="relative flex items-center bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all">
          <div className="pl-6 pr-4 text-slate-400 group-focus-within:text-primary-500 transition-colors">
            <SearchIcon className={`w-6 h-6 ${isSearching ? 'animate-spin-slow' : ''}`} />
          </div>
          
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search GitHub username..."
            className="w-full py-5 bg-transparent border-none focus:outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 text-lg font-medium"
            aria-label="Search user"
          />
          
          {isSearching && (
            <div className="pr-6 text-sm font-semibold text-primary-500 animate-pulse">
              Searching...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;