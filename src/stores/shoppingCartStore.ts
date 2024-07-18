import { create } from "zustand";
import Car from "../entities/Car";

export interface ShoppingCartItem {
  carId: number;
  count: number;
  buyOrLease: "buy" | "lease";
  car: Car;
}

interface ShoppingCartStore {
  items: ShoppingCartItem[];
  addItem: (carId: number, buyOrLease: "buy" | "lease", car: Car) => void;
  incrementCount: (id: number, buyOrLease: "buy" | "lease") => void;
  decrementCount: (id: number, buyOrLease: "buy" | "lease") => void;
  getOverallItemCount: () => number;
}

const getInitialShoppingCartItems = () => {
  const shoppingCartItems = localStorage.getItem("DreamCarsShoppingCartItems");
  return shoppingCartItems ? JSON.parse(shoppingCartItems) : [];
};

const setLocalStorage = (items: ShoppingCartItem[]) => {
  localStorage.setItem("DreamCarsShoppingCartItems", JSON.stringify(items));
};

const useShoppingCartStore = create<ShoppingCartStore>((set, get) => ({
  items: getInitialShoppingCartItems(),
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
      return { items: updatedItems };
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
      return { items: updatedItems };
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
      return { items: updatedItems };
    }),
  getOverallItemCount: () => {
    const store = get();
    let itemCount = 0;
    for (let item of store.items) {
      itemCount += item.count;
    }
    return itemCount;
  },
}));

export default useShoppingCartStore;
