import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SearchDialog from './SearchDialog';
import CartDrawer from './CartDrawer';
import { useCart } from './CartContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navStructure = {
  left: [
    { 
      label: 'HOME', 
      page: 'home',
      dropdown: []
    },
    { 
      label: 'SHOP', 
      page: 'shop',
      dropdown: [
        { label: 'All Products', page: 'shop' },
        { label: 'Vessels', page: 'shop' },
        { label: 'Tableware', page: 'shop' },
        { label: 'Decorative', page: 'shop' },
      ]
    },
    { 
      label: 'CLASSES', 
      page: 'classes',
      dropdown: [
        { label: 'View All Classes', page: 'classes' },
        { label: 'Wheel Throwing', page: 'classes' },
        { label: 'Hand Building', page: 'classes' },
        { label: 'Glaze Application', page: 'classes' },
      ]
    },
    { 
      label: 'KILN BOOKING', 
      page: 'kiln',
      dropdown: []
    },
  ],
  right: [
    { 
      label: 'OPEN STUDIO', 
      page: 'studio',
      dropdown: [
        { label: 'Studio Access', page: 'studio' },
        { label: 'Membership', page: 'studio' },
        { label: 'Guidelines', page: 'studio' },
      ]
    },
    { 
      label: 'ABOUT', 
      page: 'about',
      dropdown: [
        { label: 'Our Story', page: 'about' },
        { label: 'The Process', page: 'about' },
        { label: 'Visit Us', page: 'visit' },
        { label: 'Contact', page: 'contact' },
      ]
    },
    { 
      label: 'VISIT', 
      page: 'visit',
      dropdown: []
    },
  ],
};

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2F2925] shadow-lg' : 'bg-[#2F2925]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {navStructure.left.map((item) => (
              <div
                key={item.page}
                className="relative group"
                onMouseEnter={() => item.dropdown.length > 0 && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xs tracking-widest transition-colors duration-300 flex items-center gap-1 ${
                    currentPage === item.page
                      ? 'text-[#A35D38]'
                      : 'text-[#F5F2EB] hover:text-[#A35D38]'
                  }`}
                >
                  {item.label}
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown.length > 0 && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#2F2925] border border-[#F5F2EB]/10 rounded-sm shadow-xl overflow-hidden"
                  >
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.page)}
                        className="block w-full text-left px-4 py-3 text-xs text-[#F5F2EB] hover:bg-[#A35D38] hover:text-white transition-colors duration-200"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo Text */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={() => handleNavClick('home')}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#F5F2EB] hover:text-[#A35D38] transition-colors duration-300"
              >
                <span className="text-sm md:text-base tracking-[0.3em] font-medium">
                  CALLIPOTTERY
                </span>
                <br />
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#F5F2EB]/70">
                  HANDCRAFTED STUDIO
                </span>
              </motion.div>
            </button>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {navStructure.right.map((item) => (
              <div
                key={item.page}
                className="relative group"
                onMouseEnter={() => item.dropdown.length > 0 && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xs tracking-widest transition-colors duration-300 flex items-center gap-1 ${
                    currentPage === item.page
                      ? 'text-[#A35D38]'
                      : 'text-[#F5F2EB] hover:text-[#A35D38]'
                  }`}
                >
                  {item.label}
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown.length > 0 && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-[#2F2925] border border-[#F5F2EB]/10 rounded-sm shadow-xl overflow-hidden"
                  >
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.page)}
                        className="block w-full text-left px-4 py-3 text-xs text-[#F5F2EB] hover:bg-[#A35D38] hover:text-white transition-colors duration-200"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Icons */}
            <div className="flex items-center space-x-4 ml-4 border-l border-[#F5F2EB]/20 pl-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-[#F5F2EB] hover:text-[#A35D38] transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <CartDrawer isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
                <button 
                  className="text-[#F5F2EB] hover:text-[#A35D38] transition-colors duration-300 relative"
                  aria-label="Shopping cart"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {getTotalItems() > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-[#A35D38] text-white rounded-full flex items-center justify-center text-xs"
                    >
                      {getTotalItems()}
                    </motion.span>
                  )}
                </button>
              </CartDrawer>
            </div>
          </div>

          {/* Mobile Icons & Menu */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-[#F5F2EB] hover:text-[#A35D38] transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <CartDrawer isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
              <button 
                className="text-[#F5F2EB] hover:text-[#A35D38] transition-colors duration-300 relative"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-[#A35D38] text-white rounded-full flex items-center justify-center text-xs"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </button>
            </CartDrawer>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F2EB] hover:text-[#A35D38] transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2F2925] border-t border-[#F5F2EB]/10"
          >
            <div className="px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {[...navStructure.left, ...navStructure.right].map((item) => (
                <div key={item.page}>
                  <button
                    onClick={() => {
                      if (item.dropdown.length === 0) {
                        handleNavClick(item.page);
                      } else {
                        setOpenDropdown(openDropdown === item.label ? null : item.label);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left py-2 text-xs tracking-widest transition-colors duration-300 ${
                      currentPage === item.page ? 'text-[#A35D38]' : 'text-[#F5F2EB]'
                    }`}
                  >
                    {item.label}
                    {item.dropdown.length > 0 && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown.length > 0 && openDropdown === item.label && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavClick(subItem.page)}
                          className="block w-full text-left py-2 text-xs text-[#F5F2EB]/70 hover:text-[#A35D38] transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onNavigateToShop={() => onNavigate('shop')}
      />
    </motion.nav>
  );
}
