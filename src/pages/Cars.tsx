
import React, { useState, useMemo } from 'react';
import { cars, brands } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="luxury-serif text-4xl font-bold mb-4">Luxury Car Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of premium vehicles from the world's most prestigious brands
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Input
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map(brand => (
                  <SelectItem key={brand.id} value={brand.id} className="capitalize">
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-30">Under ₹3 Cr</SelectItem>
                <SelectItem value="30-50">₹3-5 Cr</SelectItem>
                <SelectItem value="50-100">₹5-10 Cr</SelectItem>
                <SelectItem value="over-100">Over ₹10 Cr</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredAndSortedCars.length} of {cars.length} cars
            </p>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCars.map((car, index) => (
              <div 
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No cars found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or clear the filters.
            </p>
            <Button onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
