
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="luxury-serif text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to own your dream luxury vehicle? Our specialists are here to provide 
            personalized service and expert guidance.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Label htmlFor="email">Email Address *</Label>
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
                <Label htmlFor="interest">Interest *</Label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-input bg-background rounded-md"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="bentley">Bentley</option>
                  <option value="rolls-royce">Rolls-Royce</option>
                  <option value="mclaren">McLaren</option>
                  <option value="lamborghini">Lamborghini</option>
                  <option value="ferrari">Ferrari</option>
                  <option value="aston-martin">Aston Martin</option>
                  <option value="general">General Inquiry</option>
                  <option value="service">Service & Support</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 border border-input bg-background rounded-md resize-none"
                  placeholder="Tell us about your requirements, preferred models, or any specific questions..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-luxury-gradient hover:opacity-90" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to provide 
                you with the best luxury automotive experience.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Our Showroom</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="p-6 border rounded-lg hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold mb-2">LuxuryMotors Showroom</h3>
                      <p className="text-muted-foreground">
                        Premium Auto Complex<br />
                        Bandra Kurla Complex<br />
                        Mumbai, Maharashtra 400051<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 border rounded-lg hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        Sales: +91 98765 43210<br />
                        Service: +91 98765 43211<br />
                        Toll-Free: 1800-LUXURY (1800-589879)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 border rounded-lg hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        Sales: sales@luxurymotors.in<br />
                        Service: service@luxurymotors.in<br />
                        General: info@luxurymotors.in
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-6 border rounded-lg hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🕒</div>
                    <div>
                      <h3 className="font-semibold mb-2">Operating Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 10:00 AM - 8:00 PM<br />
                        Sunday: 12:00 PM - 6:00 PM<br />
                        <span className="text-sm italic">Private appointments available 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-luxury-dark-gradient text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Premium Services</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">★</span>
                  <span>Private vehicle consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">★</span>
                  <span>Exclusive test drive experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">★</span>
                  <span>Home/office vehicle presentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">★</span>
                  <span>Finance and insurance assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">★</span>
                  <span>White-glove delivery service</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">★</span>
                  <span>Lifetime concierge support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map/Location Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>
          <div className="bg-muted/50 p-12 rounded-lg">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-lg text-muted-foreground mb-6">
              Located in the heart of Mumbai's premium business district, 
              our showroom is easily accessible and features the finest collection 
              of luxury vehicles in India.
            </p>
            <Button className="bg-luxury-gradient hover:opacity-90">
              Get Directions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
