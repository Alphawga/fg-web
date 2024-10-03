import { Location } from "@prisma/client";
import { create } from "zustand";

interface LocationsDataType {
  id: null;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  default: boolean;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  pastors: string[];
  event: string[];
  news: string[];
  offering: string[];
  $databaseId: string;
  $collectionId: string;
}

interface LocationsState {
 
  locationsData: Location[];

  setLocationsData: (newLocationsData: Location[]) => void;
}

const useLocationsStore = create<LocationsState>((set) => ({
  locationsData: [],
  setLocationsData: (newLocationsData: Location[] ) => set(() => ({ locationsData: newLocationsData })),
}));

export default useLocationsStore;
