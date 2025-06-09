
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarsForBrand, getBrandById } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';

const Brand = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brandId ? getBrandById(brandId) : undefined;
  const cars = brandId ? getCarsForBrand(brandId) : [];

  // Brand styling configurations
  const brandStyles = {
    ferrari: {
      logo: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=200&fit=crop&auto=format&q=80',
      bg: 'linear-gradient(135deg, #FF0000 0%, #8B0000 100%)',
      bgImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&auto=format&q=80',
      textColor: 'text-white'
    },
    lamborghini: {
      logo: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=200&fit=crop&auto=format&q=80',
      bg: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&auto=format&q=80',
      textColor: 'text-black'
    },
    porsche: {
      logo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=200&fit=crop&auto=format&q=80',
      bg: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      bgImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&h=1080&fit=crop&auto=format&q=80',
      textColor: 'text-white'
    },
    mclaren: {
      logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&auto=format&q=80',
      bg: 'linear-gradient(135deg, #FF8000 0%, #FF4500 100%)',
      bgImage: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1920&h=1080&fit=crop&auto=format&q=80',
      textColor: 'text-white'
    },
    bugatti: {
      logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=200&fit=crop&auto=format&q=80',
      bg: 'linear-gradient(135deg, #0066CC 0%, #003D7A 100%)',
      bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop&auto=format&q=80',
      textColor: 'text-white'
    },
    koenigsegg: {
      logo: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&h=200&fit=crop&auto=format&q=80',
      bg: 'linear-gradient(135deg, #C0C0C0 0%, #696969 100%)',
      bgImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&h=1080&fit=crop&auto=format&q=80',
      textColor: 'text-black'
    }
  };

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

  const brandStyle = brandStyles[brand.id as keyof typeof brandStyles];
  const inStockCars = cars.filter(car => car.inStock);
  const outOfStockCars = cars.filter(car => !car.inStock);

  return (
    <div className="min-h-screen">
      {/* Brand Hero Section with Background */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${brandStyle?.bgImage})`,
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        />
        
        {/* Brand Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: brandStyle?.bg }}
        />
        
        {/* Content */}
        <div className="relative z-10 container h-full flex items-center justify-center">
          <div className="text-center text-white">
            {/* Brand Logo */}
            <div className="w-48 h-24 mx-auto mb-6 overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={brandStyle?.logo} 
                alt={`${brand.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="luxury-serif text-6xl font-bold mb-4 animate-fade-in">
              {brand.name}
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
              {brand.heritage}
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Brand Description */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {brand.description}
            </p>
            <div 
              className="p-8 rounded-2xl text-white shadow-2xl"
              style={{ background: brandStyle?.bg }}
            >
              <p className="italic text-lg leading-relaxed">
                "{brand.heritage}"
              </p>
            </div>
          </div>
        </div>

        {/* Available Cars */}
        {inStockCars.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-bold">Available Models</h2>
              <span className="px-4 py-2 bg-luxury-gradient text-white rounded-full text-sm font-medium">
                {inStockCars.length} in stock
              </span>
            </div>
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
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-bold text-muted-foreground">Currently Unavailable</h2>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                {outOfStockCars.length} models
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outOfStockCars.map((car, index) => (
                <div 
                  key={car.id}
                  className="animate-fade-in opacity-60 grayscale"
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
        <section className="text-center py-16">
          <div 
            className="rounded-2xl p-12 text-white shadow-2xl"
            style={{ background: brandStyle?.bg }}
          >
            <h2 className="text-4xl font-bold mb-4">Interested in {brand.name}?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our {brand.name} specialists are ready to help you find the perfect vehicle 
              and arrange a private viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30">
                  Contact Specialist
                </Button>
              </Link>
              <Link to="/cars">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                  View All Brands
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brand;
