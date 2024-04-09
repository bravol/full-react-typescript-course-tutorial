import { ReactElement } from "react";
import useCartHook from "../hooks/useCartHook";
import useProductsHook from "../hooks/useProductsHook";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCartHook();
  const { products } = useProductsHook();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main--products">{pageContent}</main>;

  return content;
};
export default ProductList;
