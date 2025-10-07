import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiAward } from 'react-icons/fi';

const Leaderboard = ({ onClose }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    setScores(savedScores);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* CHANGED: Applied the "glassmorphism" effect to the modal */}
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl shadow-accent/20 w-full max-w-md p-6 border border-white/20"
      >
        <div className="flex justify-between items-center mb-6">
          {/* CHANGED: Applied the gradient text effect to the title */}
          <h2 className="text-3xl font-bold flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            <FiAward className="mr-3 text-purple-400" />
            High Scores
          </h2>
          <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
            <FiX size={28} className='text-white hover:text-purple-500'/>
          </button>
        </div>
        
        {scores.length > 0 ? (
          <ol className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {scores.map((score, index) => (
              <li key={index} className="flex items-center justify-between bg-primary/50 p-3 rounded-lg border border-white/10">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-purple-400 w-8">{index + 1}.</span>
                  <span className="text-lg text-white flex-1 text-left ml-4">{score.name}</span>
                </div>
                <span className="text-xl font-bold text-white">{score.score}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-text-secondary text-center py-8">No scores yet. Be the first!</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Leaderboard;