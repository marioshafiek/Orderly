//Types
import { TProduct } from "@customeTypes/productType";
//Component
import { Product } from "@components/eCommerce/index";
//Styles
import styles from "./styles.module.css";

interface ProductListProps {
  products: TProduct[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          description={product.description}
          price={
            typeof product.price === "number"
              ? product.price
              : parseFloat(product.price)
          }
          id={product.id}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;
