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
      icon: <Flame className="w-8 h-8 text-[#A67C52]" />,
      description: 'Learn to center clay and create functional pieces on the pottery wheel.',
    },
    {
      title: 'Hand-Building',
      icon: <Hand className="w-8 h-8 text-[#A67C52]" />,
      description: 'Explore coil, slab, and pinch techniques to craft unique ceramics.',
    },
    {
      title: 'Glazing & Firing',
      icon: <Palette className="w-8 h-8 text-[#A67C52]" />,
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
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b-4 border-[#A67C52]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div 
              className="text-left px-4 lg:px-12 py-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 
                className="text-[#3E2F24] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Crafted by Hand.<br />Centered in Calm.
              </motion.h1>
              <motion.p 
                className="text-[#6B5D52] mb-10 max-w-xl"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: '1.8' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Every piece tells a story of touch, time, and transformation. At Callipottery Studio, we blend ancient craft with modern design to create ceramics that bring beauty and intention to your everyday life.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => onNavigate('shop')}
                    className="bg-[#A67C52] hover:bg-[#8B6644] text-[#F7F3EF] px-8 py-6 rounded-lg shadow-lg w-full sm:w-auto"
                  >
                    Shop Ceramics
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => handleWhatsApp('I would like to book a workshop at Callipottery Studio')}
                    variant="outline"
                    className="border-2 border-[#A67C52] text-[#A67C52] bg-white hover:bg-[#A67C52] hover:text-[#F7F3EF] px-8 py-6 rounded-lg shadow-lg w-full sm:w-auto"
                  >
                    Book a Workshop
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div 
              className="relative h-[60vh] lg:h-[85vh]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675101337462-a19b63af8b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwaGFuZHMlMjBjbGF5fGVufDF8fHx8MTc2MTk3NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hands shaping clay on pottery wheel"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collections - Auto Scrolling Marquee */}
      <section className="py-24 overflow-hidden border-b-4 border-[#A67C52]">
        <h2 
          className="text-center mb-16 text-[#3E2F24] px-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Our Collections
        </h2>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F3EF] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F3EF] to-transparent z-10" />
          
          <div className="flex gap-8 animate-marquee">
            {[...collections, ...collections, ...collections].map((collection, index) => (
              <Card
                key={index}
                className="group flex-shrink-0 w-80 overflow-hidden border-0 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all cursor-pointer bg-white"
                onClick={() => onNavigate('shop')}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 
                    className="mb-2 text-[#3E2F24]" 
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                  >
                    {collection.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 px-4 bg-[#8DA9A0]/10 overflow-hidden border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                500+
              </div>
              <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                Pieces Crafted
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                200+
              </div>
              <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                Students Taught
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                4
              </div>
              <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                Years of Calm
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>
                100%
              </div>
              <p className="text-[#3E2F24] mt-2" style={{ fontSize: '14px' }}>
                Handmade
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Introduction */}
      <section className="py-24 px-4 bg-[#E5E0DC] overflow-hidden border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 
            className="mb-8 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Clay, Our Way
          </motion.h2>
          <motion.p 
            className="text-[#3E2F24] mb-6"
            style={{ fontSize: '18px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Callipottery Studio, we believe every pot begins as a pause — a moment to connect 
            with earth, fire, and yourself. Founded in 2020, our studio is a haven for makers, 
            dreamers, and anyone seeking to slow down and create something beautiful with their hands.
          </motion.p>
          <motion.p 
            className="text-[#3E2F24]"
            style={{ fontSize: '18px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We blend traditional pottery techniques with contemporary design, creating pieces that 
            honor the craft while celebrating modern minimalism. Each creation is a meditation in clay.
          </motion.p>
        </div>
      </section>

      {/* Workshops & Classes */}
      <section className="py-24 px-4 container mx-auto border-b-4 border-[#A67C52]">
        <h2 
          className="text-center mb-4 text-[#3E2F24]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Workshops & Classes
        </h2>
        <p 
          className="text-center mb-16 text-[#6B5D52]"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px' }}
        >
          Find peace in your hands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 text-center border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all h-full">
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {workshop.icon}
                </motion.div>
                <h3 
                  className="mb-4 text-[#3E2F24]" 
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                >
                  {workshop.title}
                </h3>
                <p className="text-[#6B5D52] mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {workshop.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => onNavigate('classes')}
                    variant="outline"
                    className="border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white rounded-lg"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kiln & Studio Preview */}
      <section className="py-24 px-4 bg-[#8DA9A0]/10 border-b-4 border-[#A67C52]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Kiln Booking */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow h-full">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWxuJTIwZmlyZSUyMGNlcmFtaWNzfGVufDF8fHx8MTc2MTQ1NDAyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Kiln firing ceramics"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 bg-white">
                  <h3 
                    className="mb-3 text-[#3E2F24]" 
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                  >
                    Book Kiln Time
                  </h3>
                  <p className="text-[#6B5D52] mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Fire your creations in our professional kilns. Multiple cone options available.
                  </p>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      onClick={() => handleWhatsApp('I would like to book kiln time')}
                      className="w-full bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg"
                    >
                      Book via WhatsApp
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Open Studio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow h-full">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1638341840302-a2d9579b821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTM3NzY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Pottery studio workspace"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 bg-white">
                  <h3 
                    className="mb-3 text-[#3E2F24]" 
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                  >
                    Reserve Studio Space
                  </h3>
                  <p className="text-[#6B5D52] mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Work independently in our fully-equipped open studio. Tools and materials available.
                  </p>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      onClick={() => handleWhatsApp('I would like to reserve studio space')}
                      className="w-full bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg"
                    >
                      Book via WhatsApp
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 relative border-b-4 border-[#A67C52]">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1751564360748-3b5652060a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto max-w-5xl relative z-10">
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-8 border-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow h-full">
                  <p 
                    className="text-[#3E2F24] mb-4 italic"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: '1.6' }}
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

      {/* Quote Banner */}
      <section className="py-20 px-4 bg-[#3E2F24] text-center">
        <p 
          className="text-[#F7F3EF]"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '32px', lineHeight: '1.4' }}
        >
          "Clay remembers every touch."
        </p>
      </section>
    </div>
  );
}
