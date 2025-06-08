
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="luxury-serif text-2xl font-bold bg-luxury-gradient bg-clip-text text-transparent">
            LuxuryMotors
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-1 items-center justify-center space-x-6 mx-6">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Brands
            </span>
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-4 grid grid-cols-2 gap-2">
                {brands.map((brand) => (
                  <Link
                    key={brand.id}
                    to={`/brand/${brand.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/cars"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            All Cars
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={toggleCart}
            className="relative hover-lift"
          >
            <ShoppingCart className="h-4 w-4" />
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-luxury-gradient text-xs text-white flex items-center justify-center animate-glow">
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
