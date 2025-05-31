import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@shared/schema";

interface CartItem extends Omit<Product, 'id'> {
  id?: number;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<Product, 'id'> & { id?: number }, options?: { color?: string; storage?: string }) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<Product, 'id'> & { id?: number }, options?: { color?: string; storage?: string }) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => 
        item.name === product.name && 
        item.selectedColor === options?.color && 
        item.selectedStorage === options?.storage
      );

      if (existingItem) {
        return currentItems.map(item =>
          item.name === product.name && 
          item.selectedColor === options?.color && 
          item.selectedStorage === options?.storage
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, {
        ...product,
        quantity: 1,
        selectedColor: options?.color,
        selectedStorage: options?.storage
      }];
    });
  };

  const removeFromCart = (productName: string) => {
    setItems(currentItems => currentItems.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productName);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}