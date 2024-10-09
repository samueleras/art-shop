import { create } from "zustand";

export interface CarQuery {
  buyOrLease: "buy" | "lease";
  vehicleType?: "suv" | "coupe" | "convertible" | "sedan";
  gearboxType?: "automatic" | "manual";
  minHorsePower?: number;
  onlyElectric?: boolean;
  minPrice?: number;
  maxPrice?: number;
  passengerCount?: number;
  doorCount?: number;
  sortOrder?: string;
  searchText?: string;
  pageSize?: number;
}

interface CarQueryStore {
  carQuery: CarQuery;
  toggleBuyOrLease: () => void;
  setVehicleType: (
    vehicleType?: "suv" | "coupe" | "convertible" | "sedan"
  ) => void;
  setGearboxType: (gearboxType?: "automatic" | "manual") => void;
  setMinHorsePower: (minHorsePower?: number) => void;
  setOnlyElectric: (onlyElectric?: boolean) => void;
  setMinPrice: (minPrice?: number) => void;
  setMaxPrice: (maxPrice?: number) => void;
  setPassengerCount: (minPassengersCount?: number) => void;
  setDoorCount: (minPassengersCount?: number) => void;
  setSortOrder: (sortOrder?: string) => void;
  setSearchText: (searchText?: string) => void;
  setPageSize: (pageSize?: number) => void;
}

const useCarQueryStore = create<CarQueryStore>((set) => ({
  carQuery: {
    buyOrLease: "buy",
    pageSize: 10,
  } as CarQuery,
  toggleBuyOrLease: () =>
    set((store) => ({
      carQuery: {
        ...store.carQuery,
        buyOrLease: store.carQuery.buyOrLease === "lease" ? "buy" : "lease",
      },
    })),
  setVehicleType: (vehicleType) =>
    set((store) => ({ carQuery: { ...store.carQuery, vehicleType } })),
  setGearboxType: (gearboxType) =>
    set((store) => ({ carQuery: { ...store.carQuery, gearboxType } })),
  setMinHorsePower: (minHorsePower) =>
    set((store) => ({ carQuery: { ...store.carQuery, minHorsePower } })),
  setOnlyElectric: (onlyElectric) =>
    set((store) => ({ carQuery: { ...store.carQuery, onlyElectric } })),
  setMinPrice: (minPrice) =>
    set((store) => ({ carQuery: { ...store.carQuery, minPrice } })),
  setMaxPrice: (maxPrice) =>
    set((store) => ({ carQuery: { ...store.carQuery, maxPrice } })),
  setPassengerCount: (passengerCount) =>
    set((store) => ({ carQuery: { ...store.carQuery, passengerCount } })),
  setDoorCount: (doorCount) =>
    set((store) => ({ carQuery: { ...store.carQuery, doorCount } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ carQuery: { ...store.carQuery, sortOrder } })),
  setSearchText: (searchText) =>
    set((store) => ({ carQuery: { ...store.carQuery, searchText } })),
  setPageSize: (pageSize) =>
    set((store) => ({
      carQuery: {
        ...store.carQuery,
        pageSize,
        buyOrLease: store.carQuery.buyOrLease,
      },
    })),
}));

export default useCarQueryStore;
