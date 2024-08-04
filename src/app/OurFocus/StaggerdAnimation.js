// StaggeredReveal.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StaggeredReveal = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.4,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="founder-image-container"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item} className="founder-section">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredReveal;
