import React from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiPlayCircle, FiCheckCircle } from 'react-icons/fi';
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
      className="text-center w-full max-w-5xl"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500" style={{ textShadow: '0 4px 12px rgba(178, 9, 214, 0.4)' }}>
        Start Your Journey
      </h1>
      <p className="text-text-secondary mb-16">Complete a level with 70% score to unlock the next challenge.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {levels.map((level) => {
          const isUnlocked = unlockedLevels.includes(level.difficulty);
          const isCompleted = isUnlocked && unlockedLevels.indexOf(level.difficulty) < unlockedLevels.length - 1;

          let icon = null;
          if (isCompleted) {
            icon = <FiCheckCircle size={24} className="text-green-400" />;
          } else if (!isUnlocked) {
            icon = <FiLock size={24} className="text-gray-500" />;
          }

          return (
            <Tilt
              key={level.name}
              tiltEnable={isUnlocked}
              scale={1.05}
              tiltMaxAngleX={4} 
              tiltMaxAngleY={4}
              transitionSpeed={1500}
              className="transform-gpu"
            >
              <motion.div
                onClick={() => isUnlocked && onLevelSelect(level.difficulty)}
                className={`relative h-64 flex flex-col justify-center items-center p-8 rounded-2xl transition-all duration-300 bg-gray-900/40 backdrop-blur-md border border-gray-700
                  ${isUnlocked 
                    ? 'cursor-pointer hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20' 
                    : 'opacity-60 cursor-not-allowed'
                  }
                  ${isCompleted && '!border-green-500/50'}` 
                }
              >
                {icon && (
                  <div className="absolute top-4 right-4">
                    {icon}
                  </div>
                )}
                
                <h2 className="text-4xl font-bold mb-2 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
                  {level.name}
                </h2>
                <p className="text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
                  {level.description}
                </p>
                
                {isUnlocked && (
                  <div className="absolute bottom-8">
                    <FiPlayCircle size={40} className={`transition-colors duration-300 ${isCompleted ? 'text-green-400' : 'text-accent'}`} />
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