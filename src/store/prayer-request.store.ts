import { create } from "zustand";

interface PrayerRequestState {
  firstName: string;
  lastName: string;
  email: string;
  campus: string;
  category: string;
  request: string;
  setFirstName: (newFirstName: string) => void;
  setLastName: (newLastName: string) => void;
  setEmail: (newEmail: string) => void;
  setCampus: (newCampus: string) => void;
  setCategory: (newCategory: string) => void;
  setRequest: (newRequest: string) => void;
}

const usePrayerRequestStore = create<PrayerRequestState>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  campus: "",
  category: "",
  request: "",
  setFirstName: (newFirstName: string) =>
    set(() => ({ firstName: newFirstName })),
  setLastName: (newLastName: string) =>
    set(() => ({ lastName: newLastName })),
  setEmail: (newEmail: string) => set(() => ({ email: newEmail })),
  setCampus: (newCampus: string) => set(() => ({ campus: newCampus })),
  setCategory: (newCategory: string) =>
    set(() => ({ category: newCategory })),
  setRequest: (newRequest: string) => set(() => ({ request: newRequest })),
}));

export default usePrayerRequestStore;
