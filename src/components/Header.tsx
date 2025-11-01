import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Shop', value: 'shop' },
    { label: 'Classes', value: 'classes' },
    { label: 'Projects', value: 'projects' },
    { label: 'Pottery Pass', value: 'pass' },
    { label: 'Kiln Booking', value: 'kiln' },
    { label: 'Open Studio', value: 'studio' },
    { label: 'About', value: 'about' },
    { label: 'Visit', value: 'visit' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#A67C52] bg-[#E5E0DC] shadow-md">
      <motion.div 
        className="mx-auto max-w-7xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 transition-all hover:scale-105"
              style={{ fontFamily: 'var(--font-serif)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-9 h-9 bg-gradient-to-br from-[#A67C52] to-[#8B6644] rounded-full flex items-center justify-center shadow-md"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#F7F3EF]">C</span>
              </motion.div>
              <span className="text-lg sm:text-xl text-[#3E2F24] hidden sm:inline-block">Callipottery</span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.value
                      ? 'bg-[#A67C52] text-[#F7F3EF] shadow-md'
                      : 'text-[#3E2F24] hover:bg-[#E5E0DC]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#3E2F24] hover:bg-[#E5E0DC] rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav 
              className="lg:hidden pb-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.value
                      ? 'bg-[#A67C52] text-[#F7F3EF]'
                      : 'text-[#3E2F24] hover:bg-[#E5E0DC]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </div>
      </motion.div>
    </header>
  );
}
