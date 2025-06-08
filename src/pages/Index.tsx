
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getFeaturedCars, brands } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const featuredCars = getFeaturedCars();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-luxury-dark-gradient" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-luxury-gold/20 rounded-full animate-float" />
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-luxury-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-luxury-gold/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center text-white animate-slide-up">
          <h1 className="luxury-serif text-6xl md:text-8xl font-bold mb-6 animate-glow">
            LuxuryMotors
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of automotive excellence with our curated collection 
            of the world's most prestigious vehicles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gradient hover:opacity-90 text-lg px-8">
                Explore Collection
              </Button>
            </Link>
            <Link to="/brands">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8">
                View Brands
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="luxury-serif text-4xl font-bold mb-4">Prestigious Brands</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our exclusive collection from the world's most legendary automotive manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <Link 
                key={brand.id} 
                to={`/brand/${brand.id}`}
                className="group text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {brand.name.charAt(0)}
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {brand.carsCount} Models
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="luxury-serif text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked masterpieces that represent the absolute pinnacle of automotive artistry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div 
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gradient hover:opacity-90">
                View All Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-dark-gradient text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-sm uppercase tracking-wide">Luxury Vehicles</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-sm uppercase tracking-wide">Premium Brands</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wide">Authentic</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="luxury-serif text-4xl font-bold mb-4">Ready to Own Your Dream?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our luxury automotive specialists to schedule a private viewing 
            and experience these magnificent vehicles firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-luxury-gradient hover:opacity-90">
                Schedule Viewing
              </Button>
            </Link>
            <Link to="/cars">
              <Button size="lg" variant="outline">
                Browse Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
