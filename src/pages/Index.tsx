import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getFeaturedCars, brands } from '@/data/cars';
import CarCard from '@/components/CarCard';
import BackgroundCarousel from '@/components/BackgroundCarousel';
import { ArrowDown, Star, Shield, Truck, Award } from 'lucide-react';

const Index = () => {
  const featuredCars = getFeaturedCars();

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Enhanced Hero Section with Background Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <BackgroundCarousel />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-luxury-gold/20 rounded-full animate-float blur-xl" />
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-luxury-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-luxury-gold/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-luxury-copper/15 rounded-full animate-float blur-xl" style={{ animationDelay: '3s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white animate-slide-up max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="luxury-serif text-7xl md:text-9xl font-bold mb-6 text-luxury-gradient animate-glow">
              LuxuryMotors
            </h1>
            <div className="w-24 h-1 bg-luxury-gradient mx-auto mb-6 rounded-full animate-shimmer" />
          </div>
          
          <p className="text-xl md:text-3xl mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            Experience the pinnacle of automotive excellence with our curated collection 
            of the world&apos;s most <span className="text-luxury-gradient font-semibold">prestigious vehicles</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/cars">
              <Button className="btn-luxury text-lg px-12 py-4 rounded-full">
                Explore Collection
              </Button>
            </Link>
            <Link to="/brands">
              <Button size="lg" variant="outline" className="glass text-white border-white/30 hover:bg-white/10 text-lg px-12 py-4 rounded-full backdrop-blur-xl">
                Discover Brands
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-luxury-gold" />
              <span>Authenticated Luxury</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-luxury-gold" />
              <span>Premium Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-luxury-gold" />
              <span>Worldwide Delivery</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced Featured Brands */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gradient rounded-full text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Premium Collection
            </div>
            <h2 className="luxury-serif text-5xl md:text-6xl font-bold mb-6 text-luxury-gradient">
              Prestigious Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection from the world&apos;s most legendary automotive manufacturers, 
              each representing the pinnacle of luxury and performance.
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
                <div className="luxury-card p-8 group-hover:border-luxury-gold/50 transition-all duration-500">
                  <div className="w-20 h-20 mx-auto mb-6 bg-luxury-gradient rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {brand.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-luxury-gradient transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {brand.carsCount} Exclusive Models
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Cars */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 text-luxury-gold" />
              Handpicked Excellence
            </div>
            <h2 className="luxury-serif text-5xl md:text-6xl font-bold mb-6">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handpicked masterpieces that represent the absolute pinnacle of automotive artistry, 
              engineering excellence, and timeless design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div 
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/cars">
              <Button className="btn-luxury text-lg px-12 py-4 rounded-full">
                View Complete Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-dark-gradient" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in glass rounded-2xl p-8 hover-lift">
              <div className="text-5xl font-bold mb-4 text-luxury-gradient">60+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Luxury Vehicles</div>
            </div>
            <div className="animate-fade-in glass rounded-2xl p-8 hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-4 text-luxury-gradient">6</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Premium Brands</div>
            </div>
            <div className="animate-fade-in glass rounded-2xl p-8 hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-4 text-luxury-gradient">100%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Authentic</div>
            </div>
            <div className="animate-fade-in glass rounded-2xl p-8 hover-lift" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-4 text-luxury-gradient">24/7</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Concierge Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="luxury-serif text-5xl md:text-6xl font-bold mb-6 text-luxury-gradient">
              Ready to Own Your Dream?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our luxury automotive specialists to schedule a private viewing 
              and experience these magnificent vehicles firsthand. Your dream car awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="btn-luxury text-lg px-12 py-4 rounded-full">
                  Schedule Private Viewing
                </Button>
              </Link>
              <Link to="/cars">
                <Button size="lg" variant="outline" className="glass border-border/50 hover:bg-accent/50 text-lg px-12 py-4 rounded-full backdrop-blur-xl">
                  Browse Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
