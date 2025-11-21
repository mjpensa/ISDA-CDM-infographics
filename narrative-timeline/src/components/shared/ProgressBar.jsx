import { motion } from 'framer-motion';
import useStore from '../../store/useStore';
import { chaptersData } from '../../data/chapters';

const ProgressBar = () => {
  const currentChapter = useStore((state) => state.currentChapter);
  const completedChapters = useStore((state) => state.completedChapters);

  const scrollToChapter = (chapterId) => {
    const element = document.getElementById(`chapter-${chapterId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const progressPercentage = (currentChapter / (chaptersData.length + 1)) * 100;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
      role="navigation"
      aria-label="Chapter navigation"
    >
      {/* Progress bar */}
      <div className="h-1 bg-gray-200">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Chapter dots */}
      <div className="flex items-center justify-center gap-4 py-3 px-4">
        <span className="text-sm font-ui font-medium text-gray-600 hidden md:inline">
          Progress:
        </span>
        <div className="flex items-center gap-2">
          {chaptersData.map((chapter) => {
            const isActive = currentChapter === chapter.id;
            const isCompleted = completedChapters.includes(chapter.id);

            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className={`
                  progress-dot
                  ${isActive ? 'progress-dot-active' : ''}
                  ${isCompleted && !isActive ? 'progress-dot-completed' : ''}
                  ${!isCompleted && !isActive ? 'progress-dot-inactive' : ''}
                `}
                aria-label={`Go to Chapter ${chapter.id}: ${chapter.title}`}
                aria-current={isActive ? 'step' : undefined}
                title={chapter.title}
              />
            );
          })}
          {/* Summary dot */}
          <button
            onClick={() => {
              const element = document.getElementById('summary-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={`
              progress-dot
              ${currentChapter === 6 ? 'progress-dot-active' : 'progress-dot-inactive'}
            `}
            aria-label="Go to Summary"
            title="Summary"
          />
        </div>
        <span className="text-sm font-ui text-gray-600 hidden md:inline">
          {Math.round(progressPercentage)}%
        </span>
      </div>

      {/* Current chapter label */}
      <div className="text-center pb-2 px-4">
        <span className="text-xs font-ui font-medium text-gray-500">
          {currentChapter <= chaptersData.length
            ? `Chapter ${currentChapter}: ${chaptersData[currentChapter - 1].title}`
            : 'Summary'}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
