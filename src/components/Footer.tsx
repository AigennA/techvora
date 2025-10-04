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
              <div className="h-10 px-4 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="h-6" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 14h-2.7l1.7-10.5h2.7L18.5 14zm9.9-10.3c-.5-.2-1.3-.5-2.4-.5-2.6 0-4.5 1.4-4.5 3.5 0 1.5 1.3 2.3 2.4 2.8 1 .5 1.4.8 1.4 1.2 0 .6-.7.9-1.4.9-1 0-1.5-.1-2.3-.5l-.3-.2-.4 2.1c.6.3 1.8.5 3 .5 2.8 0 4.6-1.4 4.6-3.5 0-1.2-.7-2.1-2.3-2.8-1-.5-1.6-.8-1.6-1.2 0-.4.5-.8 1.4-.8.8 0 1.4.2 1.9.4l.2.1.3-1.9zm7-1.7h-2.1c-.7 0-1.1.2-1.4.8l-4 9.7h2.8l.6-1.5h3.5c.1.4.3 1.5.3 1.5h2.5l-2-10.5zm-3.4 6.8c.2-.6 1-2.8 1-2.8l.6 2.8h-1.6zM16.2 3.5l-2.6 7.2-.3-1.4c-.5-1.7-2.1-3.5-3.8-4.4l2.4 8.9 2.8-.1 4.1-10.2h-2.6z" fill="#1A1F71"/>
                  <path d="M9.3 3.5H5.8l-.1.2c3.3.8 5.5 2.9 6.4 5.3l-.9-4.7c-.2-.7-.6-.8-1.3-.8z" fill="#F7B600"/>
                </svg>
              </div>
              
              {/* Mastercard */}
              <div className="h-10 px-4 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="h-6" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="16" r="10" fill="#EB001B"/>
                  <circle cx="34" cy="16" r="10" fill="#F79E1B"/>
                  <path d="M24 8.5c-2 1.7-3.3 4.2-3.3 7s1.3 5.3 3.3 7c2-1.7 3.3-4.2 3.3-7s-1.3-5.3-3.3-7z" fill="#FF5F00"/>
                </svg>
              </div>
              
              {/* Klarna */}
              <div className="h-10 px-4 bg-[#FFB3C7] rounded flex items-center justify-center">
                <span className="font-bold text-sm text-black">klarna</span>
              </div>
              
              {/* Qliro */}
              <div className="h-10 px-4 bg-white rounded flex items-center justify-center border border-gray-200">
                <span className="font-bold text-sm text-[#002E5D]">Qliro</span>
              </div>
              
              {/* Stripe */}
              <div className="h-10 px-4 bg-[#635BFF] rounded flex items-center justify-center">
                <svg className="h-5" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M26 0c-3.9 0-6.3 2-6.3 5.3 0 2.6 1.8 4.2 4.8 5l1.5.4c1.8.5 2.7 1.1 2.7 2 0 1.2-1.2 1.8-3 1.8-2.4 0-4.4-.8-5.7-1.8l-1.6 3.8c1.5 1.1 3.9 1.9 6.8 1.9 4.3 0 7-2 7-5.5 0-2.7-1.9-4.3-5-5.1l-1.4-.4c-1.6-.4-2.5-1-2.5-1.9 0-1 1-1.7 2.6-1.7 2 0 3.8.7 4.9 1.5l1.5-3.8C30.4.7 28.3 0 26 0zm32.3.4h-5.2l-6.3 17.9h4.8l1-3h6.2l.6 3h4.2L58.3.4zm-4.5 11.5l1.8-5.5.8 5.5h-2.6zM43.8.4h-4.5v17.9h4.5V.4zm-7.3 4.2c-1.2-1-3.2-1.7-5.4-1.7-4.5 0-7.7 2.7-7.7 6.7 0 4.4 3.4 6.8 8 6.8 1.9 0 3.6-.4 5-1.1V.4h-4.5v4.2h4.6zM32 13.5c-.7.3-1.6.5-2.7.5-2.3 0-4-1.2-4-3.5 0-2.1 1.6-3.4 4.1-3.4 1.1 0 2 .2 2.7.5v5.9z" fill="white"/>
                </svg>
              </div>
              
              {/* Apple Pay */}
              <div className="h-10 px-4 bg-black rounded flex items-center justify-center">
                <svg className="h-6" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 3.5c-.4.5-1.1.9-1.8.8-.1-.7.2-1.4.6-1.9.4-.5 1.2-.9 1.8-1 .1.8-.1 1.5-.6 2.1zm.6 1c-1-.1-1.8.5-2.3.5-.5 0-1.2-.5-2-.5-1 0-2 .6-2.5 1.5-.1.2-.2.4-.2.6v.1c-.3 1-.2 2.7.7 4.2.5.8 1 1.6 1.7 1.6.7 0 .9-.5 1.8-.5.9 0 1.1.5 1.8.5.8 0 1.2-.8 1.7-1.5.3-.5.5-1 .7-1.5 0-.1.1-.1.1-.2-1-.4-1.7-1.4-1.7-2.6 0-1.1.7-2.1 1.7-2.5-.7-.9-1.7-1.3-2.9-1.3h-.2z" fill="white"/>
                  <path d="M18 5.5c1.7 0 2.9 1.2 2.9 2.9 0 1.7-1.3 2.9-3 2.9h-1.8v2.9h-1.4V5.5H18zm-1.9 4.6h1.5c1.2 0 1.9-.7 1.9-1.7 0-1-.7-1.7-1.9-1.7h-1.5v3.4zm6.4 4.4c-1 0-1.6-.4-1.6-1 0-.6.5-1 1.4-1l1.7-.1v-.5c0-.6-.4-.9-1.1-.9-.6 0-1.1.3-1.1.8h-1.3c.1-1 1-1.9 2.5-1.9 1.4 0 2.4.8 2.4 2v4.1h-1.3v-1h-.1c-.3.7-1 1.1-1.9 1.1h.4zm.5-1c.8 0 1.3-.5 1.3-1.1v-.5l-1.5.1c-.6.1-.9.3-.9.7 0 .5.4.8.8.8h.3zm4.4 3.3v-1.1c.1 0 .2.1.4.1.6 0 .9-.2 1.1-.9l.2-.5-2.4-6.6h1.5l1.7 5.2h.1l1.7-5.2h1.5l-2.6 7c-.5 1.4-1.1 2-2.4 2-.2 0-.5 0-.7-.1v.1z" fill="white"/>
                </svg>
              </div>
              
              {/* Google Pay */}
              <div className="h-10 px-4 bg-white rounded flex items-center justify-center border border-gray-200">
                <svg className="h-6" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8 10.2v3.3h-1.1V4h2.8c.7 0 1.3.2 1.7.7.5.5.7 1 .7 1.7 0 .7-.2 1.3-.7 1.7-.5.5-1 .7-1.7.7h-1.7v.4zm0-4v3h1.7c.5 0 .8-.2 1.1-.5.3-.3.5-.7.5-1 0-.5-.2-.8-.5-1.1-.3-.3-.7-.5-1.1-.5h-1.7v.1zm6.7 2.6c.7 0 1.3.2 1.7.6.5.4.7.9.7 1.6v2.6h-1v-.6h-.1c-.4.5-.9.8-1.5.8-.5 0-1-.2-1.4-.5-.4-.3-.5-.7-.5-1.2 0-.5.2-.9.6-1.2.4-.3.9-.5 1.5-.5.5 0 .9.1 1.3.2v-.2c0-.3-.2-.6-.4-.8-.2-.2-.5-.4-.9-.4-.5 0-.9.2-1.1.7l-.9-.4c.4-.7 1.1-1.1 2-1.1v-.4zm-1.1 3.8c0 .2.1.5.3.6.2.2.5.2.8.2.4 0 .8-.2 1-.4.3-.3.5-.6.5-1-.3-.2-.7-.3-1.2-.3-.4 0-.7.1-.9.2-.2.2-.4.4-.4.6h-.1zm6.3-6.1v6.9l2.9-3.7h1.2l-2.2 2.8 2.3 3.2h-1.3l-1.8-2.6-1.1 1.4v1.1h-1.1V6.5h1.1z" fill="#5F6368"/>
                  <path d="M14 10c0 .5-.1.9-.2 1.3h-4.1c.1.5.3.9.7 1.2.4.3.8.5 1.3.5.6 0 1-.2 1.4-.6l.8.8c-.5.6-1.3 1-2.3 1-.9 0-1.7-.3-2.3-.9-.6-.6-.9-1.4-.9-2.3 0-.9.3-1.7.9-2.3.6-.6 1.4-.9 2.2-.9.9 0 1.6.3 2.2.9.5.5.8 1.3.8 2.2h.2zm-4.1-.2h3.1c-.1-.5-.3-.8-.5-1-.3-.3-.7-.4-1-.4-.4 0-.8.1-1 .4-.3.3-.5.6-.6 1z" fill="#4285F4"/>
                  <path d="M5.9 8c.9 0 1.7.3 2.3.9l-.8.8c-.4-.5-.9-.7-1.5-.7-.6 0-1.1.2-1.5.6-.4.4-.7.9-.7 1.5s.2 1.1.7 1.5c.4.4.9.6 1.5.6.6 0 1.1-.2 1.6-.7.3-.3.5-.7.5-1.1h-2.1v-1.1h3.1c0 .2.1.3.1.5 0 .9-.3 1.7-.8 2.3-.5.6-1.3.9-2.3.9-.9 0-1.7-.3-2.3-.9-.6-.6-1-1.4-1-2.3 0-.9.3-1.7 1-2.3.6-.5 1.4-.8 2.3-.8v.3z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="flex flex-col items-center gap-3 pb-4">
            <p className="text-xs text-muted-foreground font-medium">Shipping Partners</p>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              {/* Postnord */}
              <div className="h-10 px-4 bg-[#FFCC00] rounded flex items-center justify-center">
                <svg className="h-6" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2h3c1.7 0 2.7 1 2.7 2.3s-1 2.3-2.7 2.3H5.3v3.3H4V2zm1.3 3.6h1.5c.9 0 1.5-.5 1.5-1.2s-.6-1.2-1.5-1.2H5.3v2.4zm5.7-1.2c0-1.5 1.2-2.7 2.8-2.7s2.8 1.2 2.8 2.7-1.2 2.7-2.8 2.7-2.8-1.2-2.8-2.7zm4.3 0c0-.9-.6-1.5-1.5-1.5s-1.5.6-1.5 1.5.6 1.5 1.5 1.5 1.5-.6 1.5-1.5zm3 1.3l.9-.7c.3.5.7.7 1.3.7.5 0 .7-.2.7-.5 0-.7-2.9-.2-2.9-2.1 0-.9.7-1.5 1.9-1.5.9 0 1.7.4 2.1 1.1l-.9.7c-.3-.4-.7-.6-1.2-.6-.4 0-.7.2-.7.5 0 .7 2.9.2 2.9 2.1 0 .9-.7 1.5-2 1.5-1.1 0-1.9-.5-2.3-1.2zm6-4h1.3v.9h.1c.3-.6.8-1 1.5-1 .1 0 .3 0 .4.1v1.3c-.1-.1-.3-.1-.5-.1-.8 0-1.5.6-1.5 1.5v2.7h-1.3V2.7zm4.7 5V2.7h1.3v.7h.1c.3-.5.9-.9 1.7-.9 1.3 0 2.1.9 2.1 2.1v3.7h-1.3v-3.4c0-.7-.4-1.1-1.1-1.1-.7 0-1.2.5-1.2 1.2v3.3h-1.6zm6.3-2.5c0-1.5 1.2-2.7 2.8-2.7s2.8 1.2 2.8 2.7-1.2 2.7-2.8 2.7-2.8-1.2-2.8-2.7zm4.3 0c0-.9-.6-1.5-1.5-1.5s-1.5.6-1.5 1.5.6 1.5 1.5 1.5 1.5-.6 1.5-1.5zm3-2.5h1.3v.9h.1c.3-.6.8-1 1.5-1 .7 0 1.3.3 1.5 1h.1c.3-.6.9-1 1.7-1 1.1 0 1.9.7 1.9 1.9v3.9h-1.3v-3.6c0-.7-.3-1-1-1-.5 0-1 .4-1 1.1v3.5h-1.3v-3.6c0-.7-.3-1-1-1-.5 0-1 .4-1 1.1v3.5h-1.3V2.7z" fill="#004B87"/>
                </svg>
              </div>
              
              {/* Instabox */}
              <div className="h-10 px-4 bg-[#00D4AA] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Instabox</span>
              </div>
              
              {/* DHL */}
              <div className="h-10 px-4 bg-[#FFCC00] rounded flex items-center justify-center">
                <svg className="h-6" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2h4.3c2.3 0 4 1.5 4 4s-1.7 4-4 4H2V2zm1.7 6.3h2.5c1.5 0 2.5-.9 2.5-2.3s-1-2.3-2.5-2.3H3.7v4.6zM12.7 2h1.7v3.2h3.9V2h1.7v8h-1.7v-3.3h-3.9v3.3h-1.7V2zm9.3 0h1.7v6.3h4V10h-5.7V2z" fill="#D40511"/>
                </svg>
              </div>
              
              {/* Bring */}
              <div className="h-10 px-4 bg-[#00A5DF] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Bring</span>
              </div>
              
              {/* EarlyBird */}
              <div className="h-10 px-4 bg-white rounded flex items-center justify-center border border-gray-200">
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
