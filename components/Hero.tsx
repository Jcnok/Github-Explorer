import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative py-12 md:py-20 text-center">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="space-y-6 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Explore the Universe
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Developer Stories</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Navigate the open-source ecosystem. Uncover hidden talents, explore innovative repositories, and connect with the minds building the future.
        </p>
      </div>
    </div>
  );
};

export default Hero;