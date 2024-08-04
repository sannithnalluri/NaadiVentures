// AnimatedText.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ children }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-container"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
