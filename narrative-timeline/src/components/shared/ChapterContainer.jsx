import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const ChapterContainer = ({ children, chapterId, className = '' }) => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`chapter-section ${className}`}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={`chapter-${chapterId}`}
      aria-labelledby={`chapter-${chapterId}-title`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default ChapterContainer;
