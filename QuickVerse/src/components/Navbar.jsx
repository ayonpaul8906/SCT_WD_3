import React from 'react';
import { FiZap } from 'react-icons/fi';

const Navbar = ({ onShowLeaderboard, onShowProfile }) => {
  const navLinkClasses = "font-semibold text-text-secondary hover:text-accent transform transition-all duration-300 hover:-translate-y-0.5";

  return (
    // CHANGED: New background, removed the border, and added a custom purple glow shadow.
    <nav className="bg-gray-950/70 backdrop-blur-lg w-full sticky top-0 z-50 shadow-[0_8px_32px_0_rgba(111,0,255,0.15)]">
      <div className="max-w-5xl mx-4 px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-white flex items-center transform transition-transform duration-300 hover:scale-105">
            <img src="/logo.png" alt="logo" className='h-10 w-10' />
            QuizVerse
          </a>
          
          <div className="hidden md:flex items-center text-white space-x-8">
            <a href="#" className={navLinkClasses}>Home</a>
            <button onClick={onShowLeaderboard} className={navLinkClasses}>
              Leaderboard
            </button>
            <button onClick={onShowProfile} className={navLinkClasses}>
              Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;