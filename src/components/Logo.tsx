import { Zap } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-sm opacity-50 animate-pulse"></div>
        
        {/* Main logo container */}
        <div className="relative bg-gradient-to-br from-primary via-primary to-accent p-2 rounded-lg shadow-lg">
          <Zap className="w-6 h-6 text-primary-foreground" fill="currentColor" />
        </div>
      </div>
      
      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        TechVora
      </span>
    </div>
  );
};

export default Logo;
