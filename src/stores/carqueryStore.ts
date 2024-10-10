import { create } from "zustand";

export type VehicleType = "suv" | "coupe" | "convertible" | "sedan";
export type BuyOrLease = "buy" | "lease";
export type GearboxType = "automatic" | "manual";
export type SortOrder =
  | "brandDesc"
  | "brandAsc"
  | "priceDesc"
  | "priceAsc"
  | "horsepowerDesc"
  | "horsepowerAsc";
export interface CarQuery {
  buyOrLease: BuyOrLease;
  vehicleType?: VehicleType;
  gearboxType?: GearboxType;
  minHorsePower?: number;
  onlyElectric?: boolean;
  minPrice?: number;
  maxPrice?: number;
  passengerCount?: number;
  doorCount?: number;
  sortOrder?: SortOrder;
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
  setSortOrder: (sortOrder?: SortOrder) => void;
  setSearchText: (searchText?: string) => void;
}

const useCarQueryStore = create<CarQueryStore>((set) => ({
  carQuery: {
    buyOrLease: "buy",
    pageSize: 20,
    sortOrder: "horsepowerDesc",
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
}));

export default useCarQueryStore;
