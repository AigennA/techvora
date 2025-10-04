import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-muted-foreground" />
            <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Your cart is empty</h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button onClick={() => navigate("/")} className="w-full sm:w-auto">Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-3 md:p-4">
                  <div className="flex gap-3 md:gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2 truncate">{item.name}</h3>
                      <p className="text-primary font-bold text-base md:text-lg">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2 md:mt-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 md:h-10 md:w-10 touch-manipulation"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <span className="w-10 md:w-12 text-center text-sm md:text-base">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 md:h-10 md:w-10 touch-manipulation"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-auto text-destructive h-8 w-8 md:h-10 md:w-10 touch-manipulation"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Order Summary</h2>
                <div className="space-y-2 mb-3 md:mb-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-base md:text-lg">
                      <span>Total</span>
                      <span className="text-primary">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full touch-manipulation" size="lg" onClick={() => navigate("/checkout")}>
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full mt-2 touch-manipulation"
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
