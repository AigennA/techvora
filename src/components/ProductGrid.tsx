import ProductCard from "./ProductCard";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productPhoneCase from "@/assets/product-phone-case.jpg";
import productChargerPad from "@/assets/product-charger-pad.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productCarMount from "@/assets/product-car-mount.jpg";
import productFastCharger from "@/assets/product-fast-charger.jpg";
import productSmartHub from "@/assets/product-smart-hub.jpg";

// Mock product data
const products = [
  {
    id: "1",
    name: "Premium Wireless Earbuds Pro",
    price: 149.99,
    image: productEarbuds,
    rating: 4.8,
    category: "Audio",
    inStock: true,
  },
  {
    id: "2",
    name: "Ultra-Slim Phone Case",
    price: 29.99,
    image: productPhoneCase,
    rating: 4.6,
    category: "Phone Accessories",
    inStock: true,
  },
  {
    id: "3",
    name: "Fast Wireless Charging Pad",
    price: 49.99,
    image: productChargerPad,
    rating: 4.7,
    category: "Charging",
    inStock: true,
  },
  {
    id: "4",
    name: "Smart Fitness Watch",
    price: 299.99,
    image: productSmartwatch,
    rating: 4.9,
    category: "Smart Devices",
    inStock: false,
  },
  {
    id: "5",
    name: "Noise-Cancelling Headphones",
    price: 349.99,
    image: productHeadphones,
    rating: 4.9,
    category: "Audio",
    inStock: true,
  },
  {
    id: "6",
    name: "Magnetic Car Mount",
    price: 24.99,
    image: productCarMount,
    rating: 4.5,
    category: "Phone Accessories",
    inStock: true,
  },
  {
    id: "7",
    name: "65W GaN Fast Charger",
    price: 59.99,
    image: productFastCharger,
    rating: 4.8,
    category: "Charging",
    inStock: true,
  },
  {
    id: "8",
    name: "Smart Home Hub",
    price: 129.99,
    image: productSmartHub,
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
