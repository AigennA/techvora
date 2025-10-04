import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ImageOff } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  inStock: boolean;
}

const ProductCard = ({ name, price, image, rating, category, inStock }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card">
      <div className="relative overflow-hidden aspect-square bg-secondary">
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
            <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground">
            <ImageOff className="w-16 h-16 mb-2" />
            <p className="text-sm">Image unavailable</p>
          </div>
        ) : (
          <img 
            src={image} 
            alt={name}
            loading="lazy"
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
        {!inStock && (
          <Badge className="absolute top-3 right-3 bg-destructive">
            Out of Stock
          </Badge>
        )}
        {inStock && (
          <Badge className="absolute top-3 right-3 bg-accent">
            In Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        
        <p className="text-2xl font-bold text-primary">
          ${price.toFixed(2)}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2" 
          disabled={!inStock}
          variant={inStock ? "default" : "secondary"}
        >
          <ShoppingCart className="w-4 h-4" />
          {inStock ? "Add to Cart" : "Notify Me"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
