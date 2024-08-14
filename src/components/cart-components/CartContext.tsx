import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "../login-signup-components/AuthContext";

interface CartItem {
  quantity: number;
  mainImage: string;
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;

  clearCart: () => void; // New function to clear the cart
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { userData } = useAuth();

  useEffect(() => {
    const storedCartItems = localStorage.getItem(`cartItems_${userData?.id}`);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    // Add event listener for beforeunload to clear cart items on browser close
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      localStorage.removeItem(`cartItems_${userData?.id}`);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userData]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (itemId: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        clearCart, // Provide clearCart function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
