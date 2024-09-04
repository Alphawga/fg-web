import { create } from "zustand";

interface ScrollPositionState {
  scrollPosition: number;
  setScrollPosition: (newScrollPosition: number) => void;
}

const useScrollPositionStore = create<ScrollPositionState>((set) => ({
  scrollPosition: 0,
  setScrollPosition: (newScrollPosition: number) =>
    set(() => ({ scrollPosition: newScrollPosition })),
}));

export default useScrollPositionStore;
