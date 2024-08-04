// ScrollReveal.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ScrollReveal = ({ children, className, revealClassName }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`${className} ${revealClassName}`}
      initial={{ opacity: 0, y: 20 }} 
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }} 
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
