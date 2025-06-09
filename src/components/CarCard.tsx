
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/formatPrice';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Gauge, Heart, Eye, ShoppingCart, Sparkles } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative luxury-card overflow-hidden hover-lift animate-fade-in">
      {/* Enhanced Image Container */}
      <div className="aspect-[16/9] overflow-hidden relative">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Enhanced Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Enhanced Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {car.isNew && (
            <Badge className="bg-green-500/90 text-white backdrop-blur-sm border-0 shadow-xl animate-pulse">
              <Sparkles className="w-3 h-3 mr-1" />
              New
            </Badge>
          )}
          {car.isFeatured && (
            <Badge className="bg-luxury-gradient text-white backdrop-blur-sm border-0 shadow-xl animate-glow">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          {!car.inStock && (
            <Badge variant="destructive" className="backdrop-blur-sm border-0 shadow-xl">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Enhanced Price Badge */}
        <div className="absolute top-4 right-4 glass rounded-xl px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-white font-bold text-lg">{formatPrice(car.price)}</span>
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <Button size="sm" className="glass w-10 h-10 p-0 border-white/20 hover:bg-white/20">
            <Heart className="w-4 h-4 text-white" />
          </Button>
          <Link to={`/car/${car.id}`}>
            <Button size="sm" className="glass w-10 h-10 p-0 border-white/20 hover:bg-white/20">
              <Eye className="w-4 h-4 text-white" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-2xl group-hover:text-luxury-gradient transition-all duration-300 leading-tight">
                {car.name}
              </h3>
              <p className="text-lg text-muted-foreground capitalize font-medium mt-1">
                {car.brand}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {car.description}
          </p>
        </div>

        {/* Enhanced Specifications */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-3 rounded-xl border border-luxury-gold/20">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-luxury-gold" />
                Power
              </span>
              <span className="text-sm font-bold text-luxury-gradient">{car.specifications.power}</span>
            </div>
          </div>
          <div className="glass p-3 rounded-xl border border-luxury-gold/20">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-2">
                <Gauge className="w-4 h-4 text-luxury-gold" />
                0-100km/h
              </span>
              <span className="text-sm font-bold text-luxury-gradient">{car.specifications.acceleration}</span>
            </div>
          </div>
        </div>

        {/* Enhanced Price Section */}
        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-luxury-gradient">
              {formatPrice(car.price)}
            </p>
            {car.originalPrice && car.originalPrice > car.price && (
              <p className="text-lg text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
          {car.originalPrice && car.originalPrice > car.price && (
            <div className="inline-flex px-3 py-1 bg-green-500/10 text-green-600 text-sm font-medium rounded-full border border-green-500/20">
              Save {formatPrice(car.originalPrice - car.price)}
            </div>
          )}
        </div>

        {/* Enhanced Actions */}
        <div className="flex gap-4 pt-4">
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full glass border-luxury-gold/30 hover:bg-luxury-gold/10 backdrop-blur-xl transition-all duration-300 py-3"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </Link>
          <Button 
            onClick={() => addToCart(car)}
            disabled={!car.inStock}
            className="btn-luxury px-8 disabled:opacity-50 disabled:cursor-not-allowed py-3"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {car.inStock ? 'Add to Cart' : 'Sold Out'}
          </Button>
        </div>
      </div>

      {/* Enhanced Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/3 via-luxury-accent/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none overflow-hidden">
        <div className="particle w-1 h-1 bg-luxury-gold rounded-full absolute top-4 left-8" style={{ animationDelay: '0s' }} />
        <div className="particle w-1 h-1 bg-luxury-accent rounded-full absolute top-8 right-12" style={{ animationDelay: '1s' }} />
        <div className="particle w-1 h-1 bg-luxury-purple rounded-full absolute bottom-8 left-6" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default CarCard;
