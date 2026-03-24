import { useCallback, useEffect, useState } from "react";

const CART_STORAGE_KEY = "cart";
const CART_UPDATED_EVENT = "cart:updated";
const CART_OPEN_EVENT = "cart:open";

function readCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    return JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(readCart());

    const syncCart = () => {
      setCart(readCart());
    };

    window.addEventListener(CART_UPDATED_EVENT, syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const saveCart = useCallback((nextCart) => {
    setCart(nextCart);
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  }, []);

  const addToCart = useCallback((item, options = { openDrawer: false }) => {
    const nextCart = [...readCart(), item];
    saveCart(nextCart);
    if (options.openDrawer) {
      window.dispatchEvent(new Event(CART_OPEN_EVENT));
    }
    return nextCart;
  }, [saveCart]);

  const updateQuantity = useCallback((id, quantity) => {
    const nextCart = readCart().map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    saveCart(nextCart);
  }, [saveCart]);

  const removeFromCart = useCallback((id) => {
    const nextCart = readCart().filter((item) => item.id !== id);
    saveCart(nextCart);
  }, [saveCart]);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedTotal = cart.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    itemCount,
    estimatedTotal,
  };
}

export { CART_OPEN_EVENT };
