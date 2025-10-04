import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sv";

interface Translations {
  en: Record<string, string>;
  sv: Record<string, string>;
}

const translations: Translations = {
  en: {
    // Navbar
    techStore: "TechStore",
    phoneAccessories: "Phone Accessories",
    audio: "Audio",
    charging: "Charging",
    smartDevices: "Smart Devices",
    searchProducts: "Search products...",
    signIn: "Sign In",
    myAccount: "My Account",
    orders: "Orders",
    profile: "Profile",
    signOut: "Sign Out",
    
    // Hero
    newArrivals: "New Arrivals",
    heroTitle: "Premium Tech Accessories for Your Lifestyle",
    heroDescription: "Discover our curated collection of high-quality phone accessories, audio gear, and smart devices. Elevate your tech experience with products designed for modern living.",
    shopNow: "Shop Now",
    browseCategories: "Browse Categories",
    products: "Products",
    happyCustomers: "Happy Customers",
    rating: "Rating",
    
    // Products
    featuredProducts: "Featured Products",
    featuredDescription: "Browse our carefully selected collection of premium tech accessories",
    addToCart: "Add to Cart",
    notifyMe: "Notify Me",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    
    // Categories
    all: "All Products",
    accessories: "Phone Accessories",
    
    // Footer
    aboutUs: "About Us",
    aboutDescription: "Your trusted destination for premium tech accessories and smart devices.",
    quickLinks: "Quick Links",
    customerService: "Customer Service",
    contact: "Contact",
    shipping: "Shipping",
    returns: "Returns",
    faq: "FAQ",
    allRightsReserved: "All rights reserved.",
  },
  sv: {
    // Navbar
    techStore: "TechStore",
    phoneAccessories: "Telefontillbehör",
    audio: "Ljud",
    charging: "Laddning",
    smartDevices: "Smarta Enheter",
    searchProducts: "Sök produkter...",
    signIn: "Logga In",
    myAccount: "Mitt Konto",
    orders: "Beställningar",
    profile: "Profil",
    signOut: "Logga Ut",
    
    // Hero
    newArrivals: "Nyheter",
    heroTitle: "Premium Teknik Tillbehör för Din Livsstil",
    heroDescription: "Upptäck vår kurerade samling av högkvalitativa telefontillbehör, ljudutrustning och smarta enheter. Förhöj din teknikupplevelse med produkter designade för modernt liv.",
    shopNow: "Handla Nu",
    browseCategories: "Bläddra Kategorier",
    products: "Produkter",
    happyCustomers: "Nöjda Kunder",
    rating: "Betyg",
    
    // Products
    featuredProducts: "Utvalda Produkter",
    featuredDescription: "Bläddra i vår noggrant utvalda samling av premium teknik tillbehör",
    addToCart: "Lägg Till i Varukorg",
    notifyMe: "Meddela Mig",
    inStock: "I Lager",
    outOfStock: "Slutsåld",
    
    // Categories
    all: "Alla Produkter",
    accessories: "Telefonillbehör",
    
    // Footer
    aboutUs: "Om Oss",
    aboutDescription: "Din pålitliga destination för premium teknik tillbehör och smarta enheter.",
    quickLinks: "Snabblänkar",
    customerService: "Kundservice",
    contact: "Kontakt",
    shipping: "Frakt",
    returns: "Returer",
    faq: "FAQ",
    allRightsReserved: "Alla rättigheter förbehållna.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
