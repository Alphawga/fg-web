import { create } from "zustand";

interface ShowHeaderState {
  headerState: string;
  setHeaderState: (newHeaderState: string) => void;
}

const useShowHeaderStore = create<ShowHeaderState>((set) => ({
  headerState: "show",
  setHeaderState: (newHeaderState: string) =>
    set(() => ({ headerState: newHeaderState })),
}));

export default useShowHeaderStore;

