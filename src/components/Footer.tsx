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
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("phoneAccessories")}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("audio")}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("charging")}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("smartDevices")}
                </Link>
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
            <div className="flex flex-wrap justify-center gap-3">
              <svg className="h-8" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="#1434CB"/>
                <path d="M15 9h6l-3 14h-6l3-14z" fill="white"/>
                <path d="M25 9l-2.5 9.5 2.5 4.5h6l2-14h-8z" fill="white"/>
                <path d="M35 9l-1 6 1 8h6l2-14h-8z" fill="white"/>
              </svg>
              <svg className="h-8" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="white" stroke="#ccc"/>
                <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                <circle cx="30" cy="16" r="10" fill="#FF5F00" opacity="0.8"/>
              </svg>
              <svg className="h-8" viewBox="0 0 48 32" fill="none">
                <rect width="48" height="32" rx="4" fill="#016FD0"/>
                <path d="M20 16c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" fill="white"/>
              </svg>
              <div className="h-8 px-3 bg-white rounded flex items-center justify-center border border-gray-300">
                <span className="text-[#00457C] font-bold text-xs">PayPal</span>
              </div>
              <div className="h-8 px-3 bg-black rounded flex items-center justify-center">
                <span className="text-white font-semibold text-xs">Apple Pay</span>
              </div>
              <div className="h-8 px-3 bg-white rounded flex items-center justify-center border border-gray-300">
                <span className="text-xs font-medium">Google <span className="text-blue-600">Pay</span></span>
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="flex flex-col items-center gap-3 pb-4">
            <p className="text-xs text-muted-foreground font-medium">Shipping Partners</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="h-6 px-3 flex items-center justify-center bg-white rounded">
                <span className="text-[#FF6600] font-bold text-sm">FedEx</span>
              </div>
              <div className="h-6 px-3 flex items-center justify-center bg-[#FFB500] rounded">
                <span className="text-[#351C15] font-bold text-sm">UPS</span>
              </div>
              <div className="h-6 px-3 flex items-center justify-center bg-white rounded border border-gray-300">
                <span className="text-[#004B87] font-bold text-sm">USPS</span>
              </div>
              <div className="h-6 px-3 flex items-center justify-center bg-white rounded border border-gray-300">
                <span className="text-red-600 font-bold text-sm">DHL</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {t("techStore")}. {t("allRightsReserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
