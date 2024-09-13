'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WordFlipperProps {
  words: string[];
  flipInterval: number; // Interval in milliseconds between word flips
}

const WordFlipper: React.FC<WordFlipperProps> = ({ words, flipInterval }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, flipInterval);

    return () => clearInterval(intervalId);
  }, [words, flipInterval]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWordIndex}
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.5 }}
        style={{ color: 'var(--Gold, #d7ac43)' }}
      >
        {words[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

export default WordFlipper;
