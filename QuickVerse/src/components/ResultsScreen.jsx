import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiRefreshCw } from 'react-icons/fi';

const ResultsScreen = ({ score, results, onRestart }) => {
  const correctAnswers = results.filter(r => r.isCorrect).length;
  const totalQuestions = results.length;
  const accuracy = totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(0) : 0;

  const getAccuracyColor = (acc) => {
    if (acc >= 75) return 'text-green-400';
    if (acc >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl text-center p-4"
    >
      <h2 className="text-4xl font-bold text-accent mb-4">Results Summary</h2>
      
      {/* Score and Accuracy */}
      <div className="bg-secondary rounded-xl p-6 mb-8 flex justify-around items-center">
        <div>
          <p className="text-text-secondary text-lg">Score</p>
          <p className="text-5xl font-bold text-white">{score}</p>
        </div>
        <div>
          <p className="text-text-secondary text-lg">Accuracy</p>
          <p className={`text-5xl font-bold ${getAccuracyColor(accuracy)}`}>{accuracy}%</p>
        </div>
      </div>

      {/* Answer Review */}
      <div className="text-left bg-secondary rounded-xl p-6 max-h-72 overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">Answer Review</h3>
        {results.map((result, index) => (
          <div key={index} className="border-b border-gray-700 py-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold w-5/6">{index + 1}. {result.question}</p>
              {result.isCorrect 
                ? <FiCheck size={24} className="text-green-500 flex-shrink-0" /> 
                : <FiX size={24} className="text-red-500 flex-shrink-0" />}
            </div>
            {!result.isCorrect && (
              <p className="text-sm text-gray-400 mt-1">
                Correct answer: <span className="font-semibold text-green-400">{Array.isArray(result.correctAnswer) ? result.correctAnswer.join(', ') : result.correctAnswer}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      
      {/* Restart Button */}
      <button 
        onClick={onRestart}
        className="mt-8 bg-purple-500 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-glow flex items-center mx-auto"
      >
        <FiRefreshCw className="mr-2" />
        Play Again
      </button>
    </motion.div>
  );
};

export default ResultsScreen;