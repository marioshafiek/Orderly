//Types
import { TProduct } from "@customeTypes/productType";
//Redux
import { useAppDispatch } from "src/hooks/hooks";
import {
  addToCart,
  removeOneFromCart,
  deleteFromCart,
} from "@store/cart/cartSlice";
//styles
import styles from "./styles.module.css";

//Interface
interface CartItemProps {
  product: TProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch();

  //Add Item to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
  };
  //Remove one Item from the cart
  const handleRemoveOneFromCart = () => {
    dispatch(removeOneFromCart(product.id));
  };
  //Remove item from the cart
  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(product.id));
  };

  return (
    <div className={styles.cartItem}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{product.title}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <div className={styles.quantityControl}>
          {/* Decrease */}
          <button
            className={styles.quantityButton}
            onClick={handleRemoveOneFromCart}
          >
            -
          </button>
          <span className={styles.quantity}>{product.quantity}</span>
          {/* Increase */}
          <button className={styles.quantityButton} onClick={handleAddToCart}>
            +
          </button>
        </div>
      </div>
      {/* Delete Button */}
      <button className={styles.deleteButton} onClick={handleDeleteFromCart}>
        &times;
      </button>
    </div>
  );
};

export default CartItem;
