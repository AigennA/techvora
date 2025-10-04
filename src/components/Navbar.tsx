import { ShoppingCart, Search, Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
              TechStore
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#accessories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Phone Accessories
              </a>
              <a href="#audio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Audio
              </a>
              <a href="#charging" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Charging
              </a>
              <a href="#smart-devices" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Smart Devices
              </a>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 w-64 bg-background"
              />
            </div>
            
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
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => navigate("/auth")}>
                Sign In
              </Button>
            )}

            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Input 
                placeholder="Search products..." 
                className="bg-background"
              />
              <a href="#accessories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Phone Accessories
              </a>
              <a href="#audio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Audio
              </a>
              <a href="#charging" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Charging
              </a>
              <a href="#smart-devices" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Smart Devices
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
