import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Clock, Globe } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          We offer fast and reliable shipping worldwide. Here's everything you need to know about our shipping policy.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Enjoy free standard shipping on all orders over $50 within the United States.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Standard delivery takes 3-5 business days. Express shipping available for faster delivery.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Package className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Order Tracking</h3>
              <p className="text-muted-foreground">
                Track your order every step of the way with our real-time tracking system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
              <p className="text-muted-foreground">
                We ship to over 100 countries worldwide. Customs fees may apply.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-slate max-w-3xl">
          <h2>Shipping Methods</h2>
          <ul>
            <li><strong>Standard Shipping:</strong> 3-5 business days (Free over $50)</li>
            <li><strong>Express Shipping:</strong> 1-2 business days ($15.99)</li>
            <li><strong>Overnight Shipping:</strong> Next business day ($29.99)</li>
            <li><strong>International Shipping:</strong> 7-14 business days (Varies by location)</li>
          </ul>

          <h2>Processing Time</h2>
          <p>
            Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships.
          </p>

          <h2>International Orders</h2>
          <p>
            International customers are responsible for all customs duties, taxes, and fees charged by their country. These charges are not included in our shipping costs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
