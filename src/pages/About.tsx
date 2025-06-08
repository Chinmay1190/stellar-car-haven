
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="luxury-serif text-5xl font-bold mb-6">About LuxuryMotors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your gateway to the world's most prestigious automotive collection, 
            where luxury meets excellence and dreams become reality.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, LuxuryMotors was born from a passion for automotive excellence 
                  and an unwavering commitment to providing India's elite with access to the 
                  world's most prestigious vehicles.
                </p>
                <p>
                  We understand that purchasing a luxury vehicle is more than a transaction—it's 
                  the beginning of an extraordinary journey. Our curated collection features only 
                  the finest automobiles from legendary manufacturers like Bentley, Rolls-Royce, 
                  McLaren, Lamborghini, Ferrari, and Aston Martin.
                </p>
                <p>
                  Every vehicle in our showroom represents the pinnacle of engineering, craftsmanship, 
                  and design. We don't just sell cars; we deliver dreams, aspirations, and the 
                  ultimate expression of success.
                </p>
              </div>
            </div>
            <div className="bg-luxury-gradient p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                To redefine luxury automotive retail in India by providing an unparalleled 
                experience that matches the excellence of the vehicles we represent.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>
                To be India's most trusted destination for luxury automobiles, setting new 
                standards in customer service, authenticity, and automotive expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover-lift">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from vehicle selection 
                to customer service, ensuring every interaction exceeds expectations.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg hover-lift">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-muted-foreground">
                Built on transparency and integrity, we provide authentic vehicles with 
                complete documentation and verified provenance.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg hover-lift">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Luxury</h3>
              <p className="text-muted-foreground">
                Every aspect of our service reflects the luxury of our vehicles, providing 
                a premium experience worthy of our distinguished clientele.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16 bg-muted/50 p-12 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60+</div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground">Premium Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground">Luxury Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground">Authentic</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground">Concierge Support</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Private Consultations</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized sessions with our luxury automotive specialists to understand 
                    your preferences and requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Exclusive Test Drives</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience our vehicles in a controlled, luxury environment with full 
                    insurance and professional guidance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Comprehensive Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete handling of all paperwork, registration, and legal requirements 
                    for a hassle-free purchase experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="font-semibold mb-2">White-Glove Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional delivery service to your preferred location with complete 
                    vehicle orientation and handover ceremony.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="font-semibold mb-2">Lifetime Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Ongoing relationship with dedicated account management, maintenance 
                    coordination, and exclusive event invitations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="font-semibold mb-2">Investment Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Market analysis and resale value protection programs to safeguard 
                    your automotive investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-luxury-dark-gradient text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Experience Luxury Like Never Before</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Visit our showroom or schedule a private consultation to discover why LuxuryMotors 
            is India's premier destination for luxury automobiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Schedule Visit
              </Button>
            </Link>
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Browse Collection
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
