import { create } from 'zustand';

export const useStore = create((set) => ({
  currentSection: 0,
  showComparison: false,
  hoveredPath: null,

  setCurrentSection: (section) => set({ currentSection: section }),
  toggleComparison: () => set((state) => ({ showComparison: !state.showComparison })),
  setHoveredPath: (path) => set({ hoveredPath: path }),
}));
