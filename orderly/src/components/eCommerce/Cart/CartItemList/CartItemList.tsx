// Types
import { TProduct } from "@customeTypes/productType";
// Components
import CartItem from "../CartItem/CartItem";

//Interface
interface CartItemListProps {
  products: TProduct[];
}

const CartItemList = ({ products }: CartItemListProps) => {
  // Map through the products array and render CartItem for each product.
  const list = products.map((product) => (
    <CartItem key={product.id} product={product} />
  ));

  return <div>{list}</div>;
};

export default CartItemList;
