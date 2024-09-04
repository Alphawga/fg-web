import { create } from "zustand";

interface MobileSideNavBarState {
  option: string;
  extend: string;
  openSideNav: boolean;
  setOption: (newOption: string) => void;
  setExtend: (newExtend: string) => void;
  setOpenSideNav: (newState: boolean) => void;
}

const useMobileSideNavBarStore = create<MobileSideNavBarState>((set) => ({
  option: "",
  extend: "",
  openSideNav: false,
  setOption: (newOption: string) => set(() => ({ option: newOption })),
  setExtend: (newExtend: string) => set(() => ({ extend: newExtend })),
  setOpenSideNav: (newState: boolean) => set(() => ({ openSideNav: newState }))
}));

export default useMobileSideNavBarStore;
