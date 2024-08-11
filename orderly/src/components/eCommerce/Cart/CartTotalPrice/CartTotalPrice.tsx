//Types
import { TProduct } from "@customeTypes/productType";
//Styles
import styles from "./styles.module.css";
//Interface
interface CartTotalPriceProps {
  products: TProduct[];
}

const CartTotalPrice = ({ products }: CartTotalPriceProps) => {
  // Calculate total price by multiplying price by quantity for each product in the cart.
  const totalPrice = products.reduce((total, el) => {
    const price = el.price || 0;
    const quantity = el.quantity || 0;
    return total + price * quantity;
  }, 0); // Initial value for total should be 0

  return (
    <div className={styles.totalPriceContainer}>
      <div className={styles.totalLabel}>Total Price:</div>
      <div className={styles.totalAmount}>${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default CartTotalPrice;
