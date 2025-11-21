import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { chapters } from '../../data/chapters';

const Navigation = () => {
  const currentChapter = useStore((state) => state.currentChapter);
  const setCurrentChapter = useStore((state) => state.setCurrentChapter);
  const prevChapter = useStore((state) => state.prevChapter);
  const nextChapter = useStore((state) => state.nextChapter);

  const handleChapterClick = (chapterId) => {
    setCurrentChapter(chapterId);
    // Scroll to chapter
    const element = document.getElementById(`chapter-${chapterId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const handleKeyDown = (e, chapterId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleChapterClick(chapterId);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50"
      role="navigation"
      aria-label="Chapter navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Previous button */}
          <button
            onClick={prevChapter}
            disabled={currentChapter === 1}
            className="focus-outline p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous chapter"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center: Chapter dots */}
          <div className="flex items-center gap-3">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="flex flex-col items-center gap-1">
                <button
                  onClick={() => handleChapterClick(chapter.id)}
                  onKeyDown={(e) => handleKeyDown(e, chapter.id)}
                  className={`nav-dot focus-outline ${
                    currentChapter === chapter.id ? 'active' : ''
                  }`}
                  aria-label={`Go to ${chapter.title}`}
                  aria-current={currentChapter === chapter.id ? 'true' : 'false'}
                />
                <span className="text-xs text-gray-600 hidden md:block">
                  Ch {chapter.id}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Next button */}
          <button
            onClick={nextChapter}
            disabled={currentChapter === 5}
            className="focus-outline p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next chapter"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Chapter title indicator */}
        <div className="text-center mt-2">
          <p className="text-sm font-medium text-gray-700">
            {chapters.find((ch) => ch.id === currentChapter)?.title}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
