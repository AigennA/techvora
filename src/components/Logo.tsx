import { Sparkles } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Animated glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-black rounded-xl blur-md opacity-60 animate-pulse"></div>
        
        {/* Main logo container with gradient border */}
        <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-black p-[2px] rounded-xl">
          <div className="bg-background p-2 rounded-xl">
            <Sparkles className="w-6 h-6 text-red-600" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <span className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
        TechVora
      </span>
    </div>
  );
};

export default Logo;
