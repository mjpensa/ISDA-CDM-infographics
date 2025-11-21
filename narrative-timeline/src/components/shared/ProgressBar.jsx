import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const ProgressBar = () => {
  const progress = useStore((state) => state.progress);
  const currentChapter = useStore((state) => state.currentChapter);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Story progress"
    >
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${(currentChapter / 5) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="bg-white/95 backdrop-blur-sm py-2 px-4 text-center">
        <p className="text-xs text-gray-600">
          Chapter {currentChapter} of 5 • {Math.round((currentChapter / 5) * 100)}% Complete
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
