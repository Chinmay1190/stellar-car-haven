
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { brands } from '@/data/cars';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { state, toggleCart } = useCart();
  const { theme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50 backdrop-blur-2xl">
      <div className="container flex h-20 items-center">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-luxury-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div className="luxury-serif text-2xl font-bold text-luxury-gradient group-hover:scale-105 transition-transform duration-300">
            LuxuryMotors
          </div>
        </Link>

        {/* Enhanced Navigation */}
        <nav className="flex flex-1 items-center justify-center space-x-8 mx-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-luxury-gradient transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gradient transition-all duration-300 group-hover:w-full" />
          </Link>
          
          <div className="relative group">
            <span className="text-sm font-medium text-muted-foreground hover:text-luxury-gradient transition-all duration-300 cursor-pointer">
              Brands
            </span>
            <div className="absolute top-full left-0 mt-3 w-80 luxury-card p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <h3 className="font-semibold mb-4 text-luxury-gradient">Premium Brands</h3>
              <div className="grid grid-cols-2 gap-3">
                {brands.map((brand) => (
                  <Link
                    key={brand.id}
                    to={`/brand/${brand.id}`}
                    className="text-sm text-muted-foreground hover:text-luxury-gradient transition-all duration-300 p-3 hover:bg-accent/50 rounded-lg flex items-center gap-2"
                  >
                    <div className="w-6 h-6 bg-luxury-gradient rounded text-white text-xs flex items-center justify-center">
                      {brand.name.charAt(0)}
                    </div>
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link
            to="/cars"
            className="text-sm font-medium text-muted-foreground hover:text-luxury-gradient transition-all duration-300 relative group"
          >
            Collection
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gradient transition-all duration-300 group-hover:w-full" />
          </Link>
          
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-luxury-gradient transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gradient transition-all duration-300 group-hover:w-full" />
          </Link>
          
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-luxury-gradient transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gradient transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Enhanced Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={toggleCart}
            className="relative glass border-border/50 hover:bg-accent/50 backdrop-blur-xl hover-lift"
          >
            <ShoppingCart className="h-4 w-4" />
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-luxury-gradient text-xs text-white flex items-center justify-center animate-glow shadow-lg">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
