
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Car } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { car: Car; selectedColor?: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CART_OPEN'; payload: boolean };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.car.id === action.payload.car.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        const newTotal = updatedItems.reduce((sum, item) => sum + (item.car.price * item.quantity), 0);
        return { ...state, items: updatedItems, total: newTotal };
      } else {
        const newItem: CartItem = {
          car: action.payload.car,
          quantity: 1,
          selectedColor: action.payload.selectedColor
        };
        const updatedItems = [...state.items, newItem];
        const newTotal = updatedItems.reduce((sum, item) => sum + (item.car.price * item.quantity), 0);
        return { ...state, items: updatedItems, total: newTotal };
      }
    }
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.car.id !== action.payload);
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.car.price * item.quantity), 0);
      return { ...state, items: updatedItems, total: newTotal };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const updatedItems = state.items.filter(item => item.car.id !== action.payload.id);
        const newTotal = updatedItems.reduce((sum, item) => sum + (item.car.price * item.quantity), 0);
        return { ...state, items: updatedItems, total: newTotal };
      }
      const updatedItems = state.items.map(item =>
        item.car.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.car.price * item.quantity), 0);
      return { ...state, items: updatedItems, total: newTotal };
    }
    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'SET_CART_OPEN':
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (car: Car, selectedColor?: string) => void;
  removeFromCart: (carId: string) => void;
  updateQuantity: (carId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    isOpen: false
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('luxury-car-cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.items.forEach((item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: { car: item.car, selectedColor: item.selectedColor } });
      });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('luxury-car-cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (car: Car, selectedColor?: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { car, selectedColor } });
    toast({
      title: "Added to Cart",
      description: `${car.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (carId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: carId });
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (carId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: carId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const setCartOpen = (open: boolean) => {
    dispatch({ type: 'SET_CART_OPEN', payload: open });
  };

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      setCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
