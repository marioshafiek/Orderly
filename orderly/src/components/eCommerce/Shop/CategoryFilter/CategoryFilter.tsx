//Styles
import styles from "./styles.module.css";

//Interface
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFilterProps) => {
  return (
    <div className={styles.categoryFilter}>
      <button
        className={`${styles.categoryButton} ${
          selectedCategory === "All" ? styles.active : ""
        }`}
        onClick={() => onCategorySelect("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.categoryButton} ${
            selectedCategory === category ? styles.active : ""
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
