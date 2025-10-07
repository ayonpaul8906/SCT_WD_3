import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    // CHANGED: New background and a custom purple glow shadow that points upwards.
    <footer className="bg-gray-950/70 backdrop-blur-lg w-full mt-auto py-6 z-10 shadow-[0_-8px_32px_0_rgba(111,0,255,0.15)]">
      <div className="max-w-5xl mx-auto px-4 flex justify-center sm:flex-row items-center ">
        <p className="text-white text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} QuizVerse. All Rights Reserved.
        </p>       
      </div>
    </footer>
  );
};

export default Footer;