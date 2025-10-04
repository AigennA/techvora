import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Shipping = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{t("shipping")}</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          {t("internationalShippingDesc")}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("freeShipping")}</h3>
              <p className="text-muted-foreground">
                {t("freeShippingDesc")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("fastDelivery")}</h3>
              <p className="text-muted-foreground">
                {t("fastDeliveryDesc")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Package className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("orderTracking")}</h3>
              <p className="text-muted-foreground">
                {t("orderTrackingDesc")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("internationalShipping")}</h3>
              <p className="text-muted-foreground">
                {t("internationalShippingDesc")}
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
