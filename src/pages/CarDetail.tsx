
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById, getBrandById } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/formatPrice';
import { ArrowUp } from 'lucide-react';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const car = id ? getCarById(id) : undefined;
  const brand = car ? getBrandById(car.brand) : undefined;

  if (!car || !brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Link to="/cars">
            <Button>Back to Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(car, selectedColor || car.colors[0]);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/cars" className="hover:text-foreground">Cars</Link>
          <span className="mx-2">/</span>
          <Link to={`/brand/${brand.id}`} className="hover:text-foreground capitalize">
            {brand.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{car.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[16/9] overflow-hidden rounded-lg border">
              <img 
                src={car.images[selectedImageIndex] || car.image} 
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {car.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-[16/9] overflow-hidden rounded border-2 transition-colors ${
                      selectedImageIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${car.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="capitalize">{brand.name}</Badge>
                {car.isNew && <Badge className="bg-green-500">New</Badge>}
                {car.isFeatured && <Badge className="bg-luxury-gradient">Featured</Badge>}
                {!car.inStock && <Badge variant="destructive">Out of Stock</Badge>}
              </div>
              
              <h1 className="luxury-serif text-4xl font-bold mb-2">{car.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{car.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">{formatPrice(car.price)}</div>
                {car.originalPrice && car.originalPrice > car.price && (
                  <div className="text-xl text-muted-foreground line-through">
                    {formatPrice(car.originalPrice)}
                  </div>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {car.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-colors ${
                      selectedColor === color 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Engine</span>
                  <span>{car.specifications.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Power</span>
                  <span>{car.specifications.power}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">0-100 km/h</span>
                  <span>{car.specifications.acceleration}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Top Speed</span>
                  <span>{car.specifications.topSpeed}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Transmission</span>
                  <span>{car.specifications.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Drivetrain</span>
                  <span>{car.specifications.drivetrain}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Button 
                onClick={handleAddToCart}
                disabled={!car.inStock}
                className="flex-1 bg-luxury-gradient hover:opacity-90"
                size="lg"
              >
                {car.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Link to={`/brand/${brand.id}`}>
                <Button variant="outline" size="lg">
                  View More {brand.name}
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Interested in this vehicle?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our luxury car specialists for a personalized consultation and test drive.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
                <Button variant="outline">
                  📞 +91 98765 43210
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="fixed bottom-8 right-8">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="sm"
            className="rounded-full w-12 h-12 bg-luxury-gradient hover:opacity-90"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
