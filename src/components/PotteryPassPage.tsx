import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, Clock, Palette } from 'lucide-react';

export function PotteryPassPage() {
  const handleWhatsApp = (plan: string) => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(`I'm interested in the ${plan} - Pottery Pass`)}`,
      '_blank'
    );
  };

  const passes = [
    {
      name: 'One Day Pass',
      price: '₹600',
      taxNote: '(incl. taxes)',
      color: '#A67C52',
      features: [
        'Studio access: 11 AM – 5 PM',
        'Clay available at ₹50/kg',
        'Firing & glaze charges separate',
        'All studio tools available',
        'Keep your workspace clean',
        'Recycle clay scraps responsibly',
        'Mark & sign your pieces',
      ],
      note: 'Unfinished bone-dry pieces will be recycled',
      popular: false,
    },
    {
      name: 'One Day Production Pass',
      price: '₹1,000',
      taxNote: '(incl. taxes)',
      color: '#8DA9A0',
      features: [
        'Studio access: 11 AM – 5 PM',
        'Clay available at ₹50/kg',
        'Firing & glaze charges separate',
        'All studio tools available',
        'Ideal for larger production batches',
        'Keep your workspace clean',
        'Recycle clay scraps responsibly',
        'Mark & sign your pieces',
      ],
      note: 'Designed for makers producing in larger quantities',
      popular: true,
    },
    {
      name: 'Half Day Pass',
      price: '₹300',
      taxNote: '(incl. taxes)',
      color: '#E5E0DC',
      textColor: '#3E2F24',
      features: [
        'Studio access: 11 AM – 2 PM',
        'Clay available at ₹50/kg',
        'Firing & glaze charges separate',
        'All studio tools available',
        'Perfect for quick sessions',
        'Keep your workspace clean',
        'Recycle clay scraps responsibly',
        'Mark & sign your pieces',
      ],
      note: 'Great for testing ideas and small projects',
      popular: false,
    },
    {
      name: 'Half Day Production Pass',
      price: '₹500',
      taxNote: '(incl. taxes)',
      color: '#6B5D52',
      features: [
        'Studio access: 11 AM – 2 PM',
        'Clay available at ₹50/kg',
        'Firing & glaze charges separate',
        'All studio tools available',
        'For small-scale makers',
        'Shorter time blocks',
        'Keep your workspace clean',
        'Recycle clay scraps responsibly',
        'Mark & sign your pieces',
      ],
      note: 'All studio guidelines apply',
      popular: false,
    },
  ];

  const guidelines = [
    'Keep your workspace clean',
    'Recycle clay scraps responsibly',
    'Mark & sign your pieces with your name',
    'Unfinished bone-dry pieces will be recycled after 2 weeks',
    'Clay available for purchase at ₹50/kg',
    'Firing and glaze charges apply separately',
    'Book in advance to ensure availability',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 bg-[#E5E0DC] overflow-hidden border-t-4 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 6vw, 64px)' }}
              >
                Pottery Pass
              </h1>
              <p
                className="text-[#3E2F24] mb-2"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontStyle: 'italic' }}
              >
                Open Studio Access
              </p>
              <p
                className="text-[#6B5D52] mb-8"
                style={{ fontSize: '18px', lineHeight: '1.8' }}
              >
                Explore and create at your own pace in our open studio. Ideal for independent practice and small-batch production.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  onClick={() => handleWhatsApp('Pottery Pass inquiry')}
                  className="bg-[#A67C52] hover:bg-[#8B6644] text-[#F7F3EF] px-8 py-6 rounded-lg shadow-lg"
                >
                  Book Your Pass Today
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[350px] sm:h-[400px] rounded-lg overflow-hidden shadow-2xl border-4 border-[#A67C52]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605023188746-330a9fd74db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwbWVtYmVyc2hpcCUyMGNhcmR8ZW58MXx8fHwxNzYxOTc3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pottery studio membership"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pass Options */}
      <section className="py-16 sm:py-24 px-4 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-4 text-[#3E2F24]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              Choose Your Pass
            </h2>
            <p className="text-[#6B5D52]" style={{ fontSize: '18px' }}>
              Flexible options for every creative journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {passes.map((pass, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {pass.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-[#A67C52] text-[#F7F3EF] px-4 py-1 rounded-full text-sm">
                      Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`p-6 border-0 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col ${
                    pass.popular ? 'ring-2 ring-[#A67C52]' : ''
                  }`}
                  style={{
                    backgroundColor: 'white',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: pass.color }}
                  >
                    {pass.popular ? (
                      <Clock className="w-6 h-6 text-white" />
                    ) : (
                      <Palette className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3
                    className="text-center mb-2 text-[#3E2F24]"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 3vw, 24px)' }}
                  >
                    {pass.name}
                  </h3>
                  <div className="text-center mb-6">
                    <span
                      className="text-[#3E2F24]"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 40px)' }}
                    >
                      {pass.price}
                    </span>
                    <p className="text-[#6B5D52] text-sm">{pass.taxNote}</p>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pass.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#A67C52] flex-shrink-0 mt-0.5" />
                        <span className="text-[#3E2F24] text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {pass.note && (
                    <p className="text-[#6B5D52] text-xs italic mb-4 text-center">
                      {pass.note}
                    </p>
                  )}
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      onClick={() => handleWhatsApp(pass.name)}
                      className={`w-full py-4 rounded-lg ${
                        pass.popular
                          ? 'bg-[#A67C52] hover:bg-[#8B6644] text-white'
                          : 'bg-white border-2 border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white'
                      }`}
                    >
                      Book {pass.name}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Guidelines */}
      <section className="py-16 sm:py-20 px-4 bg-[#8DA9A0]/10 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-center mb-12 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 40px)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Studio Guidelines
          </motion.h2>

          <div className="bg-white p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-4 border-[#A67C52]">
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#3E2F24]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {guideline}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-[#3E2F24] text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 text-[#F7F3EF]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              Ready to Start Creating?
            </h2>
            <p className="text-[#E5E0DC] mb-8" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Book your pass and experience the joy of working with clay in our fully-equipped studio.
            </p>
            <motion.button
              onClick={() => handleWhatsApp('Pottery Pass inquiry')}
              className="px-8 py-4 bg-[#A67C52] hover:bg-[#8B6644] text-[#F7F3EF] rounded-lg shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us on WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
