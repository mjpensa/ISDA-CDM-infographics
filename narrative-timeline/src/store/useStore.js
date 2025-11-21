import { create } from 'zustand';

export const useStore = create((set, get) => ({
  currentChapter: 1,
  progress: 0,
  isScrolling: false,
  viewMode: 'horizontal', // 'horizontal' or 'vertical'
  prefersReducedMotion: false,

  setCurrentChapter: (chapter) => {
    set({ currentChapter: chapter });
    const totalChapters = 5;
    set({ progress: ((chapter - 1) / totalChapters) * 100 });
  },

  nextChapter: () => {
    const { currentChapter } = get();
    if (currentChapter < 5) {
      get().setCurrentChapter(currentChapter + 1);
    }
  },

  prevChapter: () => {
    const { currentChapter } = get();
    if (currentChapter > 1) {
      get().setCurrentChapter(currentChapter - 1);
    }
  },

  setIsScrolling: (isScrolling) => set({ isScrolling }),

  setViewMode: (mode) => set({ viewMode: mode }),

  setPrefersReducedMotion: (prefers) => set({ prefersReducedMotion: prefers }),

  // Calculate progress based on scroll position
  updateProgress: (scrollPosition, totalWidth) => {
    const progress = (scrollPosition / totalWidth) * 100;
    set({ progress: Math.min(100, Math.max(0, progress)) });
  },
}));
