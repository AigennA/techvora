import ProductCard from "./ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";

interface ProductGridProps {
  selectedCategory: string;
  searchQuery?: string;
}

const ProductGrid = ({ selectedCategory, searchQuery = "" }: ProductGridProps) => {
  const { t } = useLanguage();
  
  const filteredProducts = products.filter(product => {
    // Filter by category
    const categoryMatch = selectedCategory === "all" || (() => {
      const categoryMap: Record<string, string> = {
        "accessories": "Phone Accessories",
        "audio": "Audio",
        "charging": "Charging",
        "smart-devices": "Smart Devices",
      };
      return product.category === categoryMap[selectedCategory];
    })();
    
    // Filter by search query
    const searchMatch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t("featuredProducts")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("featuredDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
