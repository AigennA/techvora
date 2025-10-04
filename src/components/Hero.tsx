import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                {t("newArrivals")}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("heroTitle")}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              {t("heroDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button size="lg" className="group w-full sm:w-auto" onClick={scrollToProducts}>
                {t("shopNow")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={scrollToProducts}>
                {t("browseCategories")}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 md:gap-8 pt-6 md:pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t("products")}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">50k+</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t("happyCustomers")}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t("rating")}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl md:rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage}
              alt="Premium tech accessories"
              className="relative rounded-xl md:rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
