
import { GithubRepo, GithubSearchResponse, GithubUser } from '../types';

const BASE_URL = 'https://api.github.com';

class GitHubError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'GitHubError';
  }
}

// Helper to handle errors
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.message || `HTTP error! status: ${response.status}`;
    
    if (response.status === 403) {
      throw new GitHubError(403, 'API Rate limit exceeded. Please try again later.');
    }
    
    if (response.status === 404) {
      throw new GitHubError(404, 'Resource not found.');
    }

    throw new GitHubError(response.status, message);
  }
  return response.json();
};

export const searchUsers = async (query: string): Promise<GithubSearchResponse> => {
  if (!query.trim()) return { total_count: 0, incomplete_results: false, items: [] };
  
  try {
    const response = await fetch(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    return await handleResponse<GithubSearchResponse>(response);
  } catch (error) {
    console.error("Search failed:", error);
    throw error;
  }
};

export const getUser = async (username: string): Promise<GithubUser> => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  return handleResponse<GithubUser>(response);
};

export const getUserRepos = async (username: string, page: number = 1, perPage: number = 30): Promise<GithubRepo[]> => {
  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated`
  );
  return handleResponse<GithubRepo[]>(response);
};
