import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToShop: () => void;
}

// Sample products for search
const allProducts: Product[] = [
  {
    id: 1,
    name: 'Terracotta Mug',
    category: 'Mugs',
    price: '₹650',
    image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?w=400',
  },
  {
    id: 2,
    name: 'Rustic Dinner Plate',
    category: 'Plates',
    price: '₹850',
    image: 'https://images.unsplash.com/photo-1759753865666-a6bd3da8971d?w=400',
  },
  {
    id: 3,
    name: 'Minimalist Vase',
    category: 'Vases',
    price: '₹1,200',
    image: 'https://images.unsplash.com/photo-1675604587136-f91dc1a4473b?w=400',
  },
  {
    id: 4,
    name: 'Serving Bowl',
    category: 'Bowls',
    price: '₹950',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
  },
  {
    id: 5,
    name: 'Coffee Mug Set',
    category: 'Mugs',
    price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?w=400',
  },
  {
    id: 6,
    name: 'Salad Bowl',
    category: 'Bowls',
    price: '₹1,100',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
  },
];

export default function SearchDialog({ isOpen, onClose, onNavigateToShop }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleProductClick = () => {
    onNavigateToShop();
    onClose();
    setSearchQuery('');
  };

  const handleClose = () => {
    onClose();
    setSearchQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] bg-[#F5F2EB] border-[#2F2925]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#2F2925]">Search Products</DialogTitle>
          <DialogDescription className="sr-only">
            Search through our pottery collection
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B6560] w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for mugs, plates, bowls, vases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-[#6B6560]/20 text-lg py-6"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B6560] hover:text-[#A35D38]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="mt-4 overflow-y-auto max-h-[50vh]">
          <AnimatePresence mode="wait">
            {searchQuery && filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-[#6B6560]">No products found matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={handleProductClick}
                  className="mt-4 text-[#A35D38] hover:underline"
                >
                  Browse all products
                </button>
              </motion.div>
            )}

            {searchQuery && filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {filteredProducts.map((product) => (
                  <motion.button
                    key={product.id}
                    onClick={handleProductClick}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full flex items-center gap-4 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 text-left"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-[#2F2925]">{product.name}</h3>
                      <p className="text-sm text-[#6B6560]">{product.category}</p>
                    </div>
                    <p className="text-[#A35D38]">{product.price}</p>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {!searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <Search className="w-12 h-12 text-[#6B6560] mx-auto mb-4 opacity-50" />
                <p className="text-[#6B6560]">Start typing to search for products</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
