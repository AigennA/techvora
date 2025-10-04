import { Smartphone, Headphones, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

interface CategoryNavbarProps {
  onCategoryChange?: (category: string) => void;
}

const CategoryNavbar = ({ onCategoryChange }: CategoryNavbarProps = {}) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    navigate("/?category=" + category);
  };

  const categories = [
    { id: "accessories", label: t("phoneAccessories"), icon: Smartphone },
    { id: "audio", label: t("audio"), icon: Headphones },
    { id: "charging", label: t("charging"), icon: Zap },
    { id: "smart-devices", label: t("smartDevices"), icon: Shield },
  ];

  return (
    <nav className="sticky top-16 md:top-18 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo for mobile */}
          <div className="lg:hidden">
            <Logo />
          </div>

          {/* Categories */}
          <div className="hidden lg:flex items-center gap-8 w-full justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-all hover:scale-105 relative group"
              >
                <category.icon className="w-4 h-4" />
                {category.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile categories dropdown trigger */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap bg-muted/50 rounded-full"
              >
                <category.icon className="w-3 h-3" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
