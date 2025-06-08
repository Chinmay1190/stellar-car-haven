
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/formatPrice';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { state, removeFromCart, updateQuantity, setCartOpen } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-background border-l z-50 shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCartOpen(false)}
              >
                ✕
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {state.items.length} {state.items.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button 
                  className="mt-4" 
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.car.id} className="flex space-x-4 p-4 border rounded-lg">
                    <img 
                      src={item.car.image} 
                      alt={item.car.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.car.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.car.brand}</p>
                      {item.selectedColor && (
                        <p className="text-xs text-muted-foreground">Color: {item.selectedColor}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => updateQuantity(item.car.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => updateQuantity(item.car.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.car.id)}
                          className="text-destructive"
                        >
                          Remove
                        </Button>
                      </div>
                      <p className="text-sm font-medium mt-1">
                        {formatPrice(item.car.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>{formatPrice(state.total)}</span>
              </div>
              <Link to="/checkout" onClick={() => setCartOpen(false)}>
                <Button className="w-full bg-luxury-gradient hover:opacity-90">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
