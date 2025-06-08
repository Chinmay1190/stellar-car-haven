
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/formatPrice';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-card border rounded-lg overflow-hidden hover-lift animate-fade-in">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {car.isNew && (
            <Badge className="bg-green-500 text-white">New</Badge>
          )}
          {car.isFeatured && (
            <Badge className="bg-luxury-gradient text-white">Featured</Badge>
          )}
          {!car.inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{car.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">{car.brand}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {car.description}
        </p>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Power:</span>
            <span>{car.specifications.power}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">0-100:</span>
            <span>{car.specifications.acceleration}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">{formatPrice(car.price)}</p>
            {car.originalPrice && car.originalPrice > car.price && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button 
            onClick={() => addToCart(car)}
            disabled={!car.inStock}
            className="bg-luxury-gradient hover:opacity-90"
          >
            {car.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
