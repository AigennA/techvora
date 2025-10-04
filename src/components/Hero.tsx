import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                New Arrivals
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Premium Tech Accessories for Your Lifestyle
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Discover our curated collection of high-quality phone accessories, audio gear, and smart devices. 
              Elevate your tech experience with products designed for modern living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group" onClick={scrollToProducts}>
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToProducts}>
                Browse Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage}
              alt="Premium tech accessories"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
