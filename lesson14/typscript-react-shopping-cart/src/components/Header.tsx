import useCartHook from "../hooks/useCartHook";
import Nav from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCartHook();
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Bravol Co.</h1>
        <div className="header__price-box">
          <p>Total items: {totalItems}</p>
          <p>Total Price: {totalPrice} </p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
};

export default Header;
