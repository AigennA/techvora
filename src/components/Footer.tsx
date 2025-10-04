import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border mt-12 md:mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-primary">{t("techStore")}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t("aboutDescription")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/?category=accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("phoneAccessories")}
                </a>
              </li>
              <li>
                <a href="/?category=audio" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("audio")}
                </a>
              </li>
              <li>
                <a href="/?category=charging" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("charging")}
                </a>
              </li>
              <li>
                <a href="/?category=smart-devices" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("smartDevices")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("customerService")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors" title={t("freeShippingDesc")}>
                  {t("freeShipping")}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors" title={t("fastDeliveryDesc")}>
                  {t("fastDelivery")}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors" title={t("orderTrackingDesc")}>
                  {t("orderTracking")}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("returns")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("aboutUs")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("termsConditions")}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("cookiePolicy")}
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("paymentMethods")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 space-y-4">
          {/* Payment Methods */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground font-medium">We Accept</p>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              {/* Visa */}
              <div className="h-8 px-3 bg-white rounded border border-gray-200 flex items-center">
                <span className="text-[#1A1F71] font-bold text-sm">VISA</span>
              </div>
              
              {/* Mastercard */}
              <div className="h-8 px-3 bg-white rounded border border-gray-200 flex items-center">
                <span className="font-bold text-sm">
                  <span className="text-[#EB001B]">Master</span><span className="text-[#FF5F00]">card</span>
                </span>
              </div>
              
              {/* Klarna */}
              <div className="h-8 px-3 bg-[#FFB3C7] rounded flex items-center">
                <span className="text-black font-bold text-sm">klarna</span>
              </div>
              
              {/* Qliro */}
              <div className="h-8 px-3 bg-white rounded border border-gray-200 flex items-center">
                <span className="text-[#002E5D] font-bold text-sm">Qliro</span>
              </div>
              
              {/* Stripe */}
              <div className="h-8 px-3 bg-[#635BFF] rounded flex items-center">
                <span className="text-white font-bold text-sm">Stripe</span>
              </div>
              
              {/* Apple Pay */}
              <div className="h-8 px-3 bg-black rounded flex items-center">
                <span className="text-white font-semibold text-sm"> Pay</span>
              </div>
              
              {/* Google Pay */}
              <div className="h-8 px-3 bg-white rounded border border-gray-200 flex items-center">
                <span className="text-sm">G <span className="text-[#4285F4] font-semibold">Pay</span></span>
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="flex flex-col items-center gap-3 pb-4">
            <p className="text-xs text-muted-foreground font-medium">Shipping Partners</p>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              {/* PostNord */}
              <div className="h-8 px-3 bg-[#FFCC00] rounded flex items-center">
                <span className="text-[#004B87] font-bold text-sm">PostNord</span>
              </div>
              
              {/* Instabox */}
              <div className="h-8 px-3 bg-[#00D4AA] rounded flex items-center">
                <span className="text-white font-bold text-sm">Instabox</span>
              </div>
              
              {/* DHL */}
              <div className="h-8 px-3 bg-[#FFCC00] rounded flex items-center">
                <span className="text-[#D40511] font-bold text-sm">DHL</span>
              </div>
              
              {/* Bring */}
              <div className="h-8 px-3 bg-[#00A5DF] rounded flex items-center">
                <span className="text-white font-bold text-sm">Bring</span>
              </div>
              
              {/* EarlyBird */}
              <div className="h-8 px-3 bg-white rounded border border-gray-200 flex items-center">
                <span className="text-[#FF6B35] font-bold text-sm">EarlyBird</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {t("techStore")}. {t("allRightsReserved")}</p>
            <p className="text-xs mt-2 opacity-70">Hosted on Lovable.app</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
