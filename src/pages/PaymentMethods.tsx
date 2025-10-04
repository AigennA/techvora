import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet, Building2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PaymentMethods = () => {
  const { t } = useLanguage();

  const paymentMethods = [
    {
      icon: CreditCard,
      title: t("creditDebitCards"),
      description: t("creditDebitCardsDesc"),
      accepted: "Visa, Mastercard, American Express, Discover"
    },
    {
      icon: Smartphone,
      title: t("digitalWallets"),
      description: t("digitalWalletsDesc"),
      accepted: "Apple Pay, Google Pay, Samsung Pay"
    },
    {
      icon: Wallet,
      title: t("paypal"),
      description: t("paypalDesc"),
      accepted: "PayPal, PayPal Credit"
    },
    {
      icon: Building2,
      title: t("bankTransfer"),
      description: t("bankTransferDesc"),
      accepted: t("allMajorBanks")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t("paymentMethods")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("paymentMethodsIntro")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {method.accepted}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">{t("securePayments")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t("securePaymentsDesc")}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t("sslEncryption")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t("pciCompliance")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t("fraudProtection")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMethods;
