    import React from 'react';
    import { motion } from 'framer-motion';
    import { FiClock, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';

    const ProgressBar = ({ progress }) => (
    <div className="w-full bg-black/20 rounded-full h-2.5 border border-white/10">
        <motion.div 
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
    </div>
    );

    const QuizHeader = ({ currentQuestionIndex, totalQuestions, score, timeLeft, onBack }) => {
    const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

    return (
        <div className="w-full max-w-2xl mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
            <button 
                onClick={onBack} 
                className="text-text-secondary hover:text-white transition-colors duration-200"
                aria-label="Back to level selection"
            >
                <FiArrowLeft size={24} className='text-white' />
            </button>
            <span className="text-lg text-white font-semibold">Question {currentQuestionIndex + 1}/{totalQuestions}</span>
            </div>
            
            <div className="text-2xl font-bold text-white flex items-center">
            <FiCheckCircle className="mr-2" /> {score}
            </div>
        </div>
        
        <ProgressBar progress={progress} />

        <div className="flex items-center justify-center bg-black/20 px-4 py-1 rounded-full mt-4 w-fit mx-auto border border-white/10">
            <FiClock className="mr-2 text-white" />
            <span className="text-lg font-bold text-white">{timeLeft}s</span>
        </div>
        </div>
    );
    };

    export default QuizHeader;