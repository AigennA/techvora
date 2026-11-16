import { ShoppingCart, Menu, User, LogOut, Languages, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import categoryAccessories from "@/assets/product-phone-case.jpg";
import categoryAudio from "@/assets/product-earbuds.jpg";
import categoryCharging from "@/assets/product-charger-pad.jpg";
import categorySmartDevices from "@/assets/product-smartwatch.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mobileCategories = [
  { id: "accessories", labelKey: "phoneAccessories", image: categoryAccessories },
  { id: "audio", labelKey: "audio", image: categoryAudio },
  { id: "charging", labelKey: "charging", image: categoryCharging },
  { id: "smart-devices", labelKey: "smartDevices", image: categorySmartDevices },
] as const;

interface NavbarProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

const Navbar = ({ onSearch, onCategoryChange }: NavbarProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleSearchChange = (query: string) => {
    console.log("Navbar - handleSearchChange called with:", query);
    if (onSearch) {
      console.log("Navbar - calling onSearch callback");
      onSearch(query);
    } else {
      console.log("Navbar - onSearch callback is not defined");
    }
  };

  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    navigate("/?category=" + category, { replace: true });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="flex items-center group">
              <Logo className="transition-transform group-hover:scale-110" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <button 
                onClick={() => handleCategoryClick("accessories")} 
                className="text-sm font-semibold text-foreground hover:text-primary transition-all hover:scale-105 relative group"
              >
                {t("phoneAccessories")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleCategoryClick("audio")} 
                className="text-sm font-semibold text-foreground hover:text-primary transition-all hover:scale-105 relative group"
              >
                {t("audio")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleCategoryClick("charging")} 
                className="text-sm font-semibold text-foreground hover:text-primary transition-all hover:scale-105 relative group"
              >
                {t("charging")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleCategoryClick("smart-devices")} 
                className="text-sm font-semibold text-foreground hover:text-primary transition-all hover:scale-105 relative group"
              >
                {t("smartDevices")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
              </button>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden lg:block w-48 xl:w-64">
              <SearchBar 
                onSearch={handleSearchChange}
                placeholder={t("searchProducts")}
              />
            </div>

            {/* Language Switcher - Hidden on smallest screens */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <Languages className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card z-50">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("sv")}>
                  Svenska {language === "sv" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("zh")}>
                  中文 {language === "zh" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pl")}>
                  Polski {language === "pl" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("tr")}>
                  Türkçe {language === "tr" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español {language === "es" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="relative" onClick={() => navigate("/cart")}>
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={t("myAccount")}>
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card z-50">
                  <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/favorites")}>
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    {t("orders")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    {t("profile")}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    {t("signOut")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button onClick={() => navigate("/auth")} size="sm" className="hidden sm:flex">
                  {t("signIn")}
                </Button>
                <Button variant="ghost" size="icon" className="sm:hidden" aria-label={t("signIn")} onClick={() => navigate("/auth")}>
                  <User className="w-5 h-5" />
                </Button>
              </>
            )}

            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <SearchBar 
                onSearch={handleSearchChange}
                placeholder={t("searchProducts")}
                className="w-full"
              />
              
              {/* Mobile Language Selector */}
              <div className="grid grid-cols-3 gap-2 sm:hidden">
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
                <Button
                  variant={language === "sv" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("sv")}
                >
                  SV
                </Button>
                <Button
                  variant={language === "zh" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("zh")}
                >
                  中文
                </Button>
                <Button
                  variant={language === "pl" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("pl")}
                >
                  PL
                </Button>
                <Button
                  variant={language === "tr" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("tr")}
                >
                  TR
                </Button>
                <Button
                  variant={language === "es" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                >
                  ES
                </Button>
              </div>

              {/* Mobile Auth Button */}
              {!user && (
                <Button onClick={() => navigate("/auth")} className="sm:hidden w-full">
                  {t("signIn")}
                </Button>
              )}

              {user && (
                <div className="sm:hidden space-y-2">
                  <Button variant="outline" onClick={() => navigate("/favorites")} className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/orders")} className="w-full justify-start">
                    {t("orders")}
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/profile")} className="w-full justify-start">
                    {t("profile")}
                  </Button>
                  <Button variant="outline" onClick={signOut} className="w-full justify-start">
                    <LogOut className="w-4 h-4 mr-2" />
                    {t("signOut")}
                  </Button>
                </div>
              )}

              <div className="h-px bg-border" />

              <div className="grid grid-cols-2 gap-3">
                {mobileCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-all hover:shadow-md hover:border-primary active:scale-[0.98]"
                  >
                    <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
                      <img
                        src={cat.image}
                        alt={t(cat.labelKey)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block px-3 py-2 text-sm font-semibold text-foreground group-hover:text-primary">
                      {t(cat.labelKey)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
