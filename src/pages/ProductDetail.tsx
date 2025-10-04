import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Star, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, items } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLanguage();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>Go Back</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const favorite = isFavorite(product.id);
  const cartItem = items.find((item) => item.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-secondary relative">
              <img
                src={product.image}
                alt={t(`product_${product.id}_name`)}
                className="w-full h-full object-cover"
              />
              {!product.inStock && (
                <Badge className="absolute top-4 right-4 bg-destructive">
                  {t("outOfStock")}
                </Badge>
              )}
              {product.inStock && (
                <Badge className="absolute top-4 right-4 bg-accent">
                  {t("stockAvailable")}
                </Badge>
              )}
            </div>
          </Card>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t(`product_${product.id}_name`)}
                  </h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite({ id: product.id, name: product.name, price: product.price, image: product.image })}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      favorite ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-lg font-semibold">{product.rating}</span>
                </div>
              </div>

              <p className="text-4xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Stock Info */}
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Stock:
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {product.stock} {t("itemsLeft")}
                  </span>
                </div>
                {quantityInCart > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Cart:
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {quantityInCart} {t("inYourCart")}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Add to Cart Button */}
            <Button
              className="w-full gap-2 h-12 text-lg"
              disabled={!product.inStock}
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
            >
              <ShoppingCart className="w-5 h-5" />
              {product.inStock ? t("addToCart") : t("notifyMe")}
            </Button>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                {t("description")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(`product_${product.id}_desc`)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
