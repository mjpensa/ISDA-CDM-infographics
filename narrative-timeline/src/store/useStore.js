import { create } from 'zustand';

const useStore = create((set) => ({
  // Current chapter tracking
  currentChapter: 1,
  setCurrentChapter: (chapter) => set({ currentChapter: chapter }),

  // Progress tracking
  completedChapters: [],
  markChapterCompleted: (chapterId) => set((state) => {
    if (!state.completedChapters.includes(chapterId)) {
      return { completedChapters: [...state.completedChapters, chapterId] };
    }
    return state;
  }),

  // Navigation state
  isAutoAdvance: false,
  toggleAutoAdvance: () => set((state) => ({ isAutoAdvance: !state.isAutoAdvance })),

  // Accessibility preferences
  prefersReducedMotion: false,
  setPrefersReducedMotion: (value) => set({ prefersReducedMotion: value }),

  // UI state
  showNavigation: true,
  toggleNavigation: () => set((state) => ({ showNavigation: !state.showNavigation })),

  // Progress percentage
  progressPercentage: 0,
  setProgressPercentage: (percentage) => set({ progressPercentage: percentage }),

  // Mobile/Desktop view
  isMobileView: false,
  setIsMobileView: (value) => set({ isMobileView: value }),
}));

export default useStore;
