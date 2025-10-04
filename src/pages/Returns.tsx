import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Shield, Clock } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Returns & Refunds</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          We want you to be completely satisfied with your purchase. If you're not happy, we're here to help.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
              <p className="text-muted-foreground">
                Return items within 30 days of delivery for a full refund.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <RefreshCw className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Free Returns</h3>
              <p className="text-muted-foreground">
                Return shipping is free for defective or incorrect items.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Money-Back Guarantee</h3>
              <p className="text-muted-foreground">
                Full refund if items don't meet our quality standards.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-slate max-w-3xl">
          <h2>Return Policy</h2>
          <p>
            We offer a 30-day return policy on most items. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </p>

          <h2>How to Return an Item</h2>
          <ol>
            <li>Contact our customer service team at support@techstore.com</li>
            <li>Provide your order number and reason for return</li>
            <li>We'll send you a return shipping label</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Ship the item back to us using the provided label</li>
          </ol>

          <h2>Refund Process</h2>
          <p>
            Once we receive your return, we'll inspect the item and notify you of the approval or rejection of your refund. If approved, your refund will be processed within 5-7 business days to your original payment method.
          </p>

          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Opened software or digital products</li>
            <li>Items marked as final sale</li>
            <li>Personalized or customized items</li>
            <li>Items damaged due to misuse or neglect</li>
          </ul>

          <h2>Exchanges</h2>
          <p>
            If you need to exchange an item for a different size, color, or model, please contact our customer service team. We'll be happy to help arrange an exchange.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our return policy, please contact us at support@techstore.com or call +1 (555) 123-4567.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
