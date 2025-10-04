import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./AuthContext";
import { useToast } from "@/hooks/use-toast";

interface Favorite {
  id: string;
  product_id: string;
  product_name: string;
  product_price: number;
  product_image: string;
}

interface FavoritesContextType {
  favorites: Favorite[];
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => Promise<void>;
  loading: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      loadFavorites();
    } else {
      setFavorites([]);
      setLoading(false);
    }
  }, [user]);

  const loadFavorites = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from("favorites")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error loading favorites:", error);
    } else {
      setFavorites(data || []);
    }
    setLoading(false);
  };

  const isFavorite = (productId: string): boolean => {
    return favorites.some((fav) => fav.product_id === productId);
  };

  const toggleFavorite = async (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save favorites",
        variant: "destructive",
      });
      return;
    }

    const isCurrentlyFavorite = isFavorite(product.id);

    if (isCurrentlyFavorite) {
      // Remove from favorites
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", product.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to remove from favorites",
          variant: "destructive",
        });
      } else {
        setFavorites(favorites.filter((fav) => fav.product_id !== product.id));
        toast({
          title: "Removed from favorites",
          description: `${product.name} has been removed`,
        });
      }
    } else {
      // Add to favorites
      const { error } = await supabase.from("favorites").insert({
        user_id: user.id,
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_image: product.image,
      });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to add to favorites",
          variant: "destructive",
        });
      } else {
        await loadFavorites();
        toast({
          title: "Added to favorites",
          description: `${product.name} has been saved`,
        });
      }
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        loading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
