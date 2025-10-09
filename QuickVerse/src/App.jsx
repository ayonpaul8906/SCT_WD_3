import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; 

// Component Imports
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import ProfileSetup from './components/ProfileSetup';
import Profile from './components/Profile';

function App() {
  const [init, setInit] = useState(false);

  const handleProfileUpdate = (updatedProfile) => {
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    setUserProfile(updatedProfile);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setUserProfile(savedProfile);
    }
  }, []);

  const handleProfileSave = (profile) => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setUserProfile(profile);
  };

  if (init) {
    return (
      <div className="min-h-screen bg-primary flex flex-col font-orbitron relative">
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "#0a0a0a" } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#6f00ff" },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
              move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 0.5, straight: false },
              number: { density: { enable: true }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
        
        <div className="relative z-10 flex flex-col flex-grow min-h-screen">
          {!userProfile ? (
            <main className="flex-grow flex items-center justify-center p-4 w-full">
              <ProfileSetup onSave={handleProfileSave} />
            </main>
          ) : (
            <>
              <Navbar 
                onShowLeaderboard={() => setShowLeaderboard(true)} 
                onShowProfile={() => setShowProfile(true)} 
              />
              <main className="flex-grow flex items-center justify-center p-4 w-full">
                <Quiz userProfile={userProfile} />
              </main>
              <Footer />
            </>
          )}

          <AnimatePresence>
            {showLeaderboard && <Leaderboard onClose={() => setShowLeaderboard(false)} />}
            {showProfile && (
              <Profile 
                userProfile={userProfile} 
                onClose={() => setShowProfile(false)} 
                onProfileUpdate={handleProfileUpdate} 
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen bg-primary" />;
}

export default App;