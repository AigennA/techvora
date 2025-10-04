import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ImageOff, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  category: string;
  inStock: boolean;
}

const ProductCard = ({ id, name, price, originalPrice, discount, image, rating, category, inStock }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const favorite = isFavorite(id);

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer" onClick={() => navigate(`/product/${id}`)}>
      <div className="relative overflow-hidden aspect-square bg-secondary touch-manipulation">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-background/90 hover:bg-background"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite({ id, name, price, image });
          }}
        >
          <Heart className={`w-4 h-4 md:w-5 md:h-5 ${favorite ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
            <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground">
            <ImageOff className="w-12 h-12 md:w-16 md:h-16 mb-2" />
            <p className="text-xs md:text-sm">Image unavailable</p>
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
        <Badge className={`absolute top-2 left-2 md:top-3 md:left-3 text-xs md:text-sm font-semibold ${
          inStock ? 'bg-accent text-accent-foreground' : 'bg-destructive text-destructive-foreground'
        }`}>
          {inStock ? t("inStock") : t("outOfStock")}
        </Badge>
        {discount && (
          <Badge className="absolute top-2 right-12 md:top-3 md:right-16 text-xs md:text-sm font-bold bg-red-500 text-white">
            -{discount}%
          </Badge>
        )}
      </div>
      
      <CardContent className="p-3 md:p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
            <span className="text-xs md:text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-sm md:text-base text-foreground line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
          {t(`product_${id}_name`)}
        </h3>
        
        <div className="space-y-1">
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-xl md:text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-3 md:p-4 pt-0 flex gap-2">
        <Button 
          className="flex-1 gap-2 touch-manipulation text-sm md:text-base" 
          disabled={!inStock}
          variant={inStock ? "default" : "secondary"}
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            if (inStock) {
              addToCart({ id, name, price, image });
            }
          }}
        >
          <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
          {inStock ? t("addToCart") : t("notifyMe")}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/product/${id}`);
          }}
        >
          {t("viewDetails")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
