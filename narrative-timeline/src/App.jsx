import { useEffect } from 'react';
import useStore from './store/useStore';
import ProgressBar from './components/shared/ProgressBar';
import Chapter1_TowerOfBabel from './components/chapters/Chapter1_TowerOfBabel';
import Chapter2_ForkInRoad from './components/chapters/Chapter2_ForkInRoad';
import Chapter3_RosettaTrap from './components/chapters/Chapter3_RosettaTrap';
import Chapter4_RippleEffect from './components/chapters/Chapter4_RippleEffect';
import Chapter5_TheFuture from './components/chapters/Chapter5_TheFuture';
import SummarySection from './components/chapters/SummarySection';

function App() {
  const setIsMobileView = useStore((state) => state.setIsMobileView);
  const setPrefersReducedMotion = useStore((state) => state.setPrefersReducedMotion);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setPrefersReducedMotion]);

  useEffect(() => {
    // Check for mobile view
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [setIsMobileView]);

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      const currentChapter = useStore.getState().currentChapter;
      const chapters = document.querySelectorAll('[id^="chapter-"]');
      const summary = document.getElementById('summary-section');

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          if (currentChapter <= 5) {
            const nextChapter = chapters[currentChapter];
            if (nextChapter) {
              nextChapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (summary) {
              summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          if (currentChapter > 1) {
            const prevChapter = chapters[currentChapter - 2];
            if (prevChapter) {
              prevChapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
          break;

        case 'Home':
          e.preventDefault();
          chapters[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;

        case 'End':
          e.preventDefault();
          summary?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar Navigation */}
      <ProgressBar />

      {/* Main Content - Vertical Scroll */}
      <main
        className="pt-24"
        role="main"
        aria-label="Narrative timeline of ISDA CDM adoption strategies"
      >
        {/* Chapter 1: Tower of Babel */}
        <Chapter1_TowerOfBabel />

        {/* Chapter 2: Fork in the Road */}
        <Chapter2_ForkInRoad />

        {/* Chapter 3: Rosetta Stone Trap */}
        <Chapter3_RosettaTrap />

        {/* Chapter 4: Upstream Ripple Effect */}
        <Chapter4_RippleEffect />

        {/* Chapter 5: The Future */}
        <Chapter5_TheFuture />

        {/* Summary Section */}
        <SummarySection />
      </main>

      {/* Screen reader instructions */}
      <div className="sr-only" role="region" aria-label="Keyboard navigation instructions">
        <p>
          Use arrow keys to navigate between chapters.
          Press Home to go to the beginning, End to go to the summary.
        </p>
      </div>
    </div>
  );
}

export default App;
