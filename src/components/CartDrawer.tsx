import { ShoppingBag, Trash2, Plus, Minus, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from './ui/sheet';
import { Button } from './ui/button';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface CartDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CartDrawer({ children, isOpen, onOpenChange }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, clearCart, getTotalItems, getTotalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    // Create WhatsApp message
    const message = `Hi! I'd like to order the following items:\n\n${items
      .map((item) => `${item.name} (${item.category}) - ${item.price} x ${item.quantity}`)
      .join('\n')}\n\nTotal: ₹${getTotalPrice().toLocaleString('en-IN')}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-[#F5F2EB] border-l-[#2F2925]/20">
        <SheetHeader>
          <SheetTitle className="text-2xl text-[#2F2925] flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              Shopping Cart ({getTotalItems()})
            </span>
            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className="text-sm text-[#6B6560] hover:text-[#A35D38] transition-colors"
              >
                Clear all
              </button>
            )}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review and manage items in your shopping cart
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-16 h-16 text-[#6B6560] opacity-30 mb-4" />
              <p className="text-[#6B6560] text-lg mb-2">Your cart is empty</p>
              <p className="text-[#6B6560] text-sm">Add some beautiful pottery to get started</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-[#2F2925]">{item.name}</h3>
                              <p className="text-sm text-[#6B6560]">{item.category}</p>
                            </div>
                            <button
                              onClick={() => {
                                removeItem(item.id);
                                toast.success('Item removed from cart');
                              }}
                              className="text-[#6B6560] hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center rounded border border-[#6B6560]/20 hover:border-[#A35D38] hover:text-[#A35D38] transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-[#2F2925]">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center rounded border border-[#6B6560]/20 hover:border-[#A35D38] hover:text-[#A35D38] transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <p className="text-[#A35D38]">
                              ₹{(parseFloat(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="border-t border-[#2F2925]/10 pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-[#2F2925]">Total</span>
                  <span className="text-[#A35D38]">
                    ₹{getTotalPrice().toLocaleString('en-IN')}
                  </span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[#A35D38] hover:bg-[#8B4D2E] text-white py-6 text-lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Checkout via WhatsApp
                </Button>
                <p className="text-xs text-center text-[#6B6560]">
                  You&apos;ll be redirected to WhatsApp to complete your order
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
