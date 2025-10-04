import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Favorites = () => {
  const { favorites, toggleFavorite, loading } = useFavorites();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">Sign in to view favorites</h1>
            <p className="text-muted-foreground mb-8">
              Please sign in to access your saved products.
            </p>
            <Button onClick={() => navigate("/auth")}>Sign In</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">No favorites yet</h1>
            <p className="text-muted-foreground mb-8">
              Start adding products to your favorites by clicking the heart icon.
            </p>
            <Button onClick={() => navigate("/")}>Browse Products</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Favorites</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((favorite) => (
            <Card key={favorite.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={favorite.product_image}
                  alt={favorite.product_name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                  onClick={() =>
                    toggleFavorite({
                      id: favorite.product_id,
                      name: favorite.product_name,
                      price: Number(favorite.product_price),
                      image: favorite.product_image,
                    })
                  }
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {favorite.product_name}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  ${Number(favorite.product_price).toFixed(2)}
                </p>
                <Button
                  className="w-full gap-2"
                  onClick={() =>
                    addToCart({
                      id: favorite.product_id,
                      name: favorite.product_name,
                      price: Number(favorite.product_price),
                      image: favorite.product_image,
                    })
                  }
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
