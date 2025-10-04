import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 md:py-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
              ✨ {t("newArrivals")}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t("heroTitle")}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="group hover-scale shadow-lg" onClick={scrollToProducts}>
              {t("shopNow")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="hover-scale" onClick={scrollToProducts}>
              {t("browseCategories")}
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-12 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="hover-scale">
              <AnimatedCounter end={500} suffix="+" />
              <div className="text-sm text-muted-foreground">{t("products")}</div>
            </div>
            <div className="hover-scale">
              <AnimatedCounter end={50} suffix="k+" />
              <div className="text-sm text-muted-foreground">{t("happyCustomers")}</div>
            </div>
            <div className="hover-scale">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">{t("rating")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
