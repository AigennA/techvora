import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Orders = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Package className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-muted-foreground" />
            <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Sign in to view orders</h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Please sign in to view your order history.
            </p>
            <Button onClick={() => navigate("/auth")} className="w-full sm:w-auto">Sign In</Button>
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
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">My Orders</h1>
        
        <div className="space-y-3 md:space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg md:text-xl">No orders yet</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 md:py-8">
                <Package className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-muted-foreground" />
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  You haven't placed any orders yet.
                </p>
                <Button onClick={() => navigate("/")} className="w-full sm:w-auto">Start Shopping</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
