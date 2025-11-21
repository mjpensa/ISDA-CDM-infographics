import { create } from 'zustand';

export const useStore = create((set) => ({
  // View modes
  viewMode: 'all', // 'all', 'native-vs-translator', 'focus-legacy', 'focus-native', 'focus-translator'
  showProblems: false,
  isTracing: false,
  traceStep: 0,
  selectedArchitecture: null,
  hoveredLayer: null,

  // Actions
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleProblems: () => set((state) => ({ showProblems: !state.showProblems })),
  startTrace: () => set({ isTracing: true, traceStep: 0 }),
  stopTrace: () => set({ isTracing: false, traceStep: 0 }),
  nextTraceStep: () => set((state) => ({ traceStep: state.traceStep + 1 })),
  setTraceStep: (step) => set({ traceStep: step }),
  setSelectedArchitecture: (arch) => set({ selectedArchitecture: arch }),
  setHoveredLayer: (layer) => set({ hoveredLayer: layer }),
}));
