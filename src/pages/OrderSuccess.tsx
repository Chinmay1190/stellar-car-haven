
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl text-white">✓</span>
        </div>
        
        <h1 className="luxury-serif text-4xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          Thank you for choosing LuxuryMotors. Your order has been successfully placed.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <h2 className="font-semibold mb-4">What happens next?</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-luxury-gradient rounded-full flex items-center justify-center text-white text-xs">1</div>
              <span>Our luxury car specialist will contact you within 24 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-luxury-gradient rounded-full flex items-center justify-center text-white text-xs">2</div>
              <span>We'll arrange a private viewing and test drive</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-luxury-gradient rounded-full flex items-center justify-center text-white text-xs">3</div>
              <span>Complete documentation and final payment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-luxury-gradient rounded-full flex items-center justify-center text-white text-xs">4</div>
              <span>Vehicle delivery at your preferred location</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Order confirmation and invoice have been sent to your email address.
            For any queries, contact us at <strong>+91 98765 43210</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gradient hover:opacity-90">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-luxury-dark-gradient text-white rounded-lg">
          <h3 className="font-semibold mb-2">Premium Service Guarantee</h3>
          <p className="text-sm opacity-90">
            Every LuxuryMotors purchase includes complimentary concierge service, 
            comprehensive warranty, and exclusive access to our VIP maintenance program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
