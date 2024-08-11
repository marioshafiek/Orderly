//React
import { useEffect, useState } from "react";
//Redux
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
//Components
import { CategoryFilter } from "@components/eCommerce/index";
import { ProductList } from "@components/eCommerce/index";
import { SkeletonProduct } from "@components/eCommerce/index";
//Styles
import styles from "./styles.module.css";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.productsSlice
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(actGetProducts());
    // CleanUp Records of the products
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? records
      : records.filter((product) => product.category === selectedCategory);

  // Display skeleton loading for the first 20 products if there are no records yet
  const skeletonCount = records.length || 20;

  return (
    <>
      <h1 className={styles.title}>Shop Local Brands</h1>
      <CategoryFilter
        categories={[...new Set(records.map((product) => product.category))]}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <div className={styles.productContainer}>
        {loading === "pending" &&
          Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonProduct key={index} />
          ))}
        {error && <p>Error: {error}</p>}
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
};

export default Shop;
