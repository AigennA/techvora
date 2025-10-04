import { useState, useEffect } from "react";
import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedProducts = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  
  // Auto-play carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const featuredProducts = products.slice(0, 6);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite]">
          {t("featuredProducts") || "Featured Products"}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          {t("featuredDescription") || "Discover our handpicked selection of trending tech"}
        </p>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="animate-fade-in hover:animate-scale-in">
                <ProductCard {...product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;