import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default Index;
