import { create } from "zustand";

export interface ShoppingCartItem {
  carId: number;
  count: number;
  buyOrLease: "buy" | "lease";
}

interface ShoppingCartStore {
  items: ShoppingCartItem[];
  addItem: (carId: number, buyOrLease: "buy" | "lease") => void;
  incrementCount: (id: number, buyOrLease: "buy" | "lease") => void;
  decrementCount: (id: number, buyOrLease: "buy" | "lease") => void;
  getItemCount: (id: number, buyOrLease: "buy" | "lease") => number;
  getOverallItemCount: () => number;
}

const useShoppingCartStore = create<ShoppingCartStore>((set, get) => ({
  items: [],
  addItem: (carId, buyOrLease) =>
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
        } as ShoppingCartItem);
      }
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
      return { items: updatedItems };
    }),
  getItemCount: (carId, buyOrLease) => {
    const store = get();
    for (let item of store.items) {
      if (item.carId === carId && item.buyOrLease === buyOrLease)
        return item.count;
    }
    return 0;
  },
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
