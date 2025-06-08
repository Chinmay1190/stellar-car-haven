
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/formatPrice';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Gauge } from 'lucide-react';

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
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Enhanced Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {car.isNew && (
            <Badge className="bg-green-500/90 text-white backdrop-blur-sm border-0 shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              New
            </Badge>
          )}
          {car.isFeatured && (
            <Badge className="bg-luxury-gradient text-white backdrop-blur-sm border-0 shadow-lg">
              <Zap className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          {!car.inStock && (
            <Badge variant="destructive" className="backdrop-blur-sm border-0 shadow-lg">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-bold text-sm">{formatPrice(car.price)}</span>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-xl group-hover:text-luxury-gradient transition-colors duration-300">
                {car.name}
              </h3>
              <p className="text-sm text-muted-foreground capitalize font-medium">
                {car.brand}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {car.description}
          </p>
        </div>

        {/* Enhanced Specifications */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Power
            </span>
            <span className="text-xs font-semibold">{car.specifications.power}</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Gauge className="w-3 h-3" />
              0-100km/h
            </span>
            <span className="text-xs font-semibold">{car.specifications.acceleration}</span>
          </div>
        </div>

        {/* Enhanced Price Section */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-luxury-gradient">
              {formatPrice(car.price)}
            </p>
            {car.originalPrice && car.originalPrice > car.price && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
          {car.originalPrice && car.originalPrice > car.price && (
            <div className="inline-flex px-2 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded-full">
              Save {formatPrice(car.originalPrice - car.price)}
            </div>
          )}
        </div>

        {/* Enhanced Actions */}
        <div className="flex gap-3 pt-2">
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full glass border-border/50 hover:bg-accent/50 backdrop-blur-xl transition-all duration-300"
            >
              View Details
            </Button>
          </Link>
          <Button 
            onClick={() => addToCart(car)}
            disabled={!car.inStock}
            className="btn-luxury px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {car.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>

      {/* Enhanced Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default CarCard;
