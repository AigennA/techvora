import { ShoppingCart, Search, Menu, User, LogOut, Languages, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
              <h1 className="text-xl md:text-2xl font-bold font-poppins tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("techStore")}
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t("phoneAccessories")}
              </Link>
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t("audio")}
              </Link>
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t("charging")}
              </Link>
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t("smartDevices")}
              </Link>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder={t("searchProducts")}
                className="pl-10 w-48 xl:w-64 bg-background"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
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
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
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
              <Button onClick={() => navigate("/auth")} size="sm" className="hidden sm:flex">
                {t("signIn")}
              </Button>
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
              <Input 
                placeholder={t("searchProducts")}
                className="bg-background"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
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

              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t("phoneAccessories")}
              </Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t("audio")}
              </Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t("charging")}
              </Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t("smartDevices")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
