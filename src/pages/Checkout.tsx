
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatPrice } from '@/utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'upi'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast({
        title: "Order Confirmed!",
        description: "Your luxury vehicle order has been confirmed. We'll contact you shortly.",
      });
      navigate('/order-success');
    }, 3000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some luxury cars to your cart first.</p>
          <Button onClick={() => navigate('/cars')}>
            Browse Cars
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-6xl">
        <h1 className="luxury-serif text-4xl font-bold mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.car.id} className="flex space-x-4 p-4 border rounded-lg">
                  <img 
                    src={item.car.image} 
                    alt={item.car.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.car.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{item.car.brand}</p>
                    {item.selectedColor && (
                      <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Quantity: {item.quantity}</span>
                      <span className="font-semibold">{formatPrice(item.car.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatPrice(state.total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Registration & Documentation:</span>
                <span>₹2,50,000</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance (1 Year):</span>
                <span>₹5,00,000</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t pt-2">
                <span>Total:</span>
                <span>{formatPrice(state.total + 250000 + 500000)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Billing Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">PIN Code *</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="paymentMethod">Payment Method *</Label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-input bg-background rounded-md"
                  required
                >
                  <option value="upi">UPI Payment</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="emi">EMI (Bank Transfer)</option>
                </select>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Payment Information</h3>
                <p className="text-sm text-muted-foreground">
                  A deposit of ₹10,00,000 is required to confirm your order. 
                  Our luxury car specialist will contact you within 24 hours to arrange 
                  the remaining payment and delivery details.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-luxury-gradient hover:opacity-90" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Payment...
                  </div>
                ) : (
                  `Confirm Order - ${formatPrice(state.total + 250000 + 500000)}`
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By placing this order, you agree to our terms of service and privacy policy. 
                All luxury vehicle sales are subject to verification and final approval.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
