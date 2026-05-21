import { motion } from "framer-motion";
import { categories, categoryEmojis, type Category } from "@/data/venues";

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(cat)}
            className={`shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-foreground hover:bg-muted border border-border"
            }`}
          >
            <span className="mr-1.5">{categoryEmojis[cat]}</span>
            {cat}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
