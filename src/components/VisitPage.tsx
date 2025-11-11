import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, MessageCircle, Instagram, Navigation } from 'lucide-react';
import { Button } from './ui/button';

const studioImages = [
  'https://images.unsplash.com/photo-1638341840302-a2d9579b821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjYyNTMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1753164725052-47a9c5e8067f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd2hlZWwlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjI3MTA4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1753164726043-31e583f8a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBjbGF5JTIwcG90dGVyeXxlbnwxfHx8fDE3NjI3MTA4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYyNzEwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

const openingHours = [
  { day: 'Monday - Friday', hours: '10:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 8:00 PM' },
  { day: 'Public Holidays', hours: 'Closed' },
];

export default function VisitPage() {
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
            <div className="w-20 h-20 bg-[#A35D38] rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              Come See Us
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Visit the Studio</h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Stop by to see our work, browse our collection, or simply enjoy the creative
              atmosphere of our studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map & Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-sm overflow-hidden shadow-lg h-full min-h-[400px]">
                <div className="w-full h-full bg-[#E8E3D9] flex items-center justify-center p-12">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#A35D38] mx-auto mb-4" />
                    <h3 className="text-2xl text-[#2F2925] mb-2">Studio Location</h3>
                    <p className="text-[#6B6560] mb-4">
                      [Map integration would go here]
                      <br />
                      Contact us for exact address
                    </p>
                    <Button className="bg-[#A35D38] hover:bg-[#8B4D2E] text-white uppercase tracking-widest">
                      <Navigation className="w-4 h-4 mr-2" />
                      GET DIRECTIONS
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl text-[#2F2925] mb-4">Studio Address</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#A35D38] flex-shrink-0 mt-1" />
                  <div className="text-[#6B6560]">
                    <p>Callipottery Studio</p>
                    <p>[Street Address]</p>
                    <p>[City, State, ZIP]</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#A35D38]" />
                  <h3 className="text-2xl text-[#2F2925]">Opening Hours</h3>
                </div>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-3 border-b border-[#E8E3D9] last:border-0"
                    >
                      <span className="text-[#2F2925]">{schedule.day}</span>
                      <span className="text-[#6B6560]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl text-[#2F2925] mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-center gap-4 p-3 rounded hover:bg-[#F5F2EB] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#A35D38]" />
                    <span className="text-[#6B6560]">+91 (XXX) XXX-XXXX</span>
                  </a>
                  <a
                    href="mailto:info@callipottery.com"
                    className="flex items-center gap-4 p-3 rounded hover:bg-[#F5F2EB] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#A35D38]" />
                    <span className="text-[#6B6560]">info@callipottery.com</span>
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded hover:bg-[#F5F2EB] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[#A35D38]" />
                    <span className="text-[#6B6560]">WhatsApp Us</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded hover:bg-[#F5F2EB] transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#A35D38]" />
                    <span className="text-[#6B6560]">@callipottery</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Studio Gallery</h2>
            <p className="text-[#6B6560]">Take a peek inside our creative space</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-video overflow-hidden rounded-sm group"
              >
                <img
                  src={image}
                  alt={`Studio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions & Parking */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-[#2F2925] mb-8 text-center">
              Directions & Parking
            </h2>

            <div className="bg-white p-8 rounded-sm space-y-6">
              <div>
                <h3 className="text-xl text-[#2F2925] mb-3">By Car</h3>
                <p className="text-[#6B6560]">
                  The studio is easily accessible from the main highway. Take Exit 12 and follow
                  the signs to the Arts District. Free parking is available on-site.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-[#2F2925] mb-3">By Public Transport</h3>
                <p className="text-[#6B6560]">
                  The nearest metro station is [Station Name], approximately 10 minutes walk from
                  the studio. Bus routes 23, 45, and 67 stop nearby.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-[#2F2925] mb-3">Parking Information</h3>
                <p className="text-[#6B6560]">
                  Free parking available in our dedicated lot. Additional street parking available
                  on weekends. The studio is wheelchair accessible with designated parking spaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
