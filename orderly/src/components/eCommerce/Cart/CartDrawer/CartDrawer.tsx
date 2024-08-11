// React
import { useState, useEffect } from "react";
// Components
import { CartItemList } from "@components/eCommerce/index";
import { CartTotalPrice } from "@components/eCommerce/index";
//Images
import emptyCart from "@assets/Images/EmptyCart.png";

// Redux
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { actGetProductsById, deleteAllFromCart } from "@store/cart/cartSlice";
// Styles
import styles from "./styles.module.css";

//Interface
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  // Redux
  const dispatch = useAppDispatch();
  const { items, productFullInfo } = useAppSelector((state) => state.cartSlice);

  // Handler for deleting all items from the cart
  const handleDeleteAllFromCart = () => {
    dispatch(deleteAllFromCart());
  };

  useEffect(() => {
    dispatch(actGetProductsById());
  }, [dispatch, items]);

  //Get All Products with quanitity
  const products = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id] || 0,
  }));

  // State for drawer visibility
  const [visible, setVisible] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  return (
    <>
      {visible && <div className={styles.overlay} onClick={onClose}></div>}
      <div className={`${styles.cartDrawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.content}>
          {/* Clear Close Button */}
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          {/* Clear Title */}
          <h2>Your Cart</h2>
          {/* Clear Cart Button */}
          {/* Clear Cart Button */}
          {Object.keys(items).length > 0 ? (
            <>
              <CartItemList products={products} />
              <CartTotalPrice products={products} />
              <button
                className={styles.clearCartButton}
                onClick={handleDeleteAllFromCart}
              >
                Clear Cart
              </button>
            </>
          ) : (
            <div className={styles.emptyContainer}>
              <p className={styles.empty}>Your cart is empty.</p>
              <img
                src={emptyCart}
                alt="Empty Cart"
                className={styles.emptyCartImage}
                width="400"
                height="400"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
