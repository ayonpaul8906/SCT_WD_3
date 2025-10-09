import React, { useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiRefreshCw, FiArrowRight } from 'react-icons/fi';

const Counter = ({ from = 0, to }) => {
  const nodeRef = React.useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
};


const LevelResultScreen = ({ score, totalPoints, passed, onNext, onRetry }) => {
  const percentage = totalPoints > 0 ? ((score / totalPoints) * 100).toFixed(0) : 0;

  return (
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
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
           <motion.div animate={{ x: [-10, 10, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.5 }}>
             <FiXCircle className="mx-auto text-red-500 mb-4" size={80} />
           </motion.div>
        </motion.div>
      )}
      
      <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">{passed ? "Level Complete!" : "Level Failed"}</h2>
      <p className="text-white mb-6">{passed ? "Great job! You've unlocked the next challenge." : "You need at least 70% to pass. Give it another try!"}</p>
      
      <div className="bg-primary/50 border border-white/10 rounded-lg p-4 mb-8">
        <p className="text-lg text-white">Your Score</p>
        <p className="text-5xl font-bold text-white">
          <Counter to={score} /> / {totalPoints}
        </p>
        <p className="text-2xl font-semibold text-white">
          (<Counter to={percentage} />%)
        </p>
      </div>
      
      {passed ? (
        <button
          onClick={onNext}
          className="btn-primary flex items-center text-white hover:cursor-pointer mx-auto"
        >
          Next Level <FiArrowRight className="ml-2" />
        </button>
      ) : (
        <button
          onClick={onRetry}
          className="btn-primary flex items-center mx-auto"
        >
          <FiRefreshCw className="mr-2" /> Try Again
        </button>
      )}
    </motion.div>
  );
};

export default LevelResultScreen;