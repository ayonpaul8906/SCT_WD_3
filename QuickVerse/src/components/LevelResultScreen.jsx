import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiRefreshCw, FiArrowRight } from 'react-icons/fi';

const LevelResultScreen = ({ score, totalPoints, passed, onNext, onRetry }) => {
  const percentage = totalPoints > 0 ? ((score / totalPoints) * 100).toFixed(0) : 0;

  return (
    // CHANGED: Applied the "glassmorphism" effect
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl shadow-accent/10 w-full max-w-md border border-white/20"
    >
      {passed ? (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
          <FiCheckCircle className="mx-auto text-green-500 mb-4" size={80} />
        </motion.div>
      ) : (
        <FiXCircle className="mx-auto text-red-500 mb-4" size={80} />
      )}
      
      {/* CHANGED: Ensured heading is visible and added gradient */}
      <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">{passed ? "Level Complete!" : "Level Failed"}</h2>
      <p className="text-text-secondary mb-6">{passed ? "Great job! You've unlocked the next challenge." : "You need at least 70% to pass. Give it another try!"}</p>
      
      {/* CHANGED: Inner score box now has layered glass effect */}
      <div className="bg-primary/50 border border-white/10 rounded-lg p-4 mb-8">
        <p className="text-lg text-text-secondary">Your Score</p>
        <p className="text-5xl font-bold text-accent">{score} / {totalPoints}</p>
        <p className="text-2xl font-semibold text-text-secondary">({percentage}%)</p>
      </div>
      
      {passed ? (
        <button
          onClick={onNext}
          // CHANGED: Using the new glowing button style
          className="btn-primary flex items-center mx-auto"
        >
          Next Level <FiArrowRight className="ml-2" />
        </button>
      ) : (
        <button
          onClick={onRetry}
          // CHANGED: Using the new glowing button style
          className="btn-primary flex items-center mx-auto"
        >
          <FiRefreshCw className="mr-2" /> Try Again
        </button>
      )}
    </motion.div>
  );
};

export default LevelResultScreen;