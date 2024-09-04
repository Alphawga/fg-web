import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ActiveOrganizationState {
  organizationSlug: string;
  setOrganizationSlug: (organization: string) => void;
}

const useActiveOrganizationStore = create<ActiveOrganizationState>()(
  persist(
    (set) => ({
      organizationSlug: "",
      setOrganizationSlug: (organizationSlug) => set(() => ({ organizationSlug })),
    }),
    { name: "active-organization" }
  )
);

export default useActiveOrganizationStore;
