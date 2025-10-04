import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sv" | "zh" | "pl" | "tr" | "es";

interface Translations {
  en: Record<string, string>;
  sv: Record<string, string>;
  zh: Record<string, string>;
  pl: Record<string, string>;
  tr: Record<string, string>;
  es: Record<string, string>;
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
    
    // Cookie Policy
    cookiePolicy: "Cookie Policy",
    whatAreCookies: "What Are Cookies?",
    cookiesDesc: "Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better shopping experience by remembering your preferences and understanding how you use our site.",
    howWeUseCookies: "How We Use Cookies",
    essentialCookies: "Essential Cookies",
    essentialCookiesDesc: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation, shopping cart, and secure checkout.",
    analyticsCookies: "Analytics Cookies",
    analyticsCookiesDesc: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.",
    marketingCookies: "Marketing Cookies",
    marketingCookiesDesc: "These cookies track your browsing habits to show you relevant advertisements and measure the effectiveness of our marketing campaigns.",
    managingCookies: "Managing Cookies",
    managingCookiesDesc: "You can control and manage cookies through your browser settings. However, disabling certain cookies may affect your experience on our website.",
    updates: "Updates to This Policy",
    cookiePolicyUpdates: "We may update this Cookie Policy from time to time. Please check back regularly to stay informed about our use of cookies.",
    
    // Payment Methods
    paymentMethods: "Payment Methods",
    paymentMethodsIntro: "We offer secure and convenient payment options to make your shopping experience smooth and hassle-free.",
    creditDebitCards: "Credit & Debit Cards",
    creditDebitCardsDesc: "Pay securely with your favorite credit or debit card. We accept all major card providers for your convenience.",
    digitalWallets: "Digital Wallets",
    digitalWalletsDesc: "Quick and secure checkout using your preferred digital wallet. Perfect for fast, contactless payments.",
    paypal: "PayPal",
    paypalDesc: "Shop with confidence using PayPal. Benefit from buyer protection and easy refunds.",
    bankTransfer: "Bank Transfer",
    bankTransferDesc: "Direct bank transfer for large orders. Safe and reliable for high-value purchases.",
    allMajorBanks: "All Major Banks Supported",
    securePayments: "Secure Payments",
    securePaymentsDesc: "Your payment information is protected with industry-leading security measures:",
    sslEncryption: "256-bit SSL encryption for all transactions",
    pciCompliance: "PCI DSS compliant payment processing",
    fraudProtection: "Advanced fraud detection and prevention",
    
    // Footer
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
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
    
    // Cookie Policy
    cookiePolicy: "Cookie Policy",
    whatAreCookies: "Vad är Cookies?",
    cookiesDesc: "Cookies är små textfiler som placeras på din enhet när du besöker vår webbplats. De hjälper oss att ge dig en bättre shoppingupplevelse genom att komma ihåg dina preferenser och förstå hur du använder vår webbplats.",
    howWeUseCookies: "Hur Vi Använder Cookies",
    essentialCookies: "Nödvändiga Cookies",
    essentialCookiesDesc: "Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De möjliggör grundläggande funktioner som sidnavigering, varukorg och säker utcheckning.",
    analyticsCookies: "Analytiska Cookies",
    analyticsCookiesDesc: "Vi använder analytiska cookies för att förstå hur besökare interagerar med vår webbplats. Detta hjälper oss att förbättra våra tjänster och användarupplevelse.",
    marketingCookies: "Marknadsföringscookies",
    marketingCookiesDesc: "Dessa cookies spårar dina surfvanor för att visa dig relevanta annonser och mäta effektiviteten av våra marknadsföringskampanjer.",
    managingCookies: "Hantera Cookies",
    managingCookiesDesc: "Du kan kontrollera och hantera cookies genom dina webbläsarinställningar. Att inaktivera vissa cookies kan dock påverka din upplevelse på vår webbplats.",
    updates: "Uppdateringar av Denna Policy",
    cookiePolicyUpdates: "Vi kan uppdatera denna Cookie Policy från tid till annan. Vänligen kontrollera regelbundet för att hålla dig informerad om vår användning av cookies.",
    
    // Payment Methods
    paymentMethods: "Betalningsmetoder",
    paymentMethodsIntro: "Vi erbjuder säkra och bekväma betalningsalternativ för att göra din shoppingupplevelse smidig och problemfri.",
    creditDebitCards: "Kredit- & Betalkort",
    creditDebitCardsDesc: "Betala säkert med ditt favoritkort. Vi accepterar alla stora kortleverantörer för din bekvämlighet.",
    digitalWallets: "Digitala Plånböcker",
    digitalWalletsDesc: "Snabb och säker utcheckning med din föredragna digitala plånbok. Perfekt för snabba, kontaktlösa betalningar.",
    paypal: "PayPal",
    paypalDesc: "Handla med förtroende med PayPal. Dra nytta av köparskydd och enkla återbetalningar.",
    bankTransfer: "Banköverföring",
    bankTransferDesc: "Direkt banköverföring för stora beställningar. Säkert och pålitligt för högvärdiga köp.",
    allMajorBanks: "Alla Stora Banker Stöds",
    securePayments: "Säkra Betalningar",
    securePaymentsDesc: "Din betalningsinformation skyddas med branschledande säkerhetsåtgärder:",
    sslEncryption: "256-bitars SSL-kryptering för alla transaktioner",
    pciCompliance: "PCI DSS-kompatibel betalningshantering",
    fraudProtection: "Avancerad upptäckt och förebyggande av bedrägerier",
    
    // Footer
    privacyPolicy: "Integritetspolicy",
    termsConditions: "Villkor & Regler",
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
    
    // Cookie Policy
    cookiePolicy: "Cookie 政策",
    whatAreCookies: "什么是 Cookies？",
    cookiesDesc: "Cookies 是您访问我们网站时放置在您设备上的小文本文件。它们通过记住您的偏好和了解您如何使用我们的网站来帮助我们为您提供更好的购物体验。",
    howWeUseCookies: "我们如何使用 Cookies",
    essentialCookies: "必要的 Cookies",
    essentialCookiesDesc: "这些 cookies 对于网站正常运行是必需的。它们启用页面导航、购物车和安全结账等基本功能。",
    analyticsCookies: "分析 Cookies",
    analyticsCookiesDesc: "我们使用分析 cookies 来了解访客如何与我们的网站互动。这有助于我们改进服务和用户体验。",
    marketingCookies: "营销 Cookies",
    marketingCookiesDesc: "这些 cookies 跟踪您的浏览习惯，以向您显示相关广告并衡量我们营销活动的效果。",
    managingCookies: "管理 Cookies",
    managingCookiesDesc: "您可以通过浏览器设置控制和管理 cookies。但是，禁用某些 cookies 可能会影响您在我们网站上的体验。",
    updates: "政策更新",
    cookiePolicyUpdates: "我们可能会不时更新此 Cookie 政策。请定期查看以了解我们对 cookies 的使用情况。",
    
    // Payment Methods
    paymentMethods: "支付方式",
    paymentMethodsIntro: "我们提供安全便捷的支付选项，让您的购物体验顺畅无忧。",
    creditDebitCards: "信用卡和借记卡",
    creditDebitCardsDesc: "使用您喜爱的信用卡或借记卡安全支付。我们接受所有主要卡片提供商以方便您使用。",
    digitalWallets: "数字钱包",
    digitalWalletsDesc: "使用您首选的数字钱包快速安全地结账。完美适合快速、非接触式支付。",
    paypal: "PayPal",
    paypalDesc: "使用 PayPal 放心购物。享受买家保护和轻松退款。",
    bankTransfer: "银行转账",
    bankTransferDesc: "大额订单直接银行转账。安全可靠，适合高价值购买。",
    allMajorBanks: "支持所有主要银行",
    securePayments: "安全支付",
    securePaymentsDesc: "您的支付信息受到行业领先的安全措施保护：",
    sslEncryption: "所有交易采用 256 位 SSL 加密",
    pciCompliance: "符合 PCI DSS 标准的支付处理",
    fraudProtection: "先进的欺诈检测和预防",
    
    // Footer
    privacyPolicy: "隐私政策",
    termsConditions: "条款与条件",
  },
  pl: {
    // Navbar
    techStore: "TechStore",
    phoneAccessories: "Akcesoria do Telefonu",
    audio: "Audio",
    charging: "Ładowanie",
    smartDevices: "Inteligentne Urządzenia",
    searchProducts: "Szukaj produktów...",
    signIn: "Zaloguj się",
    myAccount: "Moje Konto",
    orders: "Zamówienia",
    profile: "Profil",
    signOut: "Wyloguj się",
    
    // Hero
    newArrivals: "Nowości",
    heroTitle: "Akcesoria technologiczne Premium dla Twojego stylu życia",
    heroDescription: "Odkryj naszą wyselekcjonowaną kolekcję wysokiej jakości akcesoriów do telefonów, sprzętu audio i inteligentnych urządzeń. Podnieś swoje doświadczenie technologiczne dzięki produktom zaprojektowanym dla nowoczesnego życia.",
    shopNow: "Kup Teraz",
    browseCategories: "Przeglądaj Kategorie",
    products: "Produkty",
    happyCustomers: "Zadowolonych Klientów",
    rating: "Ocena",
    
    // Products
    featuredProducts: "Polecane Produkty",
    featuredDescription: "Przeglądaj naszą starannie wyselekcjonowaną kolekcję akcesoriów technologicznych premium",
    addToCart: "Dodaj do Koszyka",
    notifyMe: "Powiadom Mnie",
    inStock: "W Magazynie",
    outOfStock: "Wyprzedane",
    
    // Categories
    all: "Wszystkie Produkty",
    accessories: "Akcesoria do Telefonu",
    
    // Footer
    aboutUs: "O Nas",
    aboutDescription: "Twoje zaufane miejsce na akcesoria technologiczne premium i inteligentne urządzenia.",
    quickLinks: "Szybkie Linki",
    customerService: "Obsługa Klienta",
    contact: "Kontakt",
    shipping: "Wysyłka",
    returns: "Zwroty",
    faq: "FAQ",
    allRightsReserved: "Wszelkie prawa zastrzeżone.",
    
    // Product names
    "product_1_name": "Bezprzewodowe Słuchawki Premium Pro",
    "product_2_name": "Ultra-Cienkie Etui na Telefon",
    "product_3_name": "Szybka Bezprzewodowa Ładowarka",
    "product_4_name": "Inteligentny Zegarek Fitness",
    "product_5_name": "Słuchawki z Redukcją Hałasu",
    "product_6_name": "Magnetyczny Uchwyt Samochodowy",
    "product_7_name": "Szybka Ładowarka 65W GaN",
    "product_8_name": "Inteligentne Centrum Domowe",
    
    // Product descriptions
    "product_1_desc": "Doświadcz premium jakości dźwięku z aktywną redukcją hałasu, 30-godzinną baterią i krystalicznie czystymi rozmowami. Idealne dla melomanów i profesjonalistów.",
    "product_2_desc": "Ochrona klasy wojskowej w eleganckim designie. Ultra-cienki profil z podwyższonymi krawędziami chroniącymi ekran i aparat.",
    "product_3_desc": "Ładuj swoje urządzenia bezprzewodowo z błyskawiczną prędkością. Kompatybilne ze wszystkimi urządzeniami Qi. Zawiera inteligentny wskaźnik LED.",
    "product_4_desc": "Śledź swoje cele fitness dzięki zaawansowanemu monitorowaniu zdrowia. Tętno, śledzenie snu, GPS i 7-dniowa bateria.",
    "product_5_desc": "Wiodąca w branży redukcja hałasu z premium jakością dźwięku. 40-godzinna bateria, łączność wielopunktowa i wygodne noszenie przez cały dzień.",
    "product_6_desc": "Silny magnetyczny chwyt zabezpiecza telefon. Obrót 360° i obsługa jedną ręką. Uniwersalna kompatybilność.",
    "product_7_desc": "Ultra-szybkie ładowanie z technologią GaN. Ładuj laptopy, tablety i telefony jednocześnie. Kompaktowa i przyjazna podróżom.",
    "product_8_desc": "Kontroluj cały swój inteligentny dom z jednego centrum. Kompatybilne z Alexa, Google Home i HomeKit. Łatwa konfiguracja i automatyzacja.",
    
    // Product detail
    viewDetails: "Zobacz Szczegóły",
    stockAvailable: "W Magazynie",
    itemsLeft: "sztuk pozostało",
    inYourCart: "w koszyku",
    description: "Opis",
    
    // Cookie Policy
    cookiePolicy: "Polityka Cookies",
    whatAreCookies: "Czym są Cookies?",
    cookiesDesc: "Pliki cookie to małe pliki tekstowe umieszczane na Twoim urządzeniu podczas wizyty na naszej stronie. Pomagają nam zapewnić lepsze doświadczenie zakupowe, zapamiętując Twoje preferencje i rozumiejąc, jak korzystasz z naszej strony.",
    howWeUseCookies: "Jak Używamy Cookies",
    essentialCookies: "Niezbędne Cookies",
    essentialCookiesDesc: "Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony. Umożliwiają podstawowe funkcje, takie jak nawigacja po stronie, koszyk zakupów i bezpieczna kasa.",
    analyticsCookies: "Analityczne Cookies",
    analyticsCookiesDesc: "Używamy analitycznych plików cookie, aby zrozumieć, jak odwiedzający wchodzą w interakcję z naszą stroną. Pomaga nam to ulepszać nasze usługi i doświadczenie użytkownika.",
    marketingCookies: "Marketingowe Cookies",
    marketingCookiesDesc: "Te pliki cookie śledzą Twoje nawyki przeglądania, aby pokazywać Ci odpowiednie reklamy i mierzyć skuteczność naszych kampanii marketingowych.",
    managingCookies: "Zarządzanie Cookies",
    managingCookiesDesc: "Możesz kontrolować i zarządzać plikami cookie za pomocą ustawień przeglądarki. Jednak wyłączenie niektórych plików cookie może wpłynąć na Twoje doświadczenie na naszej stronie.",
    updates: "Aktualizacje",
    cookiePolicyUpdates: "Możemy od czasu do czasu aktualizować tę Politykę Cookies. Sprawdzaj regularnie, aby być na bieżąco z naszym wykorzystaniem plików cookie.",
    
    // Payment Methods
    paymentMethods: "Metody Płatności",
    paymentMethodsIntro: "Oferujemy bezpieczne i wygodne opcje płatności, aby Twoje zakupy były płynne i bezproblemowe.",
    creditDebitCards: "Karty Kredytowe i Debetowe",
    creditDebitCardsDesc: "Płać bezpiecznie swoją ulubioną kartą kredytową lub debetową. Akceptujemy wszystkich głównych dostawców kart dla Twojej wygody.",
    digitalWallets: "Portfele Cyfrowe",
    digitalWalletsDesc: "Szybka i bezpieczna kasa za pomocą preferowanego portfela cyfrowego. Idealne do szybkich, bezdotykowych płatności.",
    paypal: "PayPal",
    paypalDesc: "Kupuj z pewnością korzystając z PayPal. Skorzystaj z ochrony kupującego i łatwych zwrotów.",
    bankTransfer: "Przelew Bankowy",
    bankTransferDesc: "Bezpośredni przelew bankowy dla dużych zamówień. Bezpieczny i niezawodny dla zakupów o wysokiej wartości.",
    allMajorBanks: "Wszystkie Główne Banki Obsługiwane",
    securePayments: "Bezpieczne Płatności",
    securePaymentsDesc: "Twoje informacje o płatności są chronione najnowocześniejszymi środkami bezpieczeństwa:",
    sslEncryption: "256-bitowe szyfrowanie SSL dla wszystkich transakcji",
    pciCompliance: "Przetwarzanie płatności zgodne z PCI DSS",
    fraudProtection: "Zaawansowane wykrywanie i zapobieganie oszustwom",
    
    // Footer
    privacyPolicy: "Polityka Prywatności",
    termsConditions: "Regulamin",
  },
  tr: {
    // Navbar
    techStore: "TechStore",
    phoneAccessories: "Telefon Aksesuarları",
    audio: "Ses",
    charging: "Şarj",
    smartDevices: "Akıllı Cihazlar",
    searchProducts: "Ürün ara...",
    signIn: "Giriş Yap",
    myAccount: "Hesabım",
    orders: "Siparişler",
    profile: "Profil",
    signOut: "Çıkış Yap",
    
    // Hero
    newArrivals: "Yeni Gelenler",
    heroTitle: "Yaşam Tarzınız İçin Premium Teknoloji Aksesuarları",
    heroDescription: "Yüksek kaliteli telefon aksesuarları, ses ekipmanları ve akıllı cihazlardan oluşan seçkin koleksiyonumuzu keşfedin. Modern yaşam için tasarlanmış ürünlerle teknoloji deneyiminizi yükseltin.",
    shopNow: "Şimdi Alışveriş Yap",
    browseCategories: "Kategorilere Göz At",
    products: "Ürünler",
    happyCustomers: "Mutlu Müşteri",
    rating: "Değerlendirme",
    
    // Products
    featuredProducts: "Öne Çıkan Ürünler",
    featuredDescription: "Özenle seçilmiş premium teknoloji aksesuarları koleksiyonumuza göz atın",
    addToCart: "Sepete Ekle",
    notifyMe: "Beni Bilgilendir",
    inStock: "Stokta",
    outOfStock: "Stokta Yok",
    
    // Categories
    all: "Tüm Ürünler",
    accessories: "Telefon Aksesuarları",
    
    // Footer
    aboutUs: "Hakkımızda",
    aboutDescription: "Premium teknoloji aksesuarları ve akıllı cihazlar için güvenilir hedefiniz.",
    quickLinks: "Hızlı Bağlantılar",
    customerService: "Müşteri Hizmetleri",
    contact: "İletişim",
    shipping: "Kargo",
    returns: "İadeler",
    faq: "SSS",
    allRightsReserved: "Tüm hakları saklıdır.",
    
    // Product names
    "product_1_name": "Premium Kablosuz Kulaklık Pro",
    "product_2_name": "Ultra-İnce Telefon Kılıfı",
    "product_3_name": "Hızlı Kablosuz Şarj Pedi",
    "product_4_name": "Akıllı Fitness Saati",
    "product_5_name": "Gürültü Önleyici Kulaklıklar",
    "product_6_name": "Manyetik Araç Tutucu",
    "product_7_name": "65W GaN Hızlı Şarj Cihazı",
    "product_8_name": "Akıllı Ev Merkezi",
    
    // Product descriptions
    "product_1_desc": "Aktif gürültü önleme, 30 saatlik pil ömrü ve kristal berraklığında aramalarla premium ses kalitesini deneyimleyin. Müzik severler ve profesyoneller için mükemmel.",
    "product_2_desc": "Şık tasarımda askeri sınıf koruma. Ekranınızı ve kameranızı korumak için yükseltilmiş kenarlarla ultra ince profil.",
    "product_3_desc": "Cihazlarınızı kablosuz olarak şimşek hızında şarj edin. Tüm Qi özellikli cihazlarla uyumlu. Akıllı LED gösterge içerir.",
    "product_4_desc": "Gelişmiş sağlık izleme ile fitness hedeflerinizi takip edin. Kalp atış hızı, uyku takibi, GPS ve 7 günlük pil ömrü.",
    "product_5_desc": "Premium ses kalitesiyle sektör lideri gürültü önleme. 40 saatlik pil, çok noktalı bağlantı ve tüm gün rahat kullanım.",
    "product_6_desc": "Güçlü manyetik tutuş telefonunuzu güvende tutar. 360° dönme ve tek elle kullanım. Evrensel uyumluluk.",
    "product_7_desc": "GaN teknolojisi ile ultra hızlı şarj. Dizüstü bilgisayarları, tabletleri ve telefonları aynı anda şarj edin. Kompakt ve seyahat dostu.",
    "product_8_desc": "Tüm akıllı evinizi tek bir merkezden kontrol edin. Alexa, Google Home ve HomeKit ile uyumlu. Kolay kurulum ve otomasyon.",
    
    // Product detail
    viewDetails: "Detayları Görüntüle",
    stockAvailable: "Stokta",
    itemsLeft: "adet kaldı",
    inYourCart: "sepetinizde",
    description: "Açıklama",
    
    // Cookie Policy
    cookiePolicy: "Çerez Politikası",
    whatAreCookies: "Çerezler Nedir?",
    cookiesDesc: "Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır. Tercihlerinizi hatırlayarak ve sitemizi nasıl kullandığınızı anlayarak size daha iyi bir alışveriş deneyimi sunmamıza yardımcı olurlar.",
    howWeUseCookies: "Çerezleri Nasıl Kullanıyoruz",
    essentialCookies: "Gerekli Çerezler",
    essentialCookiesDesc: "Bu çerezler web sitesinin düzgün çalışması için gereklidir. Sayfa gezinme, alışveriş sepeti ve güvenli ödeme gibi temel işlevleri etkinleştirirler.",
    analyticsCookies: "Analitik Çerezler",
    analyticsCookiesDesc: "Ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anlamak için analitik çerezler kullanırız. Bu, hizmetlerimizi ve kullanıcı deneyimimizi geliştirmemize yardımcı olur.",
    marketingCookies: "Pazarlama Çerezleri",
    marketingCookiesDesc: "Bu çerezler, size ilgili reklamlar göstermek ve pazarlama kampanyalarımızın etkinliğini ölçmek için tarama alışkanlıklarınızı takip eder.",
    managingCookies: "Çerezleri Yönetme",
    managingCookiesDesc: "Tarayıcı ayarlarınız aracılığıyla çerezleri kontrol edebilir ve yönetebilirsiniz. Ancak, belirli çerezleri devre dışı bırakmak web sitemizdeki deneyiminizi etkileyebilir.",
    updates: "Güncellemeler",
    cookiePolicyUpdates: "Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Çerez kullanımımız hakkında bilgi sahibi olmak için düzenli olarak kontrol edin.",
    
    // Payment Methods
    paymentMethods: "Ödeme Yöntemleri",
    paymentMethodsIntro: "Alışveriş deneyiminizi sorunsuz ve zahmetsiz hale getirmek için güvenli ve kullanışlı ödeme seçenekleri sunuyoruz.",
    creditDebitCards: "Kredi ve Banka Kartları",
    creditDebitCardsDesc: "Favori kredi veya banka kartınızla güvenle ödeme yapın. Kolaylığınız için tüm büyük kart sağlayıcılarını kabul ediyoruz.",
    digitalWallets: "Dijital Cüzdanlar",
    digitalWalletsDesc: "Tercih ettiğiniz dijital cüzdanı kullanarak hızlı ve güvenli ödeme. Hızlı, temassız ödemeler için mükemmel.",
    paypal: "PayPal",
    paypalDesc: "PayPal kullanarak güvenle alışveriş yapın. Alıcı koruması ve kolay iadelerden yararlanın.",
    bankTransfer: "Banka Havalesi",
    bankTransferDesc: "Büyük siparişler için doğrudan banka havalesi. Yüksek değerli alımlar için güvenli ve güvenilir.",
    allMajorBanks: "Tüm Büyük Bankalar Desteklenir",
    securePayments: "Güvenli Ödemeler",
    securePaymentsDesc: "Ödeme bilgileriniz sektör lideri güvenlik önlemleriyle korunmaktadır:",
    sslEncryption: "Tüm işlemler için 256-bit SSL şifrelemesi",
    pciCompliance: "PCI DSS uyumlu ödeme işleme",
    fraudProtection: "Gelişmiş dolandırıcılık tespiti ve önleme",
    
    // Footer
    privacyPolicy: "Gizlilik Politikası",
    termsConditions: "Şartlar ve Koşullar",
  },
  es: {
    // Navbar
    techStore: "TechStore",
    phoneAccessories: "Accesorios para Teléfono",
    audio: "Audio",
    charging: "Carga",
    smartDevices: "Dispositivos Inteligentes",
    searchProducts: "Buscar productos...",
    signIn: "Iniciar Sesión",
    myAccount: "Mi Cuenta",
    orders: "Pedidos",
    profile: "Perfil",
    signOut: "Cerrar Sesión",
    
    // Hero
    newArrivals: "Novedades",
    heroTitle: "Accesorios Tecnológicos Premium para tu Estilo de Vida",
    heroDescription: "Descubre nuestra colección seleccionada de accesorios para teléfonos de alta calidad, equipos de audio y dispositivos inteligentes. Eleva tu experiencia tecnológica con productos diseñados para la vida moderna.",
    shopNow: "Comprar Ahora",
    browseCategories: "Explorar Categorías",
    products: "Productos",
    happyCustomers: "Clientes Satisfechos",
    rating: "Valoración",
    
    // Products
    featuredProducts: "Productos Destacados",
    featuredDescription: "Explora nuestra colección cuidadosamente seleccionada de accesorios tecnológicos premium",
    addToCart: "Añadir al Carrito",
    notifyMe: "Notificarme",
    inStock: "En Stock",
    outOfStock: "Agotado",
    
    // Categories
    all: "Todos los Productos",
    accessories: "Accesorios para Teléfono",
    
    // Footer
    aboutUs: "Sobre Nosotros",
    aboutDescription: "Tu destino de confianza para accesorios tecnológicos premium y dispositivos inteligentes.",
    quickLinks: "Enlaces Rápidos",
    customerService: "Servicio al Cliente",
    contact: "Contacto",
    shipping: "Envío",
    returns: "Devoluciones",
    faq: "Preguntas Frecuentes",
    allRightsReserved: "Todos los derechos reservados.",
    
    // Product names
    "product_1_name": "Auriculares Inalámbricos Premium Pro",
    "product_2_name": "Funda Ultra-Delgada para Teléfono",
    "product_3_name": "Cargador Inalámbrico Rápido",
    "product_4_name": "Reloj Inteligente de Fitness",
    "product_5_name": "Auriculares con Cancelación de Ruido",
    "product_6_name": "Soporte Magnético para Auto",
    "product_7_name": "Cargador Rápido 65W GaN",
    "product_8_name": "Centro de Hogar Inteligente",
    
    // Product descriptions
    "product_1_desc": "Experimenta calidad de sonido premium con cancelación activa de ruido, 30 horas de batería y llamadas cristalinas. Perfecto para amantes de la música y profesionales.",
    "product_2_desc": "Protección de grado militar en un diseño elegante. Perfil ultra-delgado con bordes elevados para proteger tu pantalla y cámara.",
    "product_3_desc": "Carga tus dispositivos de forma inalámbrica a velocidad de rayo. Compatible con todos los dispositivos Qi. Incluye indicador LED inteligente.",
    "product_4_desc": "Rastrea tus objetivos de fitness con monitoreo avanzado de salud. Frecuencia cardíaca, seguimiento del sueño, GPS y 7 días de batería.",
    "product_5_desc": "Cancelación de ruido líder en la industria con calidad de sonido premium. 40 horas de batería, conectividad multipunto y uso cómodo todo el día.",
    "product_6_desc": "Agarre magnético fuerte mantiene tu teléfono seguro. Rotación 360° y operación con una mano. Compatibilidad universal.",
    "product_7_desc": "Carga ultra-rápida con tecnología GaN. Carga portátiles, tabletas y teléfonos simultáneamente. Compacto y amigable para viajes.",
    "product_8_desc": "Controla todo tu hogar inteligente desde un centro. Compatible con Alexa, Google Home y HomeKit. Configuración y automatización fáciles.",
    
    // Product detail
    viewDetails: "Ver Detalles",
    stockAvailable: "En Stock",
    itemsLeft: "unidades disponibles",
    inYourCart: "en tu carrito",
    description: "Descripción",
    
    // Cookie Policy
    cookiePolicy: "Política de Cookies",
    whatAreCookies: "¿Qué son las Cookies?",
    cookiesDesc: "Las cookies son pequeños archivos de texto que se colocan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a brindarte una mejor experiencia de compra al recordar tus preferencias y entender cómo usas nuestro sitio.",
    howWeUseCookies: "Cómo Usamos las Cookies",
    essentialCookies: "Cookies Esenciales",
    essentialCookiesDesc: "Estas cookies son necesarias para que el sitio web funcione correctamente. Habilitan funciones básicas como navegación de página, carrito de compras y pago seguro.",
    analyticsCookies: "Cookies Analíticas",
    analyticsCookiesDesc: "Usamos cookies analíticas para entender cómo los visitantes interactúan con nuestro sitio web. Esto nos ayuda a mejorar nuestros servicios y experiencia del usuario.",
    marketingCookies: "Cookies de Marketing",
    marketingCookiesDesc: "Estas cookies rastrean tus hábitos de navegación para mostrarte anuncios relevantes y medir la efectividad de nuestras campañas de marketing.",
    managingCookies: "Gestión de Cookies",
    managingCookiesDesc: "Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Sin embargo, deshabilitar ciertas cookies puede afectar tu experiencia en nuestro sitio web.",
    updates: "Actualizaciones",
    cookiePolicyUpdates: "Podemos actualizar esta Política de Cookies de vez en cuando. Por favor, revisa regularmente para mantenerte informado sobre nuestro uso de cookies.",
    
    // Payment Methods
    paymentMethods: "Métodos de Pago",
    paymentMethodsIntro: "Ofrecemos opciones de pago seguras y convenientes para hacer tu experiencia de compra fluida y sin complicaciones.",
    creditDebitCards: "Tarjetas de Crédito y Débito",
    creditDebitCardsDesc: "Paga de forma segura con tu tarjeta de crédito o débito favorita. Aceptamos todos los principales proveedores de tarjetas para tu comodidad.",
    digitalWallets: "Billeteras Digitales",
    digitalWalletsDesc: "Pago rápido y seguro usando tu billetera digital preferida. Perfecto para pagos rápidos sin contacto.",
    paypal: "PayPal",
    paypalDesc: "Compra con confianza usando PayPal. Benefíciate de la protección al comprador y devoluciones fáciles.",
    bankTransfer: "Transferencia Bancaria",
    bankTransferDesc: "Transferencia bancaria directa para pedidos grandes. Seguro y confiable para compras de alto valor.",
    allMajorBanks: "Todos los Bancos Principales Soportados",
    securePayments: "Pagos Seguros",
    securePaymentsDesc: "Tu información de pago está protegida con medidas de seguridad líderes en la industria:",
    sslEncryption: "Encriptación SSL de 256 bits para todas las transacciones",
    pciCompliance: "Procesamiento de pagos conforme a PCI DSS",
    fraudProtection: "Detección y prevención avanzada de fraudes",
    
    // Footer
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
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
