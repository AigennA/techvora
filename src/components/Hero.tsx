import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedCounter from "./AnimatedCounter";
import { products } from "@/data/products";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroProducts = products.slice(0, 6);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroProducts.length]);
  
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16 lg:py-20">
      {/* Simplified background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left relative">
            {/* Decorative gradient blobs */}
            <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse hidden xl:block"></div>
            <div className="absolute -left-10 bottom-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse hidden xl:block" style={{ animationDelay: '1s' }}></div>

            <div className="inline-block animate-fade-in relative z-10">
              <span className="px-4 py-2 text-xs font-semibold text-primary bg-primary/10 rounded-full animate-pulse border border-primary/20">
                ✨ {t("newArrivals")}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in relative z-10" style={{ animationDelay: '0.1s' }}>
              {t("heroTitle")}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 animate-fade-in relative z-10" style={{ animationDelay: '0.2s' }}>
              {t("heroDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 animate-fade-in relative z-10" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="group w-full sm:w-auto hover-scale shadow-lg" onClick={scrollToProducts}>
                {t("shopNow")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover-scale" onClick={scrollToProducts}>
                {t("browseCategories")}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 md:gap-8 pt-6 md:pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="hover-scale">
                <AnimatedCounter end={500} suffix="+" />
                <div className="text-xs md:text-sm text-muted-foreground">{t("products")}</div>
              </div>
              <div className="hover-scale">
                <AnimatedCounter end={50} suffix="k+" />
                <div className="text-xs md:text-sm text-muted-foreground">{t("happyCustomers")}</div>
              </div>
              <div className="hover-scale">
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t("rating")}</div>
              </div>
            </div>
          </div>

          {/* Dynamic Product Images */}
          <div className="relative order-first md:order-last animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {/* Background gradient blobs */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl md:rounded-3xl transform rotate-3 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main product showcase */}
            <div className="relative grid grid-cols-2 gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl">
              {heroProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
                    index === currentImageIndex
                      ? 'col-span-2 row-span-2 scale-100 opacity-100 z-10'
                      : 'scale-95 opacity-60 hover:opacity-80 hover:scale-100'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute bottom-3 left-3 right-3 z-20 animate-fade-in">
                      <p className="text-white font-semibold text-sm md:text-base drop-shadow-lg">
                        {product.name}
                      </p>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-lg">
                        ${product.price}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature badges */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg flex items-center gap-1 hover-scale">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                Fast Shipping
              </div>
              <div className="bg-accent text-accent-foreground px-3 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg flex items-center gap-1 hover-scale">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                2Y Warranty
              </div>
              <div className="bg-secondary text-secondary-foreground px-3 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg flex items-center gap-1 hover-scale">
                <Headphones className="w-3 h-3 md:w-4 md:h-4" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
