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
  locations: string[];
  locationsData: LocationsDataType[];
  setLocations: (newLocations: string[]) => void;
  setLocationsData: (newLocationsData: LocationsDataType[]) => void;
}

const useLocationsStore = create<LocationsState>((set) => ({
  locations: [],
  locationsData: [],
  setLocations: (newLocations: string[]) => set(() => ({ locations: newLocations })),
  setLocationsData: (newLocationsData: LocationsDataType[]) => set(() => ({ locationsData: newLocationsData })),
}));

export default useLocationsStore;
