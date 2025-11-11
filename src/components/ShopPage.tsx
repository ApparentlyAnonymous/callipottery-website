import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useCart } from './CartContext';
import { toast } from 'sonner@2.0.3';

const products = [
  {
    id: 1,
    name: 'Terracotta Mug',
    category: 'Mugs',
    price: '₹650',
    color: 'Terracotta',
    image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYyNzEwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    inStock: true,
  },
  {
    id: 2,
    name: 'Rustic Dinner Plate',
    category: 'Plates',
    price: '₹850',
    color: 'Cream',
    image: 'https://images.unsplash.com/photo-1759753865666-a6bd3da8971d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGUlMjBhcnRpc2FufGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    inStock: true,
  },
  {
    id: 3,
    name: 'Minimalist Vase',
    category: 'Vases',
    price: '₹1,200',
    color: 'Natural',
    image: 'https://images.unsplash.com/photo-1675604587136-f91dc1a4473b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZSUyMHBvdHRlcnl8ZW58MXx8fHwxNzYyNTk1NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    inStock: true,
  },
  {
    id: 4,
    name: 'Serving Bowl',
    category: 'Bowls',
    price: '₹950',
    color: 'Terracotta',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    inStock: true,
  },
  {
    id: 5,
    name: 'Coffee Mug Set',
    category: 'Mugs',
    price: '₹1,800',
    color: 'Mixed',
    image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYyNzEwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    inStock: true,
  },
  {
    id: 6,
    name: 'Salad Bowl',
    category: 'Bowls',
    price: '₹1,100',
    color: 'Cream',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    inStock: false,
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-[#F5F2EB]">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              Our Collection
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Shop</h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Each piece is handcrafted with care, celebrating the beauty of imperfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B6560] w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-[#6B6560]/20"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 bg-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Mugs">Mugs</SelectItem>
                  <SelectItem value="Plates">Plates</SelectItem>
                  <SelectItem value="Bowls">Bowls</SelectItem>
                  <SelectItem value="Vases">Vases</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-[#2F2925]/70 flex items-center justify-center">
                      <span className="text-white px-4 py-2 bg-[#A35D38]">Out of Stock</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#2F2925]/0 group-hover:bg-[#2F2925]/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#6B6560]">{product.category}</span>
                    <span className="text-sm text-[#6B6560]">{product.color}</span>
                  </div>
                  <h3 className="text-xl text-[#2F2925] mb-2">{product.name}</h3>
                  <p className="text-2xl text-[#A35D38] mb-4">{product.price}</p>

                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          category: product.category,
                        });
                        toast.success(`${product.name} added to cart!`);
                      }}
                      className="w-full bg-[#A35D38] hover:bg-[#8B4D2E] text-white uppercase tracking-widest"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'ADD TO CART' : 'UNAVAILABLE'}
                    </Button>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button variant="outline" className="w-full border-[#A35D38] text-[#A35D38] hover:bg-[#A35D38] hover:text-white uppercase tracking-widest">
                        MESSAGE TO ORDER
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-[#6B6560]">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
