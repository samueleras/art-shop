import { create } from "zustand";
import Car from "../entities/Car";

export interface ShoppingCartItem {
  carId: String;
  count: number;
  buyOrLease: "buy" | "lease";
  car: Car;
}

export interface Cost {
  oneTimeCost: number;
  monthlyCosts: number;
}

interface ShoppingCartStore {
  items: ShoppingCartItem[];
  overallCosts: Cost;
  overallItemCount: number;
  overallShippingCosts: number;
  selectedShippingCost: number;
  addItem: (carId: String, buyOrLease: "buy" | "lease", car: Car) => void;
  incrementCount: (id: String, buyOrLease: "buy" | "lease") => void;
  decrementCount: (id: String, buyOrLease: "buy" | "lease") => void;
  updateItems: (cars: Car[]) => void;
  initializeItems: () => void;
  setSelectedShippingCost: (cost: number) => void;
}

const getInitialShoppingCartItems = () => {
  const shoppingCartItems = localStorage.getItem("DreamCarsShoppingCartItems");
  return shoppingCartItems ? JSON.parse(shoppingCartItems) : [];
};

const setLocalStorage = (items: ShoppingCartItem[]) => {
  localStorage.setItem("DreamCarsShoppingCartItems", JSON.stringify(items));
};

const calculateNewState = (
  items: ShoppingCartItem[],
  selectedShippingCost: number
) => {
  let oneTimeCost = 0;
  let monthlyCosts = 0;
  let itemCount = 0;

  for (let x of items) {
    if (x.buyOrLease === "buy") {
      oneTimeCost += x.car.price * x.count;
    } else if (x.buyOrLease === "lease") {
      monthlyCosts += x.car.leasing * x.count;
    }
    itemCount += x.count;
  }

  return {
    items,
    overallCosts: { oneTimeCost, monthlyCosts },
    overallItemCount: itemCount,
    overallShippingCosts: itemCount * selectedShippingCost,
  } as ShoppingCartStore;
};

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  items: getInitialShoppingCartItems(),
  overallCosts: { oneTimeCost: 0, monthlyCosts: 0 },
  overallItemCount: 0,
  overallShippingCosts: 0,
  selectedShippingCost: 209.99,
  addItem: (carId, buyOrLease, car) =>
    set((store) => {
      let existing = false;
      const updatedItems = store.items.map((item) => {
        if (item.carId === carId && item.buyOrLease === buyOrLease) {
          existing = true;
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      if (!existing) {
        updatedItems.push({
          carId,
          count: 1,
          buyOrLease,
          car,
        } as ShoppingCartItem);
      }
      setLocalStorage(updatedItems);
      return calculateNewState(updatedItems, store.selectedShippingCost);
    }),
  incrementCount: (carId, buyOrLease) =>
    set((store) => {
      const updatedItems = store.items.map((item) => {
        if (item.carId === carId && item.buyOrLease === buyOrLease) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      setLocalStorage(updatedItems);
      return calculateNewState(updatedItems, store.selectedShippingCost);
    }),
  decrementCount: (carId, buyOrLease) =>
    set((store) => {
      let updatedItems = store.items.map((item) => {
        if (item.carId === carId && item.buyOrLease === buyOrLease) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
      updatedItems = updatedItems.filter((item) => {
        if (item.count != 0) {
          return item;
        }
      });
      setLocalStorage(updatedItems);
      return calculateNewState(updatedItems, store.selectedShippingCost);
    }),
  updateItems: (cars) =>
    set((store) => {
      const carMap = new Map(cars.map((car) => [car._id, car]));
      const updatedItems = store.items.map((item) => {
        const updatedCar = carMap.get(item.carId);
        if (updatedCar) {
          return { ...item, car: updatedCar };
        }
        return item;
      });
      setLocalStorage(updatedItems);
      return calculateNewState(updatedItems, store.selectedShippingCost);
    }),
  initializeItems: () =>
    set((store) => {
      const initialItems = getInitialShoppingCartItems();
      return calculateNewState(initialItems, store.selectedShippingCost);
    }),
  setSelectedShippingCost: (cost) =>
    set((store) => {
      return {
        selectedShippingCost: cost,
        overallShippingCosts: cost * store.overallItemCount,
      };
    }),
}));

export default useShoppingCartStore;
