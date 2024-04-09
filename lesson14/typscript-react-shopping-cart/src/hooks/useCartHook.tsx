import { useContext } from "react";
import { CartContext, UseCartContextType } from "../context/CartProvider";

const useCartHook = (): UseCartContextType => {
  return useContext(CartContext);
};
export default useCartHook;
