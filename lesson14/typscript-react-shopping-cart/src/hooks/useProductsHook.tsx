import { useContext } from "react";
import ProductsContext, {
  UseProductsContextType,
} from "../context/Productprovider";

const useProductsHook = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProductsHook;
