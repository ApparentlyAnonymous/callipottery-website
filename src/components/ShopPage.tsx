import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle } from 'lucide-react';

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGlaze, setSelectedGlaze] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Morning Ritual Mug',
      category: 'mugs',
      price: '₹850',
      glaze: 'cream',
      image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hand-thrown stoneware mug with ergonomic handle',
    },
    {
      id: 2,
      name: 'Terracotta Cup Set',
      category: 'mugs',
      price: '₹1,200',
      glaze: 'terracotta',
      image: 'https://images.unsplash.com/photo-1614334420922-8e2aa2bd52c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwcG90dGVyeSUyMGVhcnRoeXxlbnwxfHx8fDE3NjE0NTQwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Set of 2 earthy terracotta cups',
    },
    {
      id: 3,
      name: 'Nesting Bowls',
      category: 'bowls',
      price: '₹2,400',
      glaze: 'blue',
      image: 'https://images.unsplash.com/photo-1761210719325-283557e92487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bHMlMjBhcnRpc2FufGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Set of 3 nesting bowls with glaze-blue finish',
    },
    {
      id: 4,
      name: 'Serving Bowl',
      category: 'bowls',
      price: '₹1,650',
      glaze: 'cream',
      image: 'https://images.unsplash.com/photo-1761210719325-283557e92487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bHMlMjBhcnRpc2FufGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Large serving bowl perfect for salads',
    },
    {
      id: 5,
      name: 'Dinner Plate Set',
      category: 'plates',
      price: '₹3,200',
      glaze: 'cream',
      image: 'https://images.unsplash.com/photo-1623682522867-ef176aa9c883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwcG90dGVyeXxlbnwxfHx8fDE3NjE0NTQwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Set of 4 handcrafted dinner plates',
    },
    {
      id: 6,
      name: 'Breakfast Plate',
      category: 'plates',
      price: '₹950',
      glaze: 'olive',
      image: 'https://images.unsplash.com/photo-1623682522867-ef176aa9c883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwcG90dGVyeXxlbnwxfHx8fDE3NjE0NTQwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Perfect sized plate for breakfast',
    },
    {
      id: 7,
      name: 'Minimalist Vase',
      category: 'vases',
      price: '₹1,850',
      glaze: 'blue',
      image: 'https://images.unsplash.com/photo-1722501428493-1db3d0df9023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZXMlMjBoYW5kY3JhZnRlZHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Modern bud vase with subtle texture',
    },
    {
      id: 8,
      name: 'Statement Vase',
      category: 'vases',
      price: '₹2,950',
      glaze: 'terracotta',
      image: 'https://images.unsplash.com/photo-1722501428493-1db3d0df9023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZXMlMjBoYW5kY3JhZnRlZHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Large decorative vase for dried flowers',
    },
    {
      id: 9,
      name: 'Espresso Cup Duo',
      category: 'mugs',
      price: '₹980',
      glaze: 'olive',
      image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Pair of delicate espresso cups',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const glazeMatch = selectedGlaze === 'all' || product.glaze === selectedGlaze;
    return categoryMatch && glazeMatch;
  });

  const handleWhatsAppOrder = (productName: string) => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(`I would like to order: ${productName}`)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen py-24 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 8vw, 64px)' }}
          >
            The Callipottery Collection
          </h1>
          <p className="text-[#6B5D52] max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Each piece is handcrafted with care, celebrating the unique beauty of artisan pottery.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 max-w-2xl mx-auto">
          <div className="flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white border-[#3E2F24]/15 rounded-lg">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="mugs">Mugs & Cups</SelectItem>
                <SelectItem value="bowls">Bowls</SelectItem>
                <SelectItem value="plates">Plates</SelectItem>
                <SelectItem value="vases">Vases</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select value={selectedGlaze} onValueChange={setSelectedGlaze}>
              <SelectTrigger className="bg-white border-[#3E2F24]/15 rounded-lg">
                <SelectValue placeholder="All Glazes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Glazes</SelectItem>
                <SelectItem value="cream">Cream</SelectItem>
                <SelectItem value="terracotta">Terracotta</SelectItem>
                <SelectItem value="blue">Glaze Blue</SelectItem>
                <SelectItem value="olive">Olive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all h-full bg-white">
                <div className="aspect-square overflow-hidden bg-[#E5E0DC] rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              
              <div className="p-6 bg-white text-center">
                <h3 
                  className="mb-3 text-[#3E2F24]" 
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                >
                  {product.name}
                </h3>
                
                <div className="text-[#A67C52] mb-4" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }}>
                  {product.price}
                </div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order via WhatsApp
                  </Button>
                </motion.div>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Care Instructions */}
        <div className="mt-24 p-10 bg-[#E5E0DC] rounded-lg max-w-3xl mx-auto">
          <h3 
            className="mb-6 text-[#3E2F24] text-center" 
            style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
          >
            Caring for Your Ceramics
          </h3>
          <div className="space-y-3 text-[#3E2F24]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <p>• Hand wash with gentle soap for longevity</p>
            <p>• Microwave and dishwasher safe (unless specified)</p>
            <p>• Avoid thermal shock – no extreme temperature changes</p>
            <p>• Each piece is unique with slight variations celebrating handcraft</p>
          </div>
        </div>
      </div>
    </div>
  );
}
