//React
import { useEffect, useState } from "react";
// Redux
import { useAppSelector } from "src/hooks/hooks";
// Styles
import styles from "./styles.module.css";
// Images
import Logo from "@assets/svg/cart.svg?react";
// Utils
import getCartTotalQuantity from "@util/getTotalQuantity";

//Styles Destructuring
const { basketContainer, basketQuantity, pumpCart } = styles;

//Interface
interface HeaderBasketProps {
  onClick: () => void; // New prop for handling clicks
}

const HeaderBasket = ({ onClick }: HeaderBasketProps) => {
  // State For Cart Animation
  const [isAnimate, setAnimate] = useState(false);
  // Get cart items from the state
  const cartItems = useAppSelector((state) => state.cartSlice.items);
  // Calculate total quantity
  const total = getCartTotalQuantity(cartItems);

  // Quantity Style
  const quantityStyle = `${basketQuantity} ${isAnimate ? pumpCart : ""}`;

  // UseEffect For Debounce
  useEffect(() => {
    const debounde = setTimeout(() => {
      setAnimate(false);
    }, 300);
  }, [total]);

  return (
    <div className={basketContainer} onClick={onClick}>
      {" "}
      {/* Attach the onClick handler */}
      <Logo />
      <div className={quantityStyle}>{total}</div>
    </div>
  );
};

export default HeaderBasket;
