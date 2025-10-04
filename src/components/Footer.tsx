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
            <div className="flex flex-wrap justify-center gap-3">
              {/* Visa */}
              <svg className="h-8" viewBox="0 0 64 32" fill="none">
                <rect width="64" height="32" rx="4" fill="#1A1F71"/>
                <path d="M26.2 22h-3.6l2.3-14h3.6l-2.3 14zm13.2-13.7c-.7-.3-1.8-.6-3.2-.6-3.5 0-6 1.9-6 4.6 0 2 1.8 3.1 3.2 3.7 1.4.6 1.9 1 1.9 1.6 0 .8-1 1.2-1.9 1.2-1.3 0-2-.2-3.1-.7l-.4-.2-.5 2.8c.8.4 2.4.7 4 .7 3.7 0 6.1-1.8 6.1-4.7 0-1.6-1-2.8-3.1-3.8-1.3-.6-2.1-1-2.1-1.6 0-.5.6-1.1 1.9-1.1 1.1 0 1.9.2 2.5.5l.3.1.4-2.5zm9.3-1.3h-2.8c-.9 0-1.5.2-1.9 1.1l-5.4 12.9h3.7l.7-2h4.6c.1.5.4 2 .4 2h3.3l-2.6-14zm-4.5 9c.3-.8 1.4-3.7 1.4-3.7l.8 3.7h-2.2zM23 8l-3.5 9.6-.4-1.9c-.7-2.2-2.8-4.6-5.1-5.8l3.2 11.9 3.7-.1 5.5-13.7h-3.4z" fill="white"/>
                <path d="M14.4 8H9.1l-.1.3c4.4 1.1 7.3 3.8 8.5 7l-1.2-6.2c-.2-.9-.8-1.1-1.7-1.1z" fill="#F7B600"/>
              </svg>
              {/* Mastercard */}
              <svg className="h-8" viewBox="0 0 64 32" fill="none">
                <rect width="64" height="32" rx="4" fill="white" stroke="#E5E5E5"/>
                <circle cx="24" cy="16" r="9" fill="#EB001B"/>
                <circle cx="40" cy="16" r="9" fill="#F79E1B"/>
                <path d="M32 9.5c-1.8 1.5-3 3.8-3 6.5s1.2 5 3 6.5c1.8-1.5 3-3.8 3-6.5s-1.2-5-3-6.5z" fill="#FF5F00"/>
              </svg>
              {/* Klarna */}
              <div className="h-8 px-3 bg-[#FFB3C7] rounded flex items-center justify-center">
                <span className="text-[#000000] font-bold text-xs">Klarna</span>
              </div>
              {/* Qliro */}
              <div className="h-8 px-3 bg-white rounded flex items-center justify-center border border-gray-300">
                <span className="text-[#002E5D] font-bold text-xs">Qliro</span>
              </div>
              {/* Stripe */}
              <div className="h-8 px-3 bg-[#635BFF] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">Stripe</span>
              </div>
              {/* Apple Pay */}
              <svg className="h-8" viewBox="0 0 64 32" fill="none">
                <rect width="64" height="32" rx="4" fill="black"/>
                <path d="M14.5 11.5c-.6.7-1.5 1.2-2.4 1.1-.1-.9.3-1.9.8-2.5.6-.7 1.6-1.2 2.4-1.3.1 1-.2 1.9-.8 2.7zm.8 1.3c-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.6.8-3.3 2-.1.2-.2.5-.3.8v.1c-.4 1.3-.2 3.6.9 5.6.6 1 1.3 2.1 2.3 2.1.9 0 1.2-.6 2.4-.6 1.2 0 1.4.6 2.4.6 1 0 1.6-1 2.2-2 .4-.6.7-1.3.9-2 0-.1.1-.1.1-.2-1.4-.5-2.3-1.9-2.3-3.4 0-1.5.9-2.8 2.3-3.3-.9-1.2-2.3-1.8-3.8-1.7h-.2zm9.9-.3c2.3 0 3.9 1.6 3.9 3.8 0 2.3-1.7 3.9-4 3.9h-2.4v3.9h-1.9v-11.6h4.4zm-2.5 6.1h2c1.6 0 2.5-.9 2.5-2.3 0-1.4-.9-2.2-2.5-2.2h-2v4.5zm8.5 5.8c-1.3 0-2.1-.5-2.1-1.4 0-.8.6-1.3 1.9-1.4l2.2-.1v-.6c0-.8-.5-1.2-1.5-1.2-.8 0-1.4.4-1.5 1h-1.7c.1-1.4 1.3-2.5 3.3-2.5 1.9 0 3.2 1 3.2 2.6v5.4h-1.7v-1.3h-.1c-.4.9-1.4 1.5-2.5 1.5h.5zm.6-1.4c1 0 1.7-.6 1.7-1.5v-.6l-2 .1c-.8.1-1.2.4-1.2.9 0 .6.5 1 1.1 1h.4zm5.8 4.4v-1.5c.1 0 .3.1.5.1.8 0 1.2-.3 1.5-1.2l.2-.6-3.2-8.8h2l2.2 6.9h.1l2.2-6.9h2l-3.4 9.3c-.7 1.9-1.5 2.6-3.2 2.6-.2 0-.6 0-.9-.1v.2z" fill="white"/>
              </svg>
              {/* Google Pay */}
              <svg className="h-8" viewBox="0 0 64 32" fill="none">
                <rect width="64" height="32" rx="4" fill="white" stroke="#E5E5E5"/>
                <path d="M29.5 16.3v4.4h-1.4V9.5h3.7c.9 0 1.7.3 2.3.9.6.6.9 1.4.9 2.3 0 .9-.3 1.7-.9 2.3-.6.6-1.4.9-2.3.9h-2.3v.4zm0-5.4v4h2.3c.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.4 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6h-2.3v.1zm8.9 3.5c1 0 1.7.3 2.3.8.6.5.9 1.2.9 2.1v3.4h-1.3v-.8h-.1c-.5.6-1.2 1-2 1-0.7 0-1.3-.2-1.8-.6-.5-.4-.7-1-.7-1.6 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2-.6.7 0 1.2.1 1.7.3v-.2c0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.2-.5-.7 0-1.2.3-1.5.9l-1.2-.5c.5-0.9 1.4-1.4 2.6-1.4v-.6zm-1.5 5.1c0 .3.1.6.4.8.3.2.6.3 1 .3.5 0 1-.2 1.4-.5.4-.4.6-.8.6-1.3-.4-.3-.9-.4-1.6-.4-.5 0-.9.1-1.2.3-.3.2-.5.5-.5.8h-.1zm8.4-8.1v9.2l3.8-4.9h1.6l-2.9 3.7 3.1 4.3h-1.7l-2.4-3.4-1.5 1.9v1.5h-1.4v-12.3h1.4z" fill="#5F6368"/>
                <path d="M20 16c0 .6-.1 1.2-.2 1.7h-5.5c.1.7.4 1.2.9 1.6.5.4 1 .6 1.7.6.8 0 1.4-.3 1.9-.8l1.1 1.1c-.7.8-1.7 1.3-3 1.3-1.2 0-2.2-.4-3-1.2-.8-.8-1.2-1.8-1.2-3.1 0-1.2.4-2.3 1.2-3.1.8-.8 1.8-1.2 2.9-1.2 1.2 0 2.1.4 2.9 1.2.7.7 1.1 1.7 1.1 2.9h.2zm-5.5-.3h4.2c-.1-.6-.4-1-.7-1.4-.4-.4-.9-.5-1.4-.5-.5 0-1 .2-1.4.5-.3.4-.6.8-.7 1.4z" fill="#4285F4"/>
                <path d="M9.9 13.3c1.2 0 2.2.4 3 1.2l-1.1 1.1c-.5-.6-1.2-.9-2-.9-.8 0-1.5.3-2 .8-.6.6-.9 1.2-.9 2s.3 1.5.9 2c.6.6 1.2.8 2 .8.8 0 1.5-.3 2.1-.9.4-.4.6-.9.7-1.5h-2.8v-1.4h4.2c0 .2.1.4.1.6 0 1.2-.4 2.2-1.1 3-.7.8-1.7 1.2-3 1.2-1.2 0-2.2-.4-3.1-1.2-.8-.8-1.3-1.8-1.3-3.1 0-1.2.4-2.3 1.3-3.1.8-.6 1.8-1 3-1v.4z" fill="#EA4335"/>
              </svg>
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="flex flex-col items-center gap-3 pb-4">
            <p className="text-xs text-muted-foreground font-medium">Shipping Partners</p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Postnord */}
              <svg className="h-7" viewBox="0 0 120 32" fill="none">
                <rect width="120" height="32" rx="4" fill="#FFCC00"/>
                <path d="M12 10h4.5c2.5 0 4 1.5 4 3.5s-1.5 3.5-4 3.5H14v5h-2V10zm2 5.5h2.3c1.4 0 2.2-.7 2.2-1.8s-.8-1.8-2.2-1.8H14v3.6zm8.5-1.8c0-2.3 1.8-4 4.2-4s4.2 1.7 4.2 4-1.8 4-4.2 4-4.2-1.7-4.2-4zm6.5 0c0-1.4-.9-2.3-2.3-2.3s-2.3.9-2.3 2.3.9 2.3 2.3 2.3 2.3-.9 2.3-2.3zm4.5 1.9l1.4-1.1c.4.7 1.1 1.1 2 1.1.7 0 1.1-.3 1.1-.7 0-1.1-4.3-.3-4.3-3.2 0-1.3 1.1-2.2 2.9-2.2 1.4 0 2.5.6 3.1 1.6l-1.3 1c-.4-.6-1-.9-1.8-.9-.6 0-1 .3-1 .7 0 1.1 4.3.3 4.3 3.2 0 1.3-1.1 2.2-3 2.2-1.6 0-2.8-.7-3.4-1.7zm9-5.9h2v1.4h.1c.4-.9 1.2-1.5 2.3-1.5.2 0 .4 0 .6.1v1.9c-.2-.1-.5-.1-.8-.1-1.2 0-2.2.9-2.2 2.2v4h-2V9.7zm7 7.5V9.7h2v1.1h.1c.5-.8 1.4-1.3 2.5-1.3 1.9 0 3.1 1.3 3.1 3.1v5.6h-2v-5.1c0-1.1-.6-1.7-1.6-1.7-1 0-1.8.7-1.8 1.8v5h-2.3zm9.5-3.8c0-2.3 1.8-4 4.2-4s4.2 1.7 4.2 4-1.8 4-4.2 4-4.2-1.7-4.2-4zm6.5 0c0-1.4-.9-2.3-2.3-2.3s-2.3.9-2.3 2.3.9 2.3 2.3 2.3 2.3-.9 2.3-2.3zm4.5-3.7h2v1.3h.1c.4-.9 1.2-1.5 2.3-1.5 1.1 0 1.9.5 2.3 1.5h.1c.5-.9 1.4-1.5 2.5-1.5 1.7 0 2.8 1.1 2.8 2.9v5.8h-2v-5.4c0-1-.5-1.5-1.3-1.5-.8 0-1.5.6-1.5 1.6v5.3h-2v-5.4c0-1-.5-1.5-1.3-1.5-.8 0-1.5.6-1.5 1.6v5.3h-2V9.7z" fill="#004B87"/>
              </svg>
              {/* Instabox */}
              <div className="h-7 px-3 flex items-center justify-center bg-[#00D4AA] rounded">
                <span className="text-white font-bold text-sm">Instabox</span>
              </div>
              {/* DHL */}
              <svg className="h-7" viewBox="0 0 72 32" fill="none">
                <rect width="72" height="32" rx="4" fill="#FFCC00"/>
                <path d="M8 10h6.5c3.5 0 6 2.3 6 6s-2.5 6-6 6H8V10zm2.5 9.5h3.8c2.2 0 3.7-1.4 3.7-3.5s-1.5-3.5-3.7-3.5h-3.8v7zm13-9.5h2.5v4.8h5.8V10h2.5v12h-2.5v-5h-5.8v5h-2.5V10zm14 0h2.5v9.5h6V22h-8.5V10z" fill="#D40511"/>
              </svg>
              {/* Bring */}
              <div className="h-7 px-3 flex items-center justify-center bg-[#00A5DF] rounded">
                <span className="text-white font-bold text-sm">Bring</span>
              </div>
              {/* EarlyBird */}
              <div className="h-7 px-3 flex items-center justify-center bg-white rounded border border-gray-300">
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
