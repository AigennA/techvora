import techStoreLogo from "@/assets/techstore-logo.png";

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <img 
      src={techStoreLogo} 
      alt="TechVora Logo" 
      className={className}
    />
  );
};

export default Logo;
