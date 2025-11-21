import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import useStore from '../../store/useStore';

const ChapterContainer = ({ chapter, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const setCurrentChapter = useStore((state) => state.setCurrentChapter);
  const markChapterCompleted = useStore((state) => state.markChapterCompleted);
  const prefersReducedMotion = useStore((state) => state.prefersReducedMotion);

  useEffect(() => {
    if (isInView) {
      setCurrentChapter(chapter.id);
      markChapterCompleted(chapter.id);
    }
  }, [isInView, chapter.id, setCurrentChapter, markChapterCompleted]);

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`chapter-section ${chapter.bgClass} min-h-screen`}
      id={`chapter-${chapter.id}`}
      role="region"
      aria-labelledby={`chapter-${chapter.id}-title`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="chapter-icon" aria-hidden="true">{chapter.icon}</div>
          <h2
            id={`chapter-${chapter.id}-title`}
            className="chapter-title mb-4"
          >
            {chapter.title}
          </h2>
          <p className="chapter-subtitle">{chapter.subtitle}</p>
        </div>
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterContainer;
