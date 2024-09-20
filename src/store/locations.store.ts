import { create } from "zustand";

type EventsType = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location: string;
};

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
  event: EventsType[];
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
