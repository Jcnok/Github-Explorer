
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUser, getUserRepos } from '../services/githubService';
import { GithubUser, GithubRepo } from '../types';
import UserProfile from '../components/UserProfile';
import RepoList from '../components/RepoList';
import Pagination from '../components/Pagination';
import { ChevronLeftIcon } from '../components/Icons';

const UserDetailsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  
  const reposPerPage = 30;

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const userData = await getUser(username);
        if (!userData.id) throw new Error('User not found');
        
        setUser(userData);
        
        const reposData = await getUserRepos(username, page, reposPerPage);
        setRepos(reposData);
      } catch (err: any) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, page]);

  if (loading && !user) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
           <span className="text-4xl">😕</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">User not found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">The user "{username}" does not exist or there was an issue connecting to GitHub.</p>
        <Link to="/" className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary-600/20">
          Back to Search
        </Link>
      </div>
    );
  }

  const totalPages = Math.ceil(user.public_repos / reposPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 mb-8 transition-colors font-medium group">
        <span className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 mr-2 group-hover:-translate-x-1 transition-transform">
           <ChevronLeftIcon className="w-4 h-4" />
        </span>
        Back to Search
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar / Profile Info */}
        <div className="lg:col-span-4 animate-fade-in">
          <div className="sticky top-24">
            <UserProfile user={user} />
          </div>
        </div>

        {/* Main Content / Repos */}
        <div className="lg:col-span-8">
          <div className="bg-transparent">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                Repositories
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700">
                  {user.public_repos}
                </span>
              </h2>
            </div>
            
            {loading ? (
               <div className="space-y-4">
                 {[...Array(3)].map((_, i) => (
                   <div key={i} className="h-40 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
                 ))}
               </div>
            ) : (
              <>
                <RepoList repos={repos} />
                <div className="mt-6">
                  <Pagination 
                    currentPage={page} 
                    totalPages={totalPages} 
                    onPageChange={(p) => {
                      setPage(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
