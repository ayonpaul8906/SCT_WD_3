import React from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiPlayCircle, FiCheckCircle } from 'react-icons/fi';
// ADDED: Import the Tilt component
import Tilt from 'react-parallax-tilt';

const levels = [
  { name: 'Easy', difficulty: 'easy', description: 'Foundational concepts in tech and science.' },
  { name: 'Medium', difficulty: 'medium', description: 'Deeper topics and practical knowledge.' },
  { name: 'Hard', difficulty: 'hard', description: 'Advanced concepts for experts.' },
];

const LevelSelectScreen = ({ onLevelSelect, unlockedLevels }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center w-full max-w-4xl"
    >
      {/* CHANGED: Added gradient text effect to the main title */}
      <h1 className="text-5xl font-bold mb-4 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Start Your Journey
      </h1>
      <p className="text-text-secondary mb-12">Complete a level with 70% score to unlock the next challenge.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((level) => {
          const isUnlocked = unlockedLevels.includes(level.difficulty);
          const isCompleted = unlockedLevels.indexOf(level.difficulty) < unlockedLevels.length - 1;

          return (
            // ADDED: Wrapped the card in the Tilt component for a 3D hover effect
            <Tilt
              key={level.name}
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.05}
            >
              <motion.div
                className={`p-8 h-full rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  isUnlocked 
                    // CHANGED: Applied the "glassmorphism" effect
                    ? 'bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer shadow-lg shadow-accent/10' 
                    : 'bg-gray-800/50 text-gray-500'
                }`}
                onClick={() => isUnlocked && onLevelSelect(level.difficulty)}
              >
                {isCompleted && (
                  <FiCheckCircle className="absolute top-4 right-4 text-green-500" size={24} />
                )}
                {!isUnlocked && (
                  <FiLock className="absolute top-4 right-4" size={24} />
                )}
                
                {/* CHANGED: Ensured heading text is white */}
                <h2 className="text-3xl font-bold mb-2 text-white">{level.name}</h2>
                <p className="text-sm text-text-secondary">{level.description}</p>
                
                {isUnlocked && (
                  <div className="mt-6">
                    <FiPlayCircle size={40} className="mx-auto text-accent" />
                  </div>
                )}
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </motion.div>
  );
};

export default LevelSelectScreen;