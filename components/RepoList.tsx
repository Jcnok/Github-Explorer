
import React from 'react';
import { GithubRepo } from '../types';
import { StarIcon, GitForkIcon } from './Icons';
import { formatDate } from '../utils/dateUtils';

interface RepoListProps {
  repos: GithubRepo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  if (repos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 bg-slate-50 dark:bg-slate-800/30 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed">
        <div className="w-16 h-16 mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <GitForkIcon className="w-8 h-8 text-slate-400" />
        </div>
        <p className="text-slate-500 font-medium">No public repositories found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {repos.map((repo, index) => (
        <a 
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ animationDelay: `${index * 50}ms` }}
          className="group block bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500/50 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 animate-slide-up"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors break-all flex items-center gap-2">
              {repo.name}
            </h3>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${repo.private ? 'bg-red-100 text-red-700 border-red-200' : 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900'}`}>
              {repo.private ? 'Private' : 'Public'}
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 h-10 leading-relaxed">
            {repo.description || 'No description provided for this project.'}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-500">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow shadow-primary-500/50"></span>
                <span className="font-medium text-slate-700 dark:text-slate-300">{repo.language}</span>
              </div>
            )}
            
            <div className="flex items-center gap-1.5">
              <StarIcon className="w-4 h-4 text-yellow-500" />
              <span className="font-medium text-slate-700 dark:text-slate-300">{repo.stargazers_count}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <GitForkIcon className="w-4 h-4" />
              <span className="font-medium text-slate-700 dark:text-slate-300">{repo.forks_count}</span>
            </div>

            <div className="ml-auto text-xs font-medium bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded-md">
              Updated {formatDate(repo.updated_at)}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RepoList;
