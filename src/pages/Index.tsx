import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
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

  const handleCategoryChange = (category: string) => {
    console.log("Category changed to:", category);
    setSelectedCategory(category);
    // Scroll to products section
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <AnnouncementBanner />
      <Hero />
      <FeaturedProducts />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
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
