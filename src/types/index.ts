
export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specifications: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
    drivetrain: string;
  };
  features: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  car: Car;
  quantity: number;
  selectedColor?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  heritage: string;
  carsCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: User['address'];
  paymentMethod: string;
  createdAt: Date;
  estimatedDelivery?: Date;
}
