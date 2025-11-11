import { Instagram, Youtube, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Shop', page: 'shop' },
    { label: 'Classes', page: 'classes' },
    { label: 'Kiln Booking', page: 'kiln' },
    { label: 'Open Studio', page: 'studio' },
    { label: 'About', page: 'about' },
    { label: 'Policies', page: 'policies' },
  ];

  return (
    <footer className="bg-[#2F2925] text-[#F5F2EB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4 text-[#A35D38]">Callipottery Studio</h3>
            <p className="text-[#E8E3D9] mb-4 leading-relaxed">
              Creating objects of quiet beauty. Each piece is hand-thrown with care and intention.
            </p>
            <p className="text-sm text-[#6B6560] italic">
              "Making the impossible possible through the soil"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-[#E8E3D9] hover:text-[#A35D38] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#A35D38] mt-0.5 flex-shrink-0" />
                <span className="text-[#E8E3D9]">
                  Studio Location<br />
                  Contact for address
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#A35D38] flex-shrink-0" />
                <a
                  href="mailto:info@callipottery.com"
                  className="text-[#E8E3D9] hover:text-[#A35D38] transition-colors duration-300"
                >
                  info@callipottery.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#A35D38] flex-shrink-0" />
                <span className="text-[#E8E3D9]">+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#A35D38] flex-shrink-0" />
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8E3D9] hover:text-[#A35D38] transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#A35D38]/20 rounded-full flex items-center justify-center hover:bg-[#A35D38] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#A35D38] group-hover:text-[#F5F2EB]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#A35D38]/20 rounded-full flex items-center justify-center hover:bg-[#A35D38] transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-[#A35D38] group-hover:text-[#F5F2EB]" />
              </a>
            </div>
            <p className="text-sm text-[#E8E3D9]">
              Subscribe to our newsletter for updates on new collections and workshops.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F5F2EB]/10 text-center">
          <p className="text-[#6B6560]">
            © 2025 Callipottery Studio. Handcrafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
