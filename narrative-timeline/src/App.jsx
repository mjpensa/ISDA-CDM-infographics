import { useEffect, useRef, lazy, Suspense } from 'react';
import { useStore } from './store/useStore';
import Navigation from './components/shared/Navigation';
import ProgressBar from './components/shared/ProgressBar';

// Lazy load chapter components for better performance
const Chapter1 = lazy(() => import('./components/chapters/Chapter1'));
const Chapter2 = lazy(() => import('./components/chapters/Chapter2'));
const Chapter3 = lazy(() => import('./components/chapters/Chapter3'));
const Chapter4 = lazy(() => import('./components/chapters/Chapter4'));
const Chapter5 = lazy(() => import('./components/chapters/Chapter5'));
const Summary = lazy(() => import('./components/chapters/Summary'));

function App() {
  const scrollContainerRef = useRef(null);
  const setCurrentChapter = useStore((state) => state.setCurrentChapter);
  const setPrefersReducedMotion = useStore((state) => state.setPrefersReducedMotion);
  const currentChapter = useStore((state) => state.currentChapter);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setPrefersReducedMotion]);

  // Handle scroll to update current chapter
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.scrollWidth - container.clientWidth;
      const scrollPercentage = (scrollPosition / containerWidth) * 100;

      // Determine which chapter based on scroll position
      let newChapter = 1;
      if (scrollPercentage > 83) newChapter = 6; // Summary
      else if (scrollPercentage > 66) newChapter = 5;
      else if (scrollPercentage > 50) newChapter = 4;
      else if (scrollPercentage > 33) newChapter = 3;
      else if (scrollPercentage > 16) newChapter = 2;

      if (newChapter !== currentChapter) {
        setCurrentChapter(newChapter);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentChapter, setCurrentChapter]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextChapter = document.getElementById(`chapter-${Math.min(currentChapter + 1, 6)}`);
        if (nextChapter) {
          nextChapter.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevChapter = document.getElementById(`chapter-${Math.max(currentChapter - 1, 1)}`);
        if (prevChapter) {
          prevChapter.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapter]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <Navigation />

      {/* Main scroll container - horizontal on desktop, vertical on mobile */}
      <div
        ref={scrollContainerRef}
        className="scroll-container fixed top-20 left-0 right-0 bottom-16 md:flex md:flex-row overflow-y-auto md:overflow-y-hidden"
        role="main"
        aria-label="Interactive narrative timeline"
      >
        <Suspense
          fallback={
            <div className="min-w-full min-h-full flex items-center justify-center">
              <div className="text-2xl text-gray-600">Loading chapter...</div>
            </div>
          }
        >
          <Chapter1 />
          <Chapter2 />
          <Chapter3 />
          <Chapter4 />
          <Chapter5 />
          <Summary />
        </Suspense>
      </div>

      {/* Progress Bar */}
      <ProgressBar />
    </div>
  );
}

export default App;
