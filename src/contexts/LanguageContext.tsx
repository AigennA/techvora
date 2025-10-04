import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sv" | "zh";

interface Translations {
  en: Record<string, string>;
  sv: Record<string, string>;
  zh: Record<string, string>;
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
  zh: {
    // Navbar
    techStore: "科技商店",
    phoneAccessories: "手机配件",
    audio: "音频",
    charging: "充电",
    smartDevices: "智能设备",
    searchProducts: "搜索产品...",
    signIn: "登录",
    myAccount: "我的账户",
    orders: "订单",
    profile: "个人资料",
    signOut: "退出",
    
    // Hero
    newArrivals: "新品上市",
    heroTitle: "为您的生活方式提供优质科技配件",
    heroDescription: "探索我们精选的高品质手机配件、音频设备和智能产品系列。通过专为现代生活设计的产品提升您的科技体验。",
    shopNow: "立即购物",
    browseCategories: "浏览分类",
    products: "产品",
    happyCustomers: "满意客户",
    rating: "评分",
    
    // Products
    featuredProducts: "精选产品",
    featuredDescription: "浏览我们精心挑选的优质科技配件系列",
    addToCart: "加入购物车",
    notifyMe: "通知我",
    inStock: "有货",
    outOfStock: "缺货",
    
    // Categories
    all: "全部产品",
    accessories: "手机配件",
    
    // Footer
    aboutUs: "关于我们",
    aboutDescription: "您值得信赖的优质科技配件和智能设备目的地。",
    quickLinks: "快速链接",
    customerService: "客户服务",
    contact: "联系",
    shipping: "运输",
    returns: "退货",
    faq: "常见问题",
    allRightsReserved: "保留所有权利。",
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
