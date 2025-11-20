
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchUsers } from '../services/githubService';
import { GithubUser } from '../types';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setUsers([]);
      setTotalCount(0);
      return;
    }

    setLoading(true);
    try {
      const result = await searchUsers(query);
      setUsers(result.items || []);
      setTotalCount(result.total_count || 0);
    } catch (error) {
      console.error('Error searching users:', error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <Hero />

        <div className="mb-12 -mt-6">
          <SearchBar onSearch={handleSearch} isSearching={loading} />
        </div>

        {searchQuery && !loading && (
          <div className="mb-8 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 px-2 animate-fade-in">
            <p>Found <span className="text-slate-900 dark:text-white font-bold">{totalCount}</span> developers</p>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {users.map(user => (
              <UserCard 
                key={user.id} 
                user={user} 
                onClick={(username) => navigate(`/user/${username}`)} 
              />
            ))}
          </div>
        )}
        
        {!loading && searchQuery && users.length === 0 && (
          <div className="text-center py-20 opacity-75">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-slate-900 dark:text-slate-200 font-medium">No developers found</p>
            <p className="text-slate-500 dark:text-slate-400">Try searching for "facebook" or "vercel"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
