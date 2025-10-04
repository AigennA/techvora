import { Sparkles, Truck, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnnouncementBanner = () => {
  const { t } = useLanguage();

  const announcements = [
    { icon: Sparkles, text: "New arrivals every week!" },
    { icon: Truck, text: "Free shipping on orders over $50" },
    { icon: Shield, text: "2-year warranty on all products" },
    { icon: Zap, text: "Flash sale - Up to 40% off" },
  ];

  return (
    <div className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-2 overflow-hidden">
      <div className="relative flex animate-scroll">
        <div className="flex items-center gap-8 px-4 whitespace-nowrap">
          {announcements.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 px-4 whitespace-nowrap" aria-hidden="true">
          {announcements.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center gap-2">
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
