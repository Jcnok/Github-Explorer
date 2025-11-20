import React from 'react';
import { GithubUser } from '../types';
import { MapPinIcon, UsersIcon, BuildingIcon, LinkIcon, TwitterIcon, GitHubLogo } from './Icons';

interface UserProfileProps {
  user: GithubUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/40 transition-colors duration-300">
      {/* Cover Image */}
      <div className="h-40 bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
      
      <div className="px-8 pb-8 relative">
        {/* Avatar & Action */}
        <div className="flex justify-between items-end -mt-16 mb-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src={user.avatar_url} 
              alt={user.login}
              className="relative w-32 h-32 rounded-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-800 object-cover shadow-xl"
            />
          </div>
          
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <GitHubLogo className="w-4 h-4" />
            <span>Visit Profile</span>
          </a>
        </div>

        {/* Info */}
        <div className="space-y-6 animate-fade-in">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              {user.name || user.login}
            </h1>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">@{user.login}</p>
          </div>
          
          {user.bio && (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg border-l-4 border-primary-200 dark:border-primary-900 pl-4 italic">
              "{user.bio}"
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100 dark:border-slate-700/50">
            <div className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{user.followers}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Followers</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{user.following}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Following</div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {user.company && (
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <BuildingIcon className="w-5 h-5 text-slate-400" />
                <span>{user.company}</span>
              </div>
            )}
            
            {user.location && (
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <MapPinIcon className="w-5 h-5 text-slate-400" />
                <span>{user.location}</span>
              </div>
            )}

            {user.blog && (
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                <LinkIcon className="w-5 h-5 text-slate-400 group-hover:text-primary-500" />
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate"
                >
                  {user.blog}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;