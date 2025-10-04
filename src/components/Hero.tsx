import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Headphones, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get featured products (products with discounts)
  const featuredProducts = products.filter(p => p.discount).slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Banner */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 text-xs md:text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20 animate-fade-in">
            ✨ {t("newArrivals")} - Save up to 20% on Premium Tech
          </span>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-card rounded-xl overflow-hidden hover-scale shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Category Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-auto py-4 flex-col gap-2 hover-scale"
            onClick={scrollToProducts}
          >
            <Smartphone className="w-6 h-6" />
            <span className="text-xs">Phone Accessories</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-auto py-4 flex-col gap-2 hover-scale"
            onClick={scrollToProducts}
          >
            <Headphones className="w-6 h-6" />
            <span className="text-xs">Audio</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-auto py-4 flex-col gap-2 hover-scale"
            onClick={scrollToProducts}
          >
            <Zap className="w-6 h-6" />
            <span className="text-xs">Charging</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-auto py-4 flex-col gap-2 hover-scale"
            onClick={scrollToProducts}
          >
            <Shield className="w-6 h-6" />
            <span className="text-xs">Smart Devices</span>
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="group shadow-lg" onClick={scrollToProducts}>
            {t("shopNow")}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
