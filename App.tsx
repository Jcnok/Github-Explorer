
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './lib/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';

// --- Main Layout ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-500/30 selection:text-primary-900 dark:selection:text-primary-100">
      <div className="fixed inset-0 bg-grid-slate-200/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] pointer-events-none"></div>
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <footer className="py-8 text-center text-slate-400 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800 mt-20">
        <p>© {new Date().getFullYear()} GitHub Explorer. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

// --- App Router ---

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:username" element={<UserDetailsPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
