import ProductCard from "./ProductCard";

// Mock product data
const products = [
  {
    id: "1",
    name: "Premium Wireless Earbuds Pro",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    rating: 4.8,
    category: "Audio",
    inStock: true,
  },
  {
    id: "2",
    name: "Ultra-Slim Phone Case",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    rating: 4.6,
    category: "Phone Accessories",
    inStock: true,
  },
  {
    id: "3",
    name: "Fast Wireless Charging Pad",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1591290619762-c588f5ad7b90?w=500&q=80",
    rating: 4.7,
    category: "Charging",
    inStock: true,
  },
  {
    id: "4",
    name: "Smart Fitness Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    rating: 4.9,
    category: "Smart Devices",
    inStock: false,
  },
  {
    id: "5",
    name: "Noise-Cancelling Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: 4.9,
    category: "Audio",
    inStock: true,
  },
  {
    id: "6",
    name: "Magnetic Car Mount",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    rating: 4.5,
    category: "Phone Accessories",
    inStock: true,
  },
  {
    id: "7",
    name: "65W GaN Fast Charger",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    rating: 4.8,
    category: "Charging",
    inStock: true,
  },
  {
    id: "8",
    name: "Smart Home Hub",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558089687-61c00d8792ff?w=500&q=80",
    rating: 4.6,
    category: "Smart Devices",
    inStock: true,
  },
];

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => {
        const categoryMap: Record<string, string> = {
          "accessories": "Phone Accessories",
          "audio": "Audio",
          "charging": "Charging",
          "smart-devices": "Smart Devices",
        };
        return product.category === categoryMap[selectedCategory];
      });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our carefully selected collection of premium tech accessories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
