
import React, { useState, useMemo } from 'react';
import { cars, brands } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = car.price;
        switch (priceRange) {
          case 'under-30':
            matchesPrice = price < 30000000;
            break;
          case '30-50':
            matchesPrice = price >= 30000000 && price < 50000000;
            break;
          case '50-100':
            matchesPrice = price >= 50000000 && price < 100000000;
            break;
          case 'over-100':
            matchesPrice = price >= 100000000;
            break;
        }
      }

      return matchesSearch && matchesBrand && matchesPrice;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedBrand, sortBy, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('all');
    setSortBy('name');
    setPriceRange('all');
  };

  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element w-96 h-96 bg-luxury-gold/5 top-20 -left-48 animate-float" style={{ animationDelay: '0s' }} />
        <div className="floating-element w-64 h-64 bg-luxury-accent/8 top-1/3 -right-32 animate-float" style={{ animationDelay: '3s' }} />
        <div className="floating-element w-80 h-80 bg-luxury-purple/6 bottom-20 left-1/4 animate-float" style={{ animationDelay: '6s' }} />
        <div className="floating-element w-48 h-48 bg-luxury-emerald/7 top-2/3 right-1/4 animate-float" style={{ animationDelay: '9s' }} />
      </div>

      <div className="container relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-luxury-gold animate-pulse" />
            Premium Collection
          </div>
          <h1 className="luxury-serif text-6xl md:text-8xl font-bold mb-6 animate-glow">
            Luxury Car Collection
          </h1>
          <div className="w-32 h-1 bg-luxury-gradient mx-auto mb-8 rounded-full animate-shimmer" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Discover our complete range of premium vehicles from the world&apos;s most prestigious brands
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="mb-12 space-y-6">
          <div className="luxury-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <SlidersHorizontal className="w-6 h-6 text-luxury-gold" />
              <h3 className="text-xl font-semibold">Refine Your Search</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search luxury cars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-luxury-gold/20 focus:border-luxury-gold/50"
                />
              </div>
              
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="glass border-luxury-gold/20 focus:border-luxury-gold/50">
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent className="glass">
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand.id} value={brand.id} className="capitalize">
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="glass border-luxury-gold/20 focus:border-luxury-gold/50">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="glass">
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-30">Under ₹3 Cr</SelectItem>
                  <SelectItem value="30-50">₹3-5 Cr</SelectItem>
                  <SelectItem value="50-100">₹5-10 Cr</SelectItem>
                  <SelectItem value="over-100">Over ₹10 Cr</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="glass border-luxury-gold/20 focus:border-luxury-gold/50">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="glass">
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="brand">Brand</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={clearFilters} variant="outline" className="glass border-luxury-gold/30 hover:bg-luxury-gold/10 magnetic">
                <Filter className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Enhanced Results count */}
          <div className="flex items-center justify-between">
            <p className="text-lg text-muted-foreground">
              Showing <span className="text-luxury-gradient font-bold">{filteredAndSortedCars.length}</span> of <span className="text-luxury-gradient font-bold">{cars.length}</span> luxury vehicles
            </p>
          </div>
        </div>

        {/* Enhanced Cars Grid */}
        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredAndSortedCars.map((car, index) => (
              <div 
                key={car.id}
                className="animate-fade-in magnetic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="luxury-card p-16 max-w-2xl mx-auto">
              <div className="text-8xl mb-8 animate-bounce-slow">🔍</div>
              <h3 className="text-3xl font-bold mb-4 text-luxury-gradient">No cars found</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We couldn&apos;t find any vehicles matching your criteria. Try adjusting your search parameters.
              </p>
              <Button onClick={clearFilters} className="btn-luxury text-lg px-10 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
