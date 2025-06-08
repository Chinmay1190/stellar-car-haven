
import { Car, Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'bentley',
    name: 'Bentley',
    logo: '/placeholder.svg',
    description: 'Extraordinary journeys demand extraordinary motor cars.',
    heritage: 'Since 1919, Bentley has defined luxury motoring with unparalleled craftsmanship.',
    carsCount: 10
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    logo: '/placeholder.svg',
    description: 'The pinnacle of luxury and automotive excellence.',
    heritage: 'Creating the world\'s finest motor cars since 1904.',
    carsCount: 10
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: '/placeholder.svg',
    description: 'Pure performance. Uncompromising luxury.',
    heritage: 'Racing heritage meets road car excellence.',
    carsCount: 10
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: '/placeholder.svg',
    description: 'Expect the unexpected.',
    heritage: 'Italian excellence and innovative design since 1963.',
    carsCount: 10
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: '/placeholder.svg',
    description: 'The epitome of Italian excellence.',
    heritage: 'Racing passion and luxury combined since 1947.',
    carsCount: 10
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    logo: '/placeholder.svg',
    description: 'Beautiful. Powerful. Distinctive.',
    heritage: 'British luxury and performance since 1913.',
    carsCount: 10
  }
];

export const cars: Car[] = [
  // Bentley Cars
  {
    id: 'bentley-continental-gt',
    name: 'Continental GT',
    brand: 'bentley',
    price: 25000000,
    originalPrice: 27000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The definitive grand tourer, combining breathtaking performance with unrivalled luxury.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.7s',
      topSpeed: '333 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Mulliner Driving Specification', 'Naim Audio System', 'Massage Seats', 'Diamond Quilted Leather'],
    colors: ['Beluga Black', 'Storm Grey', 'Hallmark', 'Extreme Silver'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'bentley-flying-spur',
    name: 'Flying Spur',
    brand: 'bentley',
    price: 32000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The world\'s finest luxury performance sedan.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '333 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Four-Zone Climate Control', 'Bentley Rotating Display', 'Mood Lighting', 'Wellness Seating'],
    colors: ['Moonbeam Silver', 'Beluga Black', 'Glacier White', 'Thunder Grey'],
    inStock: true,
    isNew: true
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentayga',
    brand: 'bentley',
    price: 45000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The ultimate luxury SUV.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '542 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '290 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'AWD'
    },
    features: ['Bentley Dynamic Ride', 'Mulliner Hamper Set', 'Panoramic Roof', 'Off-Road Capability'],
    colors: ['Onyx Black', 'Silver Storm', 'Magnetic Grey', 'Fountain Blue'],
    inStock: true
  },
  {
    id: 'bentley-mulsanne',
    name: 'Mulsanne',
    brand: 'bentley',
    price: 55000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The flagship luxury sedan.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '530 HP',
      acceleration: '0-100 km/h in 5.1s',
      topSpeed: '296 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Extended Wheelbase', 'Rear Entertainment', 'Champagne Cooler', 'Picnic Tables'],
    colors: ['Royal Ebony', 'Moonbeam', 'Thunder', 'Glacier White'],
    inStock: false
  },
  {
    id: 'bentley-continental-gtc',
    name: 'Continental GTC',
    brand: 'bentley',
    price: 28000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Open-air grand touring at its finest.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '333 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Soft-Top Convertible', 'Neck Warmer', 'Wind Deflector', 'Tweed Interior'],
    colors: ['Sequin Blue', 'Beluga Black', 'Glacier White', 'Thunder Grey'],
    inStock: true
  },
  {
    id: 'bentley-continental-gt-speed',
    name: 'Continental GT Speed',
    brand: 'bentley',
    price: 30000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The most dynamic Continental GT ever.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '659 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '335 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Sport Plus Mode', 'Carbon Fiber Styling', 'Alcantara Interior', 'Sport Exhaust'],
    colors: ['Dark Sapphire', 'Beluga Black', 'St. James Red', 'Glacier White'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'bentley-bacalar',
    name: 'Bacalar',
    brand: 'bentley',
    price: 150000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Ultra-rare bespoke grand tourer.',
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '659 HP',
      acceleration: '0-100 km/h in 3.5s',
      topSpeed: '322 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Bespoke Bodywork', 'Open Cockpit', 'Sustainable Materials', 'Limited Edition'],
    colors: ['Bespoke Only'],
    inStock: false,
    isNew: true
  },
  {
    id: 'bentley-azure',
    name: 'Azure',
    brand: 'bentley',
    price: 35000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Classic luxury convertible.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '385 HP',
      acceleration: '0-100 km/h in 5.6s',
      topSpeed: '241 km/h',
      transmission: '4-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Classic Styling', 'Power Soft Top', 'Walnut Veneer', 'Connolly Leather'],
    colors: ['Royal Blue', 'Bentley Green', 'Silver Tempest', 'Black Cherry'],
    inStock: true
  },
  {
    id: 'bentley-arnage',
    name: 'Arnage',
    brand: 'bentley',
    price: 40000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Traditional British luxury.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '500 HP',
      acceleration: '0-100 km/h in 5.2s',
      topSpeed: '270 km/h',
      transmission: '6-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Traditional Interior', 'Picnic Tables', 'Lambswool Rugs', 'Chrome Details'],
    colors: ['Peacock Blue', 'Royal Ebony', 'Moonbeam', 'Racing Green'],
    inStock: true
  },
  {
    id: 'bentley-brooklands',
    name: 'Brooklands',
    brand: 'bentley',
    price: 38000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Grand touring coupe excellence.',
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '530 HP',
      acceleration: '0-100 km/h in 5.0s',
      topSpeed: '296 km/h',
      transmission: '6-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Two-Door Coupe', 'Luxury Interior', 'Premium Sound', 'Climate Control'],
    colors: ['Diamond Black', 'Glacier White', 'Thunder Grey', 'Fountain Blue'],
    inStock: true
  },

  // Rolls-Royce Cars
  {
    id: 'rolls-royce-phantom',
    name: 'Phantom',
    brand: 'rolls-royce',
    price: 85000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The pinnacle of luxury motoring.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.3s',
      topSpeed: '250 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Magic Carpet Ride', 'Starlight Headliner', 'Bespoke Audio', 'Spirit of Ecstasy'],
    colors: ['Arctic White', 'Black Badge', 'Jubilee Silver', 'Royal Blue'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'rolls-royce-cullinan',
    name: 'Cullinan',
    brand: 'rolls-royce',
    price: 65000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The luxury of Rolls-Royce in an SUV.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.2s',
      topSpeed: '250 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'AWD'
    },
    features: ['All-Terrain Capability', 'Viewing Suite', 'Recreation Module', 'Everywhere Comfort'],
    colors: ['Tuscan Sun', 'Arctic White', 'Black Badge', 'Salamanca Blue'],
    inStock: true,
    isNew: true
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Ghost',
    brand: 'rolls-royce',
    price: 55000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Post-luxury business sedan.',
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.8s',
      topSpeed: '250 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'AWD'
    },
    features: ['Planar Suspension', 'Illuminated Fascia', 'Micro-Environment Purification', 'Whisper-Quiet Cabin'],
    colors: ['Tempest Grey', 'Arctic White', 'Black Badge', 'Jubilee Silver'],
    inStock: true
  },
  {
    id: 'rolls-royce-wraith',
    name: 'Wraith',
    brand: 'rolls-royce',
    price: 48000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The most powerful Rolls-Royce in history.',
    specifications: {
      engine: '6.6L Twin-Turbo V12',
      power: '624 HP',
      acceleration: '0-100 km/h in 4.4s',
      topSpeed: '250 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Fastback Silhouette', 'Satellite Aided Transmission', 'Starlight Headliner', 'Power Reserve'],
    colors: ['Midnight Sapphire', 'Arctic White', 'Andalusian White', 'Diamond Black'],
    inStock: true
  },
  {
    id: 'rolls-royce-dawn',
    name: 'Dawn',
    brand: 'rolls-royce',
    price: 52000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The sexiest Rolls-Royce ever built.',
    specifications: {
      engine: '6.6L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.9s',
      topSpeed: '250 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Convertible Luxury', 'Air Collar System', 'Silent-Soft Convertible Roof', '80% New Components'],
    colors: ['Emerald Green', 'Arctic White', 'Black Badge', 'Jubilee Silver'],
    inStock: true
  },
  {
    id: 'rolls-royce-spectre',
    name: 'Spectre',
    brand: 'rolls-royce',
    price: 75000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'The first fully electric Rolls-Royce.',
    specifications: {
      engine: 'Dual Electric Motors',
      power: '577 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '250 km/h',
      transmission: 'Single-Speed',
      drivetrain: 'AWD'
    },
    features: ['Electric Luxury', '520km Range', 'Spirit of Innovation', 'Whisper-Quiet Operation'],
    colors: ['Tempest Grey', 'Arctic White', 'Black Badge', 'Andalusian White'],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'rolls-royce-silver-shadow',
    name: 'Silver Shadow',
    brand: 'rolls-royce',
    price: 45000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Classic Rolls-Royce elegance.',
    specifications: {
      engine: '6.75L V8',
      power: '189 HP',
      acceleration: '0-100 km/h in 10.9s',
      topSpeed: '185 km/h',
      transmission: '3-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Classic Design', 'Self-Levelling Suspension', 'Walnut Veneer', 'Connolly Leather'],
    colors: ['Silver Sand', 'Royal Blue', 'Black', 'Cream White'],
    inStock: true
  },
  {
    id: 'rolls-royce-corniche',
    name: 'Corniche',
    brand: 'rolls-royce',
    price: 42000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Timeless convertible luxury.',
    specifications: {
      engine: '6.75L V8',
      power: '224 HP',
      acceleration: '0-100 km/h in 9.8s',
      topSpeed: '196 km/h',
      transmission: '4-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Convertible Top', 'Classic Styling', 'Chrome Bumpers', 'Picnic Tables'],
    colors: ['Cream White', 'Royal Blue', 'Silver Sand', 'Dark Green'],
    inStock: true
  },
  {
    id: 'rolls-royce-silver-spirit',
    name: 'Silver Spirit',
    brand: 'rolls-royce',
    price: 38000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Refined luxury sedan.',
    specifications: {
      engine: '6.75L V8',
      power: '224 HP',
      acceleration: '0-100 km/h in 9.2s',
      topSpeed: '200 km/h',
      transmission: '4-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Fuel Injection', 'Anti-Lock Brakes', 'Cruise Control', 'Central Locking'],
    colors: ['Silver Sand', 'Black', 'Royal Blue', 'Cream'],
    inStock: true
  },
  {
    id: 'rolls-royce-silver-seraph',
    name: 'Silver Seraph',
    brand: 'rolls-royce',
    price: 44000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Modern classic luxury.',
    specifications: {
      engine: '5.4L V12',
      power: '322 HP',
      acceleration: '0-100 km/h in 7.6s',
      topSpeed: '230 km/h',
      transmission: '5-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['BMW V12 Engine', 'Modern Technology', 'Classic Design', 'Luxury Interior'],
    colors: ['Arctic White', 'Peacock Blue', 'Silver Sand', 'Black'],
    inStock: true
  },

  // McLaren Cars (10 models)
  {
    id: 'mclaren-720s',
    name: '720S',
    brand: 'mclaren',
    price: 32000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Supercar excellence redefined.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '341 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Proactive Chassis Control', 'Dihedral Doors', 'Carbon Fiber Monocage', 'Track Telemetry'],
    colors: ['McLaren Orange', 'Storm Grey', 'Silica White', 'Burton Blue'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'mclaren-765lt',
    name: '765LT',
    brand: 'mclaren',
    price: 42000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Longtail track-focused supercar.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '755 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '330 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Longtail Aerodynamics', 'Track Pack', 'Titanium Roll Cage', 'Carbon Fiber Body'],
    colors: ['McLaren Orange', 'Silica White', 'Storm Grey', 'Azores'],
    inStock: true,
    isNew: true
  },
  {
    id: 'mclaren-gt',
    name: 'GT',
    brand: 'mclaren',
    price: 28000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Grand touring perfection.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '326 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Comfort Suspension', 'Touring Mode', 'Luggage Space', 'Luxury Interior'],
    colors: ['Supernova Silver', 'McLaren Orange', 'Storm Grey', 'Celestial Black'],
    inStock: true
  },
  {
    id: 'mclaren-artura',
    name: 'Artura',
    brand: 'mclaren',
    price: 35000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Hybrid supercar innovation.',
    specifications: {
      engine: '3.0L Twin-Turbo V6 + Electric',
      power: '671 HP',
      acceleration: '0-100 km/h in 3.0s',
      topSpeed: '330 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Hybrid Technology', 'E-Mode', 'Carbon Fiber Architecture', 'Advanced Aerodynamics'],
    colors: ['McLaren Orange', 'Ceramic Grey', 'Silica White', 'Azure Blue'],
    inStock: true,
    isNew: true
  },
  {
    id: 'mclaren-600lt',
    name: '600LT',
    brand: 'mclaren',
    price: 38000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Track-bred road car.',
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '592 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '324 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Longtail Design', 'Top-Exit Exhaust', 'Carbon Fiber Bodywork', 'Track Suspension'],
    colors: ['McLaren Orange', 'Silica White', 'Chicane Grey', 'Racing Yellow'],
    inStock: true
  },
  {
    id: 'mclaren-570s',
    name: '570S',
    brand: 'mclaren',
    price: 26000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Sports Series excellence.',
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '562 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '328 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Adaptive Dampers', 'Carbon Ceramic Brakes', 'Dihedral Doors', 'McLaren Track Telemetry'],
    colors: ['Ventura Orange', 'Storm Grey', 'Silica White', 'Onyx Black'],
    inStock: true
  },
  {
    id: 'mclaren-p1',
    name: 'P1',
    brand: 'mclaren',
    price: 120000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Ultimate hybrid hypercar.',
    specifications: {
      engine: '3.8L Twin-Turbo V8 + Electric',
      power: '903 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '350 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Hybrid Powertrain', 'Active Aerodynamics', 'DRS System', 'Carbon Fiber Monocoque'],
    colors: ['McLaren Orange', 'Volcano Yellow', 'Carbon Black', 'Supernova Silver'],
    inStock: false,
    isFeatured: true
  },
  {
    id: 'mclaren-senna',
    name: 'Senna',
    brand: 'mclaren',
    price: 85000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Track-focused ultimate series.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '789 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '340 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Extreme Aerodynamics', 'Carbon Fiber Body', 'Track Suspension', 'Racing Inspired'],
    colors: ['McLaren Orange', 'Senna Blue', 'Carbon Black', 'Racing Yellow'],
    inStock: false
  },
  {
    id: 'mclaren-540c',
    name: '540C',
    brand: 'mclaren',
    price: 24000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Entry-level McLaren excellence.',
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '533 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '320 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Steel Springs', 'Adaptive Dampers', 'Carbon Ceramic Brakes', 'Luxury Interior'],
    colors: ['Silica White', 'Storm Grey', 'Vermillion Red', 'Onyx Black'],
    inStock: true
  },
  {
    id: 'mclaren-speedtail',
    name: 'Speedtail',
    brand: 'mclaren',
    price: 200000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Hyper-GT three-seater.',
    specifications: {
      engine: '4.0L Twin-Turbo V8 + Electric',
      power: '1035 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '403 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Three-Seat Layout', 'Streamlined Body', 'Active Suspension', 'Electrochromic Glass'],
    colors: ['Speedtail Silver', 'Carbon Black', 'Ceramic Grey', 'Bespoke Options'],
    inStock: false,
    isNew: true
  },

  // Lamborghini Cars (10 models)
  {
    id: 'lamborghini-huracan',
    name: 'Huracán',
    brand: 'lamborghini',
    price: 30000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Italian supercar perfection.',
    specifications: {
      engine: '5.2L Naturally Aspirated V10',
      power: '630 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '325 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['ANIMA Drive Modes', 'Lamborghini Dinamica Veicolo Integrata', 'Carbon Fiber', 'Alcantara Interior'],
    colors: ['Arancio Borealis', 'Nero Nemesis', 'Bianco Icarus', 'Blu Cepheus'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'lamborghini-aventador',
    name: 'Aventador',
    brand: 'lamborghini',
    price: 55000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'V12 flagship supercar.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '769 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '355 km/h',
      transmission: '7-Speed Automated Manual',
      drivetrain: 'AWD'
    },
    features: ['Carbon Fiber Monocoque', 'Scissor Doors', 'Push-Rod Suspension', 'Aerodynamica Lamborghini Attiva'],
    colors: ['Giallo Orion', 'Nero Aldebaran', 'Bianco Isis', 'Rosso Mars'],
    inStock: true
  },
  {
    id: 'lamborghini-urus',
    name: 'Urus',
    brand: 'lamborghini',
    price: 35000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Super Sports Utility Vehicle.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '641 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '305 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'AWD'
    },
    features: ['Air Suspension', 'Torque Vectoring', 'Off-Road Capability', 'Sport Exhaust'],
    colors: ['Giallo Auge', 'Nero Noctis', 'Bianco Icarus', 'Grigio Titans'],
    inStock: true,
    isNew: true
  },
  {
    id: 'lamborghini-gallardo',
    name: 'Gallardo',
    brand: 'lamborghini',
    price: 28000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Classic V10 supercar.',
    specifications: {
      engine: '5.2L Naturally Aspirated V10',
      power: '562 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '325 km/h',
      transmission: '6-Speed Manual',
      drivetrain: 'AWD'
    },
    features: ['E-Gear Transmission', 'Viscous Coupling', 'Carbon Ceramic Brakes', 'Alcantara Interior'],
    colors: ['Giallo Midas', 'Nero Pegaso', 'Bianco Monocerus', 'Blu Caelum'],
    inStock: true
  },
  {
    id: 'lamborghini-murcielago',
    name: 'Murciélago',
    brand: 'lamborghini',
    price: 32000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'V12 icon.',
    specifications: {
      engine: '6.2L Naturally Aspirated V12',
      power: '570 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '330 km/h',
      transmission: '6-Speed Manual',
      drivetrain: 'AWD'
    },
    features: ['Scissor Doors', 'Carbon Fiber Body', 'Viscous Coupling AWD', 'Racing Heritage'],
    colors: ['Giallo Orion', 'Nero Pegaso', 'Grigio Telesto', 'Arancio Atlas'],
    inStock: true
  },
  {
    id: 'lamborghini-revuelto',
    name: 'Revuelto',
    brand: 'lamborghini',
    price: 85000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Hybrid V12 revolution.',
    specifications: {
      engine: '6.5L V12 + 3 Electric Motors',
      power: '1001 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '350 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Plug-in Hybrid', 'Electric Front Axle', 'Active Aerodynamics', 'Carbon Fiber Architecture'],
    colors: ['Rosso Efesto', 'Nero Helene', 'Bianco Isi', 'Grigio Lynx'],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'lamborghini-diablo',
    name: 'Diablo',
    brand: 'lamborghini',
    price: 26000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Classic supercar legend.',
    specifications: {
      engine: '5.7L Naturally Aspirated V12',
      power: '492 HP',
      acceleration: '0-100 km/h in 4.1s',
      topSpeed: '325 km/h',
      transmission: '5-Speed Manual',
      drivetrain: 'RWD'
    },
    features: ['Scissor Doors', 'Carbon Fiber Details', 'Classic Design', 'Manual Transmission'],
    colors: ['Giallo', 'Rosso', 'Nero', 'Bianco'],
    inStock: true
  },
  {
    id: 'lamborghini-countach',
    name: 'Countach',
    brand: 'lamborghini',
    price: 45000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Iconic wedge design.',
    specifications: {
      engine: '5.2L Naturally Aspirated V12',
      power: '375 HP',
      acceleration: '0-100 km/h in 5.2s',
      topSpeed: '295 km/h',
      transmission: '5-Speed Manual',
      drivetrain: 'RWD'
    },
    features: ['Iconic Design', 'Scissor Doors', 'Manual Transmission', 'Racing Heritage'],
    colors: ['Bianco', 'Rosso', 'Giallo', 'Nero'],
    inStock: true
  },
  {
    id: 'lamborghini-espada',
    name: 'Espada',
    brand: 'lamborghini',
    price: 22000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Four-seat GT car.',
    specifications: {
      engine: '3.9L Naturally Aspirated V12',
      power: '325 HP',
      acceleration: '0-100 km/h in 6.5s',
      topSpeed: '245 km/h',
      transmission: '5-Speed Manual',
      drivetrain: 'RWD'
    },
    features: ['Four Seats', 'Classic GT', 'Independent Suspension', 'Luxury Interior'],
    colors: ['Verde', 'Rosso', 'Blu', 'Oro'],
    inStock: true
  },
  {
    id: 'lamborghini-jarama',
    name: 'Jarama',
    brand: 'lamborghini',
    price: 20000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Compact GT excellence.',
    specifications: {
      engine: '3.9L Naturally Aspirated V12',
      power: '350 HP',
      acceleration: '0-100 km/h in 6.8s',
      topSpeed: '241 km/h',
      transmission: '5-Speed Manual',
      drivetrain: 'RWD'
    },
    features: ['Compact Design', 'V12 Engine', 'Two-Seater', 'Classic Styling'],
    colors: ['Giallo', 'Rosso', 'Verde', 'Bianco'],
    inStock: true
  },

  // Ferrari Cars (10 models)
  {
    id: 'ferrari-f8-tributo',
    name: 'F8 Tributo',
    brand: 'ferrari',
    price: 42000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Mid-rear-engined sports car.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '340 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Side Slip Control 6.1', 'F1-Trac', 'E-Diff3', 'Manettino'],
    colors: ['Rosso Corsa', 'Giallo Modena', 'Nero Daytona', 'Bianco Avus'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'ferrari-sf90-stradale',
    name: 'SF90 Stradale',
    brand: 'ferrari',
    price: 65000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Plug-in hybrid supercar.',
    specifications: {
      engine: '4.0L Twin-Turbo V8 + 3 Electric Motors',
      power: '986 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '340 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'AWD'
    },
    features: ['Hybrid Technology', 'eManettino', 'Active Aerodynamics', 'Electric All-Wheel Drive'],
    colors: ['Rosso Corsa', 'Nero Daytona', 'Grigio Silverstone', 'Blu Corsa'],
    inStock: true,
    isNew: true
  },
  {
    id: 'ferrari-812-superfast',
    name: '812 Superfast',
    brand: 'ferrari',
    price: 58000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'V12 front-engined supercar.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12',
      power: '789 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '340 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Electric Power Steering', 'Virtual Short Wheelbase 2.0', 'Peak Performance', 'Ferrari Dynamic Enhancer'],
    colors: ['Rosso Corsa', 'Giallo Triplo Strato', 'Nero Daytona', 'Tour de France Blue'],
    inStock: true
  },
  {
    id: 'ferrari-portofino-m',
    name: 'Portofino M',
    brand: 'ferrari',
    price: 38000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'GT convertible.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '320 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Retractable Hard Top', 'Manettino', 'Magic Ride Control', '2+2 Seating'],
    colors: ['Rosso Portofino', 'Grigio Silverstone', 'Nero Daytona', 'Blu Pozzi'],
    inStock: true
  },
  {
    id: 'ferrari-roma',
    name: 'Roma',
    brand: 'ferrari',
    price: 45000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'New GT coupé.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '320 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['8.4" Touchscreen', 'Manettino', 'Rome-Inspired Design', 'GT Performance'],
    colors: ['Rosso Corsa', 'Grigio Roma', 'Nero Purosangue', 'Bianco Avus'],
    inStock: true
  },
  {
    id: 'ferrari-488-pista',
    name: '488 Pista',
    brand: 'ferrari',
    price: 48000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Track-focused supercar.',
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '340 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Aerodynamic Package', 'Track-Tuned Suspension', 'Carbon Fiber Body', 'Racing Heritage'],
    colors: ['Rosso Corsa', 'Giallo Modena', 'Grigio Corse', 'Nero Daytona'],
    inStock: true
  },
  {
    id: 'ferrari-laferrari',
    name: 'LaFerrari',
    brand: 'ferrari',
    price: 150000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Hybrid hypercar flagship.',
    specifications: {
      engine: '6.3L V12 + Electric Motor',
      power: '949 HP',
      acceleration: '0-100 km/h in 2.4s',
      topSpeed: '350 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Hybrid Technology', 'Active Aerodynamics', 'Carbon Fiber Chassis', 'Limited Production'],
    colors: ['Rosso Corsa', 'Nero Daytona', 'Bianco Avus', 'Giallo Modena'],
    inStock: false,
    isFeatured: true
  },
  {
    id: 'ferrari-f12-berlinetta',
    name: 'F12berlinetta',
    brand: 'ferrari',
    price: 52000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'V12 grand tourer.',
    specifications: {
      engine: '6.3L Naturally Aspirated V12',
      power: '730 HP',
      acceleration: '0-100 km/h in 3.1s',
      topSpeed: '340 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Aerodynamic Efficiency', 'Magnetorheological Dampers', 'Carbon Ceramic Brakes', 'F1-Trac'],
    colors: ['Rosso Corsa', 'Nero Daytona', 'Grigio Silverstone', 'Bianco Avus'],
    inStock: true
  },
  {
    id: 'ferrari-458-italia',
    name: '458 Italia',
    brand: 'ferrari',
    price: 35000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Mid-engine masterpiece.',
    specifications: {
      engine: '4.5L Naturally Aspirated V8',
      power: '562 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '325 km/h',
      transmission: '7-Speed Dual Clutch',
      drivetrain: 'RWD'
    },
    features: ['Direct Injection', 'E-Diff', 'F1-Trac', 'Manettino'],
    colors: ['Rosso Corsa', 'Giallo Modena', 'Nero Daytona', 'Bianco Avus'],
    inStock: true
  },
  {
    id: 'ferrari-enzo',
    name: 'Enzo',
    brand: 'ferrari',
    price: 120000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Ultimate Ferrari supercar.',
    specifications: {
      engine: '6.0L Naturally Aspirated V12',
      power: '651 HP',
      acceleration: '0-100 km/h in 3.1s',
      topSpeed: '355 km/h',
      transmission: '6-Speed Automated Manual',
      drivetrain: 'RWD'
    },
    features: ['Carbon Fiber Body', 'Active Aerodynamics', 'F1 Technology', 'Limited Production'],
    colors: ['Rosso Corsa', 'Nero Daytona', 'Giallo Modena', 'Tour de France Blue'],
    inStock: false
  },

  // Aston Martin Cars (10 models)
  {
    id: 'aston-martin-db11',
    name: 'DB11',
    brand: 'aston-martin',
    price: 28000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Grand tourer excellence.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '503 HP',
      acceleration: '0-100 km/h in 4.0s',
      topSpeed: '301 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Adaptive Dampers', 'Electronic Rear Differential', 'Carbon Fiber Drive Shaft', 'Luxury Interior'],
    colors: ['Midnight Black', 'Lightning Silver', 'Ultramarine Black', 'China Grey'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'aston-martin-vantage',
    name: 'Vantage',
    brand: 'aston-martin',
    price: 24000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Pure sports car.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '503 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '314 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Electronic Differential', 'Adaptive Dampers', 'Sport+ Mode', 'Track Telemetry'],
    colors: ['Jet Black', 'Lightning Silver', 'Tungsten Silver', 'Lime Essence'],
    inStock: true
  },
  {
    id: 'aston-martin-dbs-superleggera',
    name: 'DBS Superleggera',
    brand: 'aston-martin',
    price: 42000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Ultimate grand tourer.',
    specifications: {
      engine: '5.2L Twin-Turbo V12',
      power: '715 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '340 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Carbon Fiber Body', 'Adaptive Triple Mode Suspension', 'Carbon Ceramic Brakes', 'Aerodynamic Package'],
    colors: ['Magnetic Silver', 'Jet Black', 'Lightning Silver', 'Cosmos Orange'],
    inStock: true
  },
  {
    id: 'aston-martin-dbx',
    name: 'DBX',
    brand: 'aston-martin',
    price: 32000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Luxury SUV.',
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '542 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '291 km/h',
      transmission: '9-Speed Automatic',
      drivetrain: 'AWD'
    },
    features: ['Air Suspension', 'Terrain Response', 'Sport+ Mode', '5-Seat Configuration'],
    colors: ['Kopi Bronze', 'Lightning Silver', 'Jet Black', 'Magnetic Silver'],
    inStock: true,
    isNew: true
  },
  {
    id: 'aston-martin-rapide-s',
    name: 'Rapide S',
    brand: 'aston-martin',
    price: 35000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Four-door sports car.',
    specifications: {
      engine: '6.0L Naturally Aspirated V12',
      power: '552 HP',
      acceleration: '0-100 km/h in 4.4s',
      topSpeed: '327 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Four Doors', 'Carbon Fiber Details', 'Adaptive Dampers', 'Luxury Interior'],
    colors: ['Jet Black', 'Magnetic Silver', 'Lightning Silver', 'Mariana Blue'],
    inStock: true
  },
  {
    id: 'aston-martin-vanquish',
    name: 'Vanquish',
    brand: 'aston-martin',
    price: 38000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Carbon fiber grand tourer.',
    specifications: {
      engine: '5.9L Naturally Aspirated V12',
      power: '565 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '295 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Carbon Fiber Monocoque', 'Adaptive Dampers', 'Carbon Ceramic Brakes', 'One-77 Inspired Design'],
    colors: ['Jet Black', 'Lightning Silver', 'Volcano Red', 'Morning Frost White'],
    inStock: true
  },
  {
    id: 'aston-martin-valkyrie',
    name: 'Valkyrie',
    brand: 'aston-martin',
    price: 250000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'F1-derived hypercar.',
    specifications: {
      engine: '6.5L Naturally Aspirated V12 + Electric',
      power: '1160 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '402 km/h',
      transmission: '7-Speed Automated Manual',
      drivetrain: 'RWD'
    },
    features: ['F1 Technology', 'Active Aerodynamics', 'Carbon Fiber Construction', 'Hybrid Power'],
    colors: ['Aston Martin Racing Green', 'Carbon Black', 'Silver', 'Bespoke Options'],
    inStock: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'aston-martin-db9',
    name: 'DB9',
    brand: 'aston-martin',
    price: 22000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Classic grand tourer.',
    specifications: {
      engine: '5.9L Naturally Aspirated V12',
      power: '510 HP',
      acceleration: '0-100 km/h in 4.6s',
      topSpeed: '295 km/h',
      transmission: '6-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['VH Platform', 'Glass Roof', 'Adaptive Dampers', 'Premium Leather'],
    colors: ['Jet Black', 'Lightning Silver', 'Appletree Green', 'Tungsten Silver'],
    inStock: true
  },
  {
    id: 'aston-martin-virage',
    name: 'Virage',
    brand: 'aston-martin',
    price: 26000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Powerful grand tourer.',
    specifications: {
      engine: '5.9L Naturally Aspirated V12',
      power: '490 HP',
      acceleration: '0-100 km/h in 4.6s',
      topSpeed: '299 km/h',
      transmission: '6-Speed Automatic',
      drivetrain: 'RWD'
    },
    features: ['Carbon Fiber Details', 'Sport Suspension', 'Premium Interior', 'Distinctive Styling'],
    colors: ['Midnight Blue', 'Lightning Silver', 'Jet Black', 'Tungsten Silver'],
    inStock: true
  },
  {
    id: 'aston-martin-one-77',
    name: 'One-77',
    brand: 'aston-martin',
    price: 180000000,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Ultra-exclusive supercar.',
    specifications: {
      engine: '7.3L Naturally Aspirated V12',
      power: '750 HP',
      acceleration: '0-100 km/h in 3.5s',
      topSpeed: '354 km/h',
      transmission: '6-Speed Automated Manual',
      drivetrain: 'RWD'
    },
    features: ['Carbon Fiber Monocoque', 'Handcrafted Body', 'Limited to 77 Units', 'Track-Tuned Suspension'],
    colors: ['Bespoke Only'],
    inStock: false
  }
];

export const getCarsForBrand = (brandId: string): Car[] => {
  return cars.filter(car => car.brand === brandId);
};

export const getFeaturedCars = (): Car[] => {
  return cars.filter(car => car.isFeatured);
};

export const getNewCars = (): Car[] => {
  return cars.filter(car => car.isNew);
};

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};
