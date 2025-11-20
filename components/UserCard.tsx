import React from 'react';
import { GithubUser } from '../types';
import { ChevronRightIcon } from './Icons';

interface UserCardProps {
  user: GithubUser;
  onClick: (username: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div 
      onClick={() => onClick(user.login)}
      className="group relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex items-center gap-5 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Hover Highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="relative inline-block">
          <img 
            src={user.avatar_url} 
            alt={user.login}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-50 dark:ring-slate-900 group-hover:ring-primary-100 dark:group-hover:ring-primary-900 transition-all duration-300"
            loading="lazy"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
        </div>
      </div>

      <div className="flex-1 min-w-0 relative z-10">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {user.login}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
          View Profile
        </p>
      </div>

      <div className="relative z-10 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300">
        <ChevronRightIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default UserCard;