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
    
    // Product names
    "product_1_name": "Premium Wireless Earbuds Pro",
    "product_2_name": "Ultra-Slim Phone Case",
    "product_3_name": "Fast Wireless Charging Pad",
    "product_4_name": "Smart Fitness Watch",
    "product_5_name": "Noise-Cancelling Headphones",
    "product_6_name": "Magnetic Car Mount",
    "product_7_name": "65W GaN Fast Charger",
    "product_8_name": "Smart Home Hub",
    
    // Product descriptions
    "product_1_desc": "Experience premium sound quality with active noise cancellation, 30-hour battery life, and crystal-clear calls. Perfect for music lovers and professionals.",
    "product_2_desc": "Military-grade protection in a sleek design. Ultra-thin profile with raised edges to protect your screen and camera.",
    "product_3_desc": "Charge your devices wirelessly at lightning speed. Compatible with all Qi-enabled devices. Includes smart LED indicator.",
    "product_4_desc": "Track your fitness goals with advanced health monitoring. Heart rate, sleep tracking, GPS, and 7-day battery life.",
    "product_5_desc": "Industry-leading noise cancellation with premium sound quality. 40-hour battery, multipoint connectivity, and comfortable all-day wear.",
    "product_6_desc": "Strong magnetic hold keeps your phone secure. 360° rotation and one-hand operation. Universal compatibility.",
    "product_7_desc": "Ultra-fast charging with GaN technology. Charge laptops, tablets, and phones simultaneously. Compact and travel-friendly.",
    "product_8_desc": "Control your entire smart home from one hub. Compatible with Alexa, Google Home, and HomeKit. Easy setup and automation.",
    
    // Product detail
    viewDetails: "View Details",
    stockAvailable: "In Stock",
    itemsLeft: "items left",
    inYourCart: "in your cart",
    description: "Description",
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
    
    // Product names
    "product_1_name": "Premium Trådlösa Öronsnäckor Pro",
    "product_2_name": "Ultrasmal Telefonfodral",
    "product_3_name": "Snabb Trådlös Laddplatta",
    "product_4_name": "Smart Fitnessklocka",
    "product_5_name": "Brusreducerande Hörlurar",
    "product_6_name": "Magnetisk Bilhållare",
    "product_7_name": "65W GaN Snabbladdare",
    "product_8_name": "Smart Hem Hub",
    
    // Product descriptions
    "product_1_desc": "Upplev premiumljudkvalitet med aktiv brusreducering, 30 timmars batteritid och kristallklara samtal. Perfekt för musikälskare och yrkesverksamma.",
    "product_2_desc": "Militärt skydd i en snygg design. Ultratunt profil med upphöjda kanter för att skydda skärm och kamera.",
    "product_3_desc": "Ladda dina enheter trådlöst i blixtfart. Kompatibel med alla Qi-aktiverade enheter. Inkluderar smart LED-indikator.",
    "product_4_desc": "Spåra dina träningsmål med avancerad hälsoövervakning. Puls, sömnspårning, GPS och 7 dagars batteritid.",
    "product_5_desc": "Branschledande brusreducering med premium ljudkvalitet. 40 timmars batteri, multipunktanslutning och bekväm heldagsanvändning.",
    "product_6_desc": "Starkt magnetiskt grepp håller telefonen säker. 360° rotation och enhandsanvändning. Universell kompatibilitet.",
    "product_7_desc": "Ultras snabbladdning med GaN-teknik. Ladda bärbara datorer, surfplattor och telefoner samtidigt. Kompakt och resvänlig.",
    "product_8_desc": "Styr hela ditt smarta hem från en hub. Kompatibel med Alexa, Google Home och HomeKit. Enkel installation och automatisering.",
    
    // Product detail
    viewDetails: "Visa Detaljer",
    stockAvailable: "I Lager",
    itemsLeft: "kvar",
    inYourCart: "i din varukorg",
    description: "Beskrivning",
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
    
    // Product names
    "product_1_name": "高级无线耳机 Pro",
    "product_2_name": "超薄手机壳",
    "product_3_name": "快速无线充电板",
    "product_4_name": "智能健身手表",
    "product_5_name": "降噪耳机",
    "product_6_name": "磁性车载支架",
    "product_7_name": "65W 氮化镓快充",
    "product_8_name": "智能家居中枢",
    
    // Product descriptions
    "product_1_desc": "体验高级音质，配备主动降噪、30小时电池续航和清晰通话。音乐爱好者和专业人士的完美选择。",
    "product_2_desc": "军用级防护，时尚设计。超薄外形，边缘凸起保护屏幕和相机。",
    "product_3_desc": "闪电般快速无线充电。兼容所有 Qi 标准设备。配备智能 LED 指示灯。",
    "product_4_desc": "通过先进的健康监测追踪您的健身目标。心率、睡眠追踪、GPS 和 7 天电池续航。",
    "product_5_desc": "行业领先的降噪技术和高级音质。40小时电池、多点连接和全天舒适佩戴。",
    "product_6_desc": "强大磁力牢固固定手机。360° 旋转和单手操作。通用兼容性。",
    "product_7_desc": "氮化镓技术超快充电。同时为笔记本电脑、平板电脑和手机充电。小巧便携。",
    "product_8_desc": "从一个中枢控制整个智能家居。兼容 Alexa、Google Home 和 HomeKit。简易设置和自动化。",
    
    // Product detail
    viewDetails: "查看详情",
    stockAvailable: "有货",
    itemsLeft: "件库存",
    inYourCart: "在购物车",
    description: "描述",
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
