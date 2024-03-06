import { create } from "zustand";

export interface CarQuery {
  buyOrLease?: "buy" | "lease";
  vehicleType?: "suv" | "coupe" | "convertible";
  gearboxType?: "automatic" | "manual";
  minHorsePower?: number;
  isElectric?: boolean;
  minPrice?: number;
  maxPrice?: number;
  minPassengersCount?: number;
  sortOrder?: string;
  searchText?: string;
  pageSize?: number;
}

interface CarQueryStore {
  carQuery: CarQuery;
  setBuyOrLease: (buyOrLease?: "buy" | "lease") => void;
  setVehicleType: (vehicleType?: "suv" | "coupe" | "convertible") => void;
  setGearboxType: (gearboxType?: "automatic" | "manual") => void;
  setMinHorsePower: (minHorsePower?: number) => void;
  setIsElectric: (isElectric?: boolean) => void;
  setMinPrice: (minPrice?: number) => void;
  setMaxPrice: (maxPrice?: number) => void;
  setMinPassengersCount: (minPassengersCount?: number) => void;
  setSortOrder: (sortOrder?: string) => void;
  setSearchText: (searchText?: string) => void;
  setPageSize: (pageSize?: number) => void;
}

const useCarQueryStore = create<CarQueryStore>((set) => ({
  carQuery: {} as CarQuery,
  setBuyOrLease: (buyOrLease) =>
    set((store) => ({ carQuery: { ...store.carQuery, buyOrLease } })),
  setVehicleType: (vehicleType) =>
    set((store) => ({ carQuery: { ...store.carQuery, vehicleType } })),
  setGearboxType: (gearboxType) =>
    set((store) => ({ carQuery: { ...store.carQuery, gearboxType } })),
  setMinHorsePower: (minHorsePower) =>
    set((store) => ({ carQuery: { ...store.carQuery, minHorsePower } })),
  setIsElectric: (isElectric) =>
    set((store) => ({ carQuery: { ...store.carQuery, isElectric } })),
  setMinPrice: (maxPrice) =>
    set((store) => ({ carQuery: { ...store.carQuery, maxPrice } })),
  setMaxPrice: (minPrice) =>
    set((store) => ({ carQuery: { ...store.carQuery, minPrice } })),
  setMinPassengersCount: (minPassengersCount) =>
    set((store) => ({ carQuery: { ...store.carQuery, minPassengersCount } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ carQuery: { ...store.carQuery, sortOrder } })),
  setSearchText: (searchText) =>
    set((store) => ({
      carQuery: { searchText, pageSize: store.carQuery.pageSize },
    })),
  setPageSize: (pageSize) =>
    set((store) => ({ carQuery: { ...store.carQuery, pageSize } })),
}));

export default useCarQueryStore;
