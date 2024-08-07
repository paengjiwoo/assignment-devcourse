import { useEffect, useState } from "react";
import { Cart } from "../models/cart.model";
import { deleteCart } from "../api/carts.api";

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCarts(carts.filter((cart) => cart.id !== id));
    });
  }

  useEffect(() => {
    setCarts(carts);
    setIsEmpty(carts.length === 0);
  }, []);

  return { carts, isEmpty, deleteCartItem };
};