import { Sparkles } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Animated glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-xl blur-md opacity-60 animate-pulse"></div>
        
        {/* Main logo container with gradient border */}
        <div className="relative bg-gradient-to-br from-primary via-accent to-primary p-[2px] rounded-xl">
          <div className="bg-background p-2 rounded-xl">
            <Sparkles className="w-6 h-6 text-primary" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
          NexaStore
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-widest">PREMIUM TECH</span>
      </div>
    </div>
  );
};

export default Logo;
