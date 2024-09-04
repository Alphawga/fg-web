import { create } from "zustand";

interface DesktopSecSideNavBarState {
  option: string;
  secSideNav: string;
  setOption: (newOption: string) => void;
  setSecSideNav: (newState: string) => void;
}

const useDesktopSecSideNavBarStore = create<DesktopSecSideNavBarState>((set) => ({
  option: "",
  secSideNav: "",
  setOption: (newOption: string) => set(() => ({ option: newOption })),
  setSecSideNav: (newState: string) => set(() => ({ secSideNav: newState }))
}));

export default useDesktopSecSideNavBarStore;
