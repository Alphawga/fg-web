import { create } from "zustand";

interface StyleHeaderState {
  headerStyle: string;
  setHeaderStyle: (newHeaderState: string) => void;
}

const useStyleHeaderStore = create<StyleHeaderState>((set) => ({
  headerStyle: "bg-transparent",
  setHeaderStyle: (newHeaderStyle: string) =>
    set(() => ({ headerStyle: newHeaderStyle })),
}));

export default useStyleHeaderStore;

