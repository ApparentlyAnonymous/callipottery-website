import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flame, Hand, Palette } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const collections = [
    {
      name: 'Mugs & Cups',
      image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Start your mornings with intention',
    },
    {
      name: 'Bowls',
      image: 'https://images.unsplash.com/photo-1761210719325-283557e92487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bHMlMjBhcnRpc2FufGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Gather, serve, and nourish',
    },
    {
      name: 'Plates',
      image: 'https://images.unsplash.com/photo-1623682522867-ef176aa9c883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwcG90dGVyeXxlbnwxfHx8fDE3NjE0NTQwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Everyday beauty on the table',
    },
    {
      name: 'Vases',
      image: 'https://images.unsplash.com/photo-1722501428493-1db3d0df9023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZXMlMjBoYW5kY3JhZnRlZHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Display nature with artistry',
    },
  ];

  const workshops = [
    {
      title: 'Wheel-Throwing',
      icon: <Flame className="w-12 h-12 text-[#A67C52]" />,
      description: 'Learn to center clay and create functional pieces on the pottery wheel.',
    },
    {
      title: 'Hand-Building',
      icon: <Hand className="w-12 h-12 text-[#A67C52]" />,
      description: 'Explore coil, slab, and pinch techniques to craft unique ceramics.',
    },
    {
      title: 'Glazing & Firing',
      icon: <Palette className="w-12 h-12 text-[#A67C52]" />,
      description: 'Master the art of surface treatments and kiln firing processes.',
    },
  ];

  const testimonials = [
    {
      quote: "Clay remembers every touch. At Callipottery, I learned to slow down and create with my hands.",
      author: "Priya K.",
    },
    {
      quote: "The studio is my sanctuary. Every class brings me closer to understanding the beauty of imperfection.",
      author: "Rahul M.",
    },
    {
      quote: "From my first bowl to my first exhibition, this studio has been my creative home.",
      author: "Aisha S.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EF]">
      {/* Hero Section - Classic Block Layout */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Block */}
            <motion.div 
              className="bg-white p-8 lg:p-12 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-[#3E2F24] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafted by Hand.<br />Centered in Calm.
              </motion.h1>
              <motion.p 
                className="text-[#6B5D52] mb-8"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: '1.8' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Every piece tells a story of touch, time, and transformation. At Callipottery Studio, we blend ancient craft with modern design to create ceramics that bring beauty and intention to your everyday life.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  onClick={() => onNavigate('shop')}
                  className="bg-[#A67C52] hover:bg-[#8B6644] text-white px-8 py-6 rounded-lg shadow-lg"
                >
                  Shop Ceramics
                </Button>
                <Button
                  onClick={() => handleWhatsApp('I would like to book a workshop at Callipottery Studio')}
                  variant="outline"
                  className="border-2 border-[#A67C52] text-[#A67C52] bg-white hover:bg-[#A67C52] hover:text-white px-8 py-6 rounded-lg"
                >
                  Book a Workshop
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Image Block */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1675101337462-a19b63af8b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwaGFuZHMlMjBjbGF5fGVufDF8fHx8MTc2MTk3NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Hands shaping clay on pottery wheel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Introduction Block */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            className="bg-[#E5E0DC] p-8 lg:p-16 rounded-lg shadow-xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-6 text-[#3E2F24]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Clay, Our Way
            </h2>
            <p 
              className="text-[#3E2F24] mb-6 max-w-3xl mx-auto"
              style={{ fontSize: '18px', lineHeight: '1.8' }}
            >
              At Callipottery Studio, we believe every pot begins as a pause — a moment to connect 
              with earth, fire, and yourself. Founded in 2020, our studio is a haven for makers, 
              dreamers, and anyone seeking to slow down and create something beautiful with their hands.
            </p>
            <p 
              className="text-[#3E2F24] max-w-3xl mx-auto"
              style={{ fontSize: '18px', lineHeight: '1.8' }}
            >
              We blend traditional pottery techniques with contemporary design, creating pieces that 
              honor the craft while celebrating modern minimalism. Each creation is a meditation in clay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid - Block Layout */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 
            className="text-center mb-16 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Collections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-[#F7F3EF]"
                  onClick={() => onNavigate('shop')}
                >
                  <div className="p-4">
                    <div className="aspect-square overflow-hidden rounded-lg mb-4">
                      <ImageWithFallback
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 
                      className="text-center text-[#3E2F24] mb-2" 
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                    >
                      {collection.name}
                    </h3>
                    <p 
                      className="text-center text-[#6B5D52] text-sm"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {collection.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Block */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 
            className="text-center mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Workshops & Classes
          </h2>
          <p 
            className="text-center mb-16 text-[#6B5D52]"
            style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '18px' }}
          >
            Find peace in your hands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-2xl transition-all h-full">
                  <div className="flex justify-center mb-6">
                    {workshop.icon}
                  </div>
                  <h3 
                    className="mb-4 text-[#3E2F24]" 
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                  >
                    {workshop.title}
                  </h3>
                  <p className="text-[#6B5D52] mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {workshop.description}
                  </p>
                  <Button
                    onClick={() => onNavigate('classes')}
                    variant="outline"
                    className="border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white rounded-lg"
                  >
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Services Block */}
      <section className="py-20 lg:py-32 bg-[#8DA9A0]/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow h-full bg-white">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwa2lsbnxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Kiln firing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 
                    className="mb-3 text-[#3E2F24]" 
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                  >
                    Book Kiln Time
                  </h3>
                  <p className="text-[#6B5D52] mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Fire your creations in our professional kilns. Multiple cone options available.
                  </p>
                  <Button
                    onClick={() => handleWhatsApp('I would like to book kiln time')}
                    className="w-full bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg"
                  >
                    Book via WhatsApp
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow h-full bg-white">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTQ1NDAyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Open studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 
                    className="mb-3 text-[#3E2F24]" 
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                  >
                    Reserve Studio Space
                  </h3>
                  <p className="text-[#6B5D52] mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Work independently in our fully-equipped open studio. Tools and materials available.
                  </p>
                  <Button
                    onClick={() => handleWhatsApp('I would like to reserve studio space')}
                    className="w-full bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg"
                  >
                    Book via WhatsApp
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Block */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            className="bg-[#E5E0DC] p-8 lg:p-12 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                  500+
                </div>
                <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                  Pieces Crafted
                </p>
              </div>
              <div>
                <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                  200+
                </div>
                <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                  Students Taught
                </p>
              </div>
              <div>
                <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                  4
                </div>
                <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                  Years of Calm
                </p>
              </div>
              <div>
                <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                  100%
                </div>
                <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                  Handmade
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h2 
            className="text-center mb-16 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Stories from Our Studio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-8 border-0 bg-white shadow-lg hover:shadow-2xl transition-shadow h-full">
                  <p 
                    className="text-[#3E2F24] mb-6 italic"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: '1.6' }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <p className="text-[#A67C52]" style={{ fontSize: '16px' }}>
                    — {testimonial.author}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner Block */}
      <section className="py-20 bg-[#3E2F24]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p 
            className="text-[#F7F3EF]"
            style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '32px', lineHeight: '1.4' }}
          >
            "Clay remembers every touch."
          </p>
        </div>
      </section>
    </div>
  );
}
