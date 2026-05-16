import { create } from 'zustand';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  imagePath: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isOpen: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (item) => set((state) => {
    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      return {
        cart: state.cart.map((cartItem) => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ),
        isOpen: true, // Automatically open cart when adding
      };
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }], isOpen: true };
  }),

  removeItem: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  })),
}));