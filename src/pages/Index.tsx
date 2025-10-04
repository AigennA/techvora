import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import TrustpilotReviews from "@/components/TrustpilotReviews";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleSearch = (query: string) => {
    console.log("Search query received in Index:", query);
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} />
      <Hero />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div id="products">
        <ProductGrid 
          selectedCategory={selectedCategory} 
          searchQuery={searchQuery}
        />
      </div>
      <TrustpilotReviews />
      <Footer />
    </div>
  );
};

export default Index;
