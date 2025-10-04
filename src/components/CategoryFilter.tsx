import { Button } from "@/components/ui/button";
import { Smartphone, Headphones, Battery, Watch } from "lucide-react";

const categories = [
  { id: "all", name: "All Products", icon: null },
  { id: "accessories", name: "Phone Accessories", icon: Smartphone },
  { id: "audio", name: "Audio", icon: Headphones },
  { id: "charging", name: "Charging", icon: Battery },
  { id: "smart-devices", name: "Smart Devices", icon: Watch },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
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
