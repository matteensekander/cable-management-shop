'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, qty: number) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product, qty: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.slug === product.slug);
      if (existing) {
        return prev.map((item) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((slug: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.slug !== slug));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.slug === slug ? { ...item, quantity: qty } : item
        )
      );
    }
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
