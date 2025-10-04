import { Button } from "@/components/ui/button";
import { Smartphone, Headphones, Battery, Watch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const { t } = useLanguage();
  
  const categories = [
    { id: "all", name: t("all"), icon: null },
    { id: "accessories", name: t("phoneAccessories"), icon: Smartphone },
    { id: "audio", name: t("audio"), icon: Headphones },
    { id: "charging", name: t("charging"), icon: Battery },
    { id: "smart-devices", name: t("smartDevices"), icon: Watch },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                onClick={() => onCategoryChange(category.id)}
                className="gap-2"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
