import { ReactElement, createContext, useMemo, useReducer } from "react";

//cart item type
export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

//cart state type
type CartStateType = { cart: CartItemType[] };

//cart initial state
const initialState: CartStateType = {
  cart: [],
};

//cart reducer action type
const REDUCER_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

//cart reducer
const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TO_CART: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const { sku, name, price } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.quantity + 1 : 1;

      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity: qty }],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE_FROM_CART: {
      if (!action.payload) {
        throw new Error(
          ` ${action.payload} missing in remove from cart action`
        );
      }
      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return {
        ...state,
        cart: [...filteredCart],
      };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error(
          ` ${action.payload} missing in update quantity to cart action`
        );
      }
      const { sku, quantity } = action.payload;
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );
      if (!itemExists) {
        throw new Error(` ${sku} not found in cart`);
      }
      const updatedItem: CartItemType = { ...itemExists, quantity };

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return {
        ...state,
        cart: [...filteredCart, updatedItem],
      };
    }

    case REDUCER_ACTION_TYPE.SUBMIT:
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

//use cart context
const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  //define reducer action types
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.reduce(
    (prev, cartItem) => prev + cartItem.quantity,
    0
  );
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce(
      (prev, cartItem) => prev + cartItem.price * cartItem.quantity,
      0
    )
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, cart, totalItems, totalPrice, REDUCER_ACTIONS };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

// export default useCartContext;
const initCartContextState: UseCartContextType = {
  dispatch: () => {},

  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};
export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initialState)}>
      {children}
    </CartContext.Provider>
  );
};
