import { create } from "zustand";
import Car from "../entities/Car";

export interface ShoppingCartItem {
  carId: number;
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
  addItem: (carId: number, buyOrLease: "buy" | "lease", car: Car) => void;
  incrementCount: (id: number, buyOrLease: "buy" | "lease") => void;
  decrementCount: (id: number, buyOrLease: "buy" | "lease") => void;
  updateItems: (car: Car) => void;
  initializeItems: () => void;
}

const getInitialShoppingCartItems = () => {
  const shoppingCartItems = localStorage.getItem("DreamCarsShoppingCartItems");
  return shoppingCartItems ? JSON.parse(shoppingCartItems) : [];
};

const setLocalStorage = (items: ShoppingCartItem[]) => {
  localStorage.setItem("DreamCarsShoppingCartItems", JSON.stringify(items));
};

const calculateNewState = (items: ShoppingCartItem[]) => {
  let oneTimeCost = 0;
  let monthlyCosts = 0;
  let itemCount = 0;

  for (let x of items) {
    if (x.buyOrLease === "buy") {
      oneTimeCost += x.car.price * x.count;
    } else if (x.buyOrLease === "lease") {
      monthlyCosts += x.car.leasing * x.count * 24;
    }
    itemCount += x.count;
  }

  return {
    items,
    overallCosts: { oneTimeCost, monthlyCosts },
    overallItemCount: itemCount,
  } as ShoppingCartStore;
};

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  items: getInitialShoppingCartItems(),
  overallCosts: { oneTimeCost: 0, monthlyCosts: 0 },
  overallItemCount: 0,
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
      return calculateNewState(updatedItems);
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
      return calculateNewState(updatedItems);
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
      return calculateNewState(updatedItems);
    }),
  updateItems: (car) =>
    set((store) => {
      const updatedItems = store.items.map((item) => {
        if (item.carId === car.id) {
          return { ...item, car: car };
        } else {
          return item;
        }
      });
      setLocalStorage(updatedItems);
      return calculateNewState(updatedItems);
    }),
  initializeItems: () =>
    set(() => {
      const initialItems = getInitialShoppingCartItems();
      return calculateNewState(initialItems);
    }),
}));

export default useShoppingCartStore;
