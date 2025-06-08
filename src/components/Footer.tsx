
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="luxury-serif text-xl font-bold bg-luxury-gradient bg-clip-text text-transparent">
              LuxuryMotors
            </div>
            <p className="text-sm text-muted-foreground">
              Experience the pinnacle of automotive luxury with our curated collection 
              of the world's finest vehicles.
            </p>
            <div className="flex space-x-4">
              <div className="text-2xl">🚗</div>
              <div className="text-2xl">✨</div>
              <div className="text-2xl">🏆</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/cars" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                All Cars
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h3 className="font-semibold">Luxury Brands</h3>
            <div className="space-y-2">
              <Link to="/brand/bentley" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Bentley
              </Link>
              <Link to="/brand/rolls-royce" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Rolls-Royce
              </Link>
              <Link to="/brand/mclaren" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                McLaren
              </Link>
              <Link to="/brand/lamborghini" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Lamborghini
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📍 Luxury Motors Showroom<br />Mumbai, Maharashtra, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@luxurymotors.in</p>
              <p>🕒 Mon-Sat: 10AM-8PM<br />Sunday: 12PM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 LuxuryMotors. All rights reserved. | Premium automotive excellence since 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
