import { Instagram, Youtube } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#E5E0DC] border-t-4 border-[#A67C52] mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Decorative Shelf Icons */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <div className="w-16 h-20 bg-[#A67C52] rounded-t-full opacity-70" />
          <div className="w-12 h-16 bg-[#8DA9A0] rounded-lg opacity-70" />
          <div className="w-14 h-18 bg-[#A67C52] opacity-70" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links - Shop */}
          <div>
            <h4 className="mb-4 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}>
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  All Ceramics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Mugs & Cups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Bowls
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Plates & Dinnerware
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Vases
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links - Studio */}
          <div>
            <h4 className="mb-4 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}>
              Studio
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('classes')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Classes & Workshops
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kiln')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Kiln Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Open Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Visit Us
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links - About */}
          <div>
            <h4 className="mb-4 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}>
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('policies')}
                  className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
                >
                  Policies
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}>
              Join Our Clay Circle
            </h4>
            <p className="text-[#6B5D52] mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Subscribe for studio updates and pottery tips.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white border-[#3E2F24]/15 rounded-lg"
              />
              <Button className="bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="border-t border-[#3E2F24]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <a
                href="mailto:hello@callipottery.in"
                className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
              >
                hello@callipottery.in
              </a>
              <a
                href="tel:+919876543210"
                className="text-[#6B5D52] hover:text-[#A67C52] transition-colors"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-[#A67C52] hover:text-white transition-colors shadow-sm"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-[#A67C52] hover:text-white transition-colors shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-[#A67C52] hover:text-white transition-colors shadow-sm"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-[#6B5D52]" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            © 2025 Callipottery Studio – Crafted by hand, centered in calm.
          </div>
        </div>
      </div>
    </footer>
  );
}
