import React, { useState, useEffect, useCallback } from 'react';
import { quizData } from '../data/questions.js';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

// Component Imports
import QuizHeader from './QuizHeader';
import QuestionDisplay from './QuestionDisplay';
import LevelSelectScreen from './LevelSelectScreen';
import LevelResultScreen from './LevelResultScreen';

// A simple hook to get window dimensions for the confetti
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

const Quiz = ({ userProfile }) => {
  // Game state can be: 'level-select', 'playing', 'level-complete'
  const [gameState, setGameState] = useState('level-select');
  
  // State for quiz mechanics
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // State for level management
  const [currentLevel, setCurrentLevel] = useState(null);
  const [unlockedLevels, setUnlockedLevels] = useState(
    () => JSON.parse(localStorage.getItem('unlockedLevels')) || ['easy']
  );
  
  // State for total score across levels
  const [totalScore, setTotalScore] = useState(
    () => parseInt(localStorage.getItem('totalScore')) || 0
  );

  const { width, height } = useWindowSize();

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));
    localStorage.setItem('totalScore', totalScore.toString());
  }, [unlockedLevels, totalScore]);
  
  // Saves the final score to the leaderboard
  const saveScoreToLeaderboard = (name, finalScore) => {
    const newScore = { name, score: finalScore };
    const savedScores = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    savedScores.push(newScore);
    savedScores.sort((a, b) => b.score - a.score);
    const topScores = savedScores.slice(0, 10);
    localStorage.setItem('quizLeaderboard', JSON.stringify(topScores));
  };

  // Handles the logic at the end of a level
  const handleLevelCompletion = () => {
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0;
    
    if (percentage >= 70) {
      const newTotalScore = totalScore + score;
      setTotalScore(newTotalScore);
      
      const levelOrder = ['easy', 'medium', 'hard'];
      const currentLevelIndex = levelOrder.indexOf(currentLevel);

      if (currentLevelIndex < levelOrder.length - 1) {
        const nextLevel = levelOrder[currentLevelIndex + 1];
        if (!unlockedLevels.includes(nextLevel)) {
          setUnlockedLevels([...unlockedLevels, nextLevel]);
        }
      } else {
        // Game is finished after the 'hard' level
        // Automatically use the profile name for the leaderboard
        if (userProfile.name) {
          saveScoreToLeaderboard(userProfile.name, newTotalScore);
        }
        // Reset for a new game
        setTotalScore(0);
        setUnlockedLevels(['easy']);
      }
    }
    setGameState('level-complete');
  };
  
  const selectLevel = (level) => {
    if (level === 'easy' && unlockedLevels.length > 1) {
      // If user starts over from easy, reset their progress
      const confirmReset = window.confirm("Starting from 'Easy' will reset your total score. Are you sure you want to continue?");
      if (confirmReset) {
        setTotalScore(0);
        setUnlockedLevels(['easy']);
      } else {
        return; // Do not start the level if user cancels
      }
    }
    setCurrentLevel(level);
    startQuiz(level);
  };
  
  const startQuiz = (level) => {
    // Take 10 random questions from the selected level
    const levelQuestions = quizData[level].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(levelQuestions);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setResults([]);
    setTimeLeft(15);
    setIsAnswered(false);
    setShowConfetti(false);
  };
  
  const nextQuestion = useCallback(() => {
    setShowConfetti(false);
    setIsAnswered(false);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimeLeft(15);
    } else {
      handleLevelCompletion();
    }
  }, [currentQuestionIndex, questions.length, score, totalScore, currentLevel, unlockedLevels]);

  // The correct timer logic
  useEffect(() => {
    if (gameState === 'playing' && !isAnswered) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            nextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState, isAnswered, nextQuestion]);

  const handleAnswer = (selectedAnswer) => {
    setIsAnswered(true);
    const currentQuestion = questions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuestion.type === 'multi-select-mcq') {
      isCorrect = selectedAnswer.sort().toString() === currentQuestion.answer.sort().toString();
    } else if (currentQuestion.type === 'fill-in-the-blanks') {
      isCorrect = selectedAnswer === currentQuestion.answer[0];
    } else {
      isCorrect = selectedAnswer === currentQuestion.answer;
    }

    if (isCorrect) {
      setScore(score + currentQuestion.points);
      setShowConfetti(true);
    }
    
    setResults(prev => [...prev, {
      question: currentQuestion.question,
      yourAnswer: selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect
    }]);

    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const handleBackToMenu = () => {
    setGameState('level-select');
  };

  // Main render function to switch between game states
  const renderContent = () => {
    switch(gameState) {
      case 'playing':
        const currentQuestion = questions[currentQuestionIndex];
        return (
          <div className="w-full max-w-2xl flex flex-col items-center">
            <QuizHeader
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              score={score}
              timeLeft={timeLeft}
              onBack={handleBackToMenu}
            />
            <QuestionDisplay
              question={currentQuestion}
              onAnswer={handleAnswer}
              isAnswered={isAnswered}
            />
          </div>
        );
      case 'level-complete':
        const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
        const passed = (score / totalPoints) * 100 >= 70;
        return (
          <LevelResultScreen
            score={score}
            totalPoints={totalPoints}
            passed={passed}
            onNext={() => setGameState('level-select')}
            onRetry={() => startQuiz(currentLevel)}
          />
        );
      case 'level-select':
      default:
        return <LevelSelectScreen onLevelSelect={selectLevel} unlockedLevels={unlockedLevels} />;
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      {showConfetti && <Confetti width={width} height={height} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }} numberOfPieces={500} gravity={0.15} />}
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;