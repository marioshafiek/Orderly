// Components
import Add from "@components/eCommerce/Shop/Add/Add";
// Types
import { TProduct } from "@customeTypes/productType";
import { NavLink } from "react-router-dom";
// Redux
import { useAppDispatch } from "src/hooks/hooks";
import { addToCart } from "@store/cart/cartSlice";
// Styles
import styles from "./styles.module.css";

const Product = ({
  id,
  image,
  category,
  title,
  description,
  price,
  rating,
}: TProduct) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  return (
    <div className={styles.card}>
      <NavLink to={"product"}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}></div>
          <img src={image} alt={title} className={styles.image} />
        </div>
      </NavLink>
      <div className={styles.prefix}>
        {category}
        <div className={styles.addToCartButton}>
          <Add onClick={handleAddToCart} />
        </div>
      </div>
      <hr className={styles.separator} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>{price}</span>
        <a href="#" className={styles.learnMore}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Product;
