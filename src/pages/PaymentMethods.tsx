import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet, Building2, ShieldCheck, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PaymentMethods = () => {
  const { t } = useLanguage();

  const paymentMethods = [
    {
      icon: CreditCard,
      title: t("creditDebitCards"),
      description: t("creditDebitCardsDesc"),
      accepted: "Visa, Mastercard, American Express, Discover",
      logos: [
        { name: "Visa", svg: "M0 13.1h6.4l4-10.2H4l-4 10.2zM24 13.1l3.6-10.2h-5.3L18.7 13h5.3zM13.4 2.9L9.7 13.1h5.4l3.7-10.2h-5.4zm16.8 0l-2 5.3 1.5 4.9h5.1l-4.6-10.2z", color: "#1434CB" },
        { name: "Mastercard", svg: "M23 12c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7 7-3.1 7-7zm-14 0c0-3.9-3.1-7-7-7S-5 8.1-5 12s3.1 7 7 7 7-3.1 7-7z", color: "#EB001B" }
      ]
    },
    {
      icon: Smartphone,
      title: t("digitalWallets"),
      description: t("digitalWalletsDesc"),
      accepted: "Apple Pay, Google Pay, Samsung Pay",
      logos: []
    },
    {
      icon: Wallet,
      title: t("paypal"),
      description: t("paypalDesc"),
      accepted: "PayPal, PayPal Credit",
      logos: []
    },
    {
      icon: Landmark,
      title: t("bankTransfer"),
      description: t("bankTransferDesc"),
      accepted: t("allMajorBanks"),
      logos: []
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
                        <CardDescription className="text-sm text-muted-foreground flex flex-wrap gap-2 items-center">
                          {method.accepted}
                          {index === 0 && (
                            <div className="flex gap-2 mt-2">
                              <svg className="h-6" viewBox="0 0 48 32" fill="none">
                                <rect width="48" height="32" rx="4" fill="#1434CB"/>
                                <path d="M15 9h6l-3 14h-6l3-14z" fill="white"/>
                                <path d="M25 9l-2.5 9.5 2.5 4.5h6l2-14h-8z" fill="white"/>
                                <path d="M35 9l-1 6 1 8h6l2-14h-8z" fill="white"/>
                              </svg>
                              <svg className="h-6" viewBox="0 0 48 32" fill="none">
                                <rect width="48" height="32" rx="4" fill="white"/>
                                <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                                <circle cx="30" cy="16" r="10" fill="#FF5F00" opacity="0.8"/>
                              </svg>
                              <svg className="h-6" viewBox="0 0 48 32" fill="none">
                                <rect width="48" height="32" rx="4" fill="#016FD0"/>
                                <path d="M20 16c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" fill="white"/>
                              </svg>
                            </div>
                          )}
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
