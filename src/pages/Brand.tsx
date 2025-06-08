
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarsForBrand, getBrandById } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';

const Brand = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brandId ? getBrandById(brandId) : undefined;
  const cars = brandId ? getCarsForBrand(brandId) : [];

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Brand not found</h1>
          <Link to="/cars">
            <Button>View All Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const inStockCars = cars.filter(car => car.inStock);
  const outOfStockCars = cars.filter(car => !car.inStock);

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Brand Header */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold text-4xl">
            {brand.name.charAt(0)}
          </div>
          <h1 className="luxury-serif text-5xl font-bold mb-4">{brand.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {brand.description}
          </p>
          <div className="bg-muted/50 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              {brand.heritage}
            </p>
          </div>
        </div>

        {/* Available Cars */}
        {inStockCars.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Available Models ({inStockCars.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inStockCars.map((car, index) => (
                <div 
                  key={car.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Out of Stock Cars */}
        {outOfStockCars.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Currently Unavailable ({outOfStockCars.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outOfStockCars.map((car, index) => (
                <div 
                  key={car.id}
                  className="animate-fade-in opacity-60"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </section>
        )}

        {cars.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">No cars available</h3>
            <p className="text-muted-foreground mb-4">
              We're currently updating our {brand.name} collection. Please check back soon.
            </p>
            <Link to="/cars">
              <Button>
                View All Cars
              </Button>
            </Link>
          </div>
        )}

        {/* Contact CTA */}
        <section className="text-center py-16 bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Interested in {brand.name}?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our {brand.name} specialists are ready to help you find the perfect vehicle 
            and arrange a private viewing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-luxury-gradient hover:opacity-90">
                Contact Specialist
              </Button>
            </Link>
            <Link to="/cars">
              <Button size="lg" variant="outline">
                View All Brands
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brand;
