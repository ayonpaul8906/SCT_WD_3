import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Shared Styles ---
const questionTitleClasses = "text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white";

// --- Standard Question Component (Single-Select & Image) ---
const StandardQuestion = ({ question, onAnswer, isAnswered }) => {
  const getOptionClass = (option) => {
    if (isAnswered) {
      if (option === question.answer) return 'bg-green-500/50 border-green-400 shadow-lg shadow-green-500/20';
      return 'bg-white/5 opacity-50 border-transparent';
    }
    return 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30';
  };

  return (
    <>
      {question.imageUrl && (
        <motion.img 
          src={question.imageUrl} 
          alt="Question visual" 
          className="max-w-sm w-full rounded-lg mb-6 mx-auto object-cover border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />
      )}
      <h2 className={questionTitleClasses}>{question.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={isAnswered}
            className={`p-4 rounded-lg text-left text-white transition-all duration-300 border ${getOptionClass(option)} ${!isAnswered ? 'cursor-pointer transform hover:-translate-y-1' : 'cursor-not-allowed'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

// --- Multi-Select Question Component ---
const MultiSelectQuestion = ({ question, onAnswer, isAnswered }) => {
  const [selected, setSelected] = useState([]);
  const handleSelect = (option) => {
    setSelected(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
  };

  const getOptionClass = (option) => {
    if (isAnswered) {
      if (question.answer.includes(option)) return 'bg-green-500/50 border-green-400 shadow-lg shadow-green-500/20';
      if (selected.includes(option)) return 'bg-red-500/50 border-red-400';
      return 'bg-white/5 opacity-50 border-transparent';
    }
    if (selected.includes(option)) return 'bg-accent/70 border-purple-400 ring-2 ring-purple-400';
    return 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30';
  };

  return (
    <>
      <h2 className={questionTitleClasses}>{question.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            disabled={isAnswered}
            className={`p-4 rounded-lg text-left text-white transition-all duration-300 border ${getOptionClass(option)} ${!isAnswered ? 'cursor-pointer transform hover:-translate-y-1' : 'cursor-not-allowed'}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        {/* CHANGED: Applied Tailwind utility classes directly for the green button style */}
        <button
          onClick={() => onAnswer(selected)}
          disabled={isAnswered || selected.length === 0}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 disabled:bg-gray-500 disabled:opacity-50 disabled:shadow-none disabled:transform-none"
        >
          Submit
        </button>
      </div>
    </>
  );
};

// --- Fill-in-the-Blanks Question Component ---
const FillInTheBlanksQuestion = ({ question, onAnswer, isAnswered }) => {
  const [filledAnswer, setFilledAnswer] = useState(null);

  const getChipClass = (option) => {
    if (isAnswered) {
      if (question.answer.includes(option)) return 'bg-green-500/50 border-green-400';
      if (filledAnswer === option) return 'bg-red-500/50 border-red-400';
      return 'bg-white/5 opacity-50 border-transparent';
    }
    if (filledAnswer === option) return 'bg-accent/70 border-purple-400';
    return 'bg-white/10 border-white/20 hover:bg-white/20';
  };
  
  const questionText = question.question.replace('___', filledAnswer ? ` ${filledAnswer} ` : ' ___ ');

  return (
    <>
      <div className="bg-primary/50 border border-white/10 p-6 rounded-lg mb-8 text-center">
        <h2 className="text-3xl font-bold text-white tracking-wider">{questionText}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => setFilledAnswer(option)}
            disabled={isAnswered}
            className={`p-3 px-5 rounded-lg transition-all duration-200 border text-white ${getChipClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        {/* CHANGED: Applied Tailwind utility classes directly for the green button style */}
        <button
          onClick={() => onAnswer(filledAnswer)}
          disabled={isAnswered || !filledAnswer}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 disabled:bg-gray-500 disabled:opacity-50 disabled:shadow-none disabled:transform-none"
        >
          Submit
        </button>
      </div>
    </>
  );
};

// --- Main Display Component ---
const QuestionDisplay = ({ question, onAnswer, isAnswered }) => {
  const renderQuestionType = () => {
    // ... switch statement remains the same
    switch (question.type) {
      case 'single-select-mcq':
      case 'image-mcq':
        return <StandardQuestion question={question} onAnswer={onAnswer} isAnswered={isAnswered} />;
      case 'multi-select-mcq':
        return <MultiSelectQuestion question={question} onAnswer={onAnswer} isAnswered={isAnswered} />;
      case 'fill-in-the-blanks':
        return <FillInTheBlanksQuestion question={question} onAnswer={onAnswer} isAnswered={isAnswered} />;
      default:
        return <p className="text-center text-red-400">Unsupported question type: {question.type}</p>;
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
    >
      {renderQuestionType()}
    </motion.div>
  );
};

export default QuestionDisplay;