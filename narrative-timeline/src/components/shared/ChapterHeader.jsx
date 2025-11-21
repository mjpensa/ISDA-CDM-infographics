import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const ChapterHeader = ({ chapter }) => {
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.5,
          delay: prefersReducedMotion ? 0 : 0.2,
        }}
        className="text-6xl mb-4"
      >
        {chapter.icon}
      </motion.div>
      <motion.h1
        id={`chapter-${chapter.id}-title`}
        className="chapter-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.6,
          delay: prefersReducedMotion ? 0 : 0.3,
        }}
      >
        {chapter.title}
      </motion.h1>
      <motion.p
        className="chapter-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.6,
          delay: prefersReducedMotion ? 0 : 0.4,
        }}
      >
        {chapter.subtitle}
      </motion.p>
    </div>
  );
};

export default ChapterHeader;
