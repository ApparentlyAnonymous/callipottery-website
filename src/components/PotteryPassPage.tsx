import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, Star, Clock, Users, Palette, Flame } from 'lucide-react';

export function PotteryPassPage() {
  const handleWhatsApp = (plan: string) => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(`I'm interested in the ${plan} Pottery Pass membership`)}`,
      '_blank'
    );
  };

  const plans = [
    {
      name: 'Clay Explorer',
      duration: '1 Month',
      price: '₹2,999',
      color: '#E5E0DC',
      features: [
        '4 open studio sessions',
        '1 beginner workshop',
        '10% discount on shop items',
        'Basic tools access',
        'Clay storage (2kg)',
        'Community events access',
      ],
      icon: <Palette className="w-8 h-8" />,
      popular: false,
    },
    {
      name: 'Artisan Member',
      duration: '3 Months',
      price: '₹7,999',
      color: '#A67C52',
      features: [
        '12 open studio sessions',
        '2 workshops of choice',
        '15% discount on shop items',
        'Premium tools access',
        'Clay storage (5kg)',
        'Kiln firing (2 loads)',
        'Priority booking',
        'Community events access',
      ],
      icon: <Star className="w-8 h-8" />,
      popular: true,
    },
    {
      name: 'Master Creator',
      duration: '6 Months',
      price: '₹14,999',
      color: '#8DA9A0',
      features: [
        'Unlimited open studio',
        '4 workshops of choice',
        '20% discount on shop items',
        'All tools access',
        'Clay storage (10kg)',
        'Kiln firing (5 loads)',
        'Priority booking',
        '1-on-1 mentoring session',
        'Exhibition opportunity',
        'Community events access',
      ],
      icon: <Flame className="w-8 h-8" />,
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-[#A67C52]" />,
      title: 'Flexible Studio Time',
      description: 'Access our fully-equipped studio during open hours that fit your schedule.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#A67C52]" />,
      title: 'Community Connection',
      description: 'Join a vibrant community of ceramic enthusiasts and makers.',
    },
    {
      icon: <Palette className="w-6 h-6 text-[#A67C52]" />,
      title: 'Expert Guidance',
      description: 'Learn from experienced potters and refine your craft with personalized support.',
    },
    {
      icon: <Flame className="w-6 h-6 text-[#A67C52]" />,
      title: 'Kiln Access',
      description: 'Fire your creations with professional-grade kilns and glazing options.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-[#E5E0DC] overflow-hidden border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Pottery Pass
              </h1>
              <p
                className="text-[#6B5D52] mb-8"
                style={{ fontSize: '18px', lineHeight: '1.8' }}
              >
                Unlock unlimited creativity with our membership program. Get exclusive access to our studio, workshops, and a community of passionate ceramic artists.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  onClick={() => handleWhatsApp('Pottery Pass')}
                  className="bg-[#A67C52] hover:bg-[#8B6644] text-[#F7F3EF] px-8 py-6 rounded-lg shadow-lg"
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
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

      {/* Benefits Section */}
      <section className="py-20 px-4 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-center mb-16 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Join Pottery Pass?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all h-full">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3
                    className="mb-3 text-[#3E2F24]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 px-4 bg-[#8DA9A0]/10 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-4 text-[#3E2F24]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Choose Your Plan
            </h2>
            <p className="text-[#6B5D52]" style={{ fontSize: '18px' }}>
              Find the perfect membership to match your creative journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-[#A67C52] text-[#F7F3EF] px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`p-8 border-0 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all h-full ${
                    plan.popular ? 'ring-2 ring-[#A67C52]' : ''
                  }`}
                  style={{
                    backgroundColor: plan.popular ? 'white' : '#FFFFFF',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: plan.color }}
                  >
                    {plan.icon}
                  </div>
                  <h3
                    className="text-center mb-2 text-[#3E2F24]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-center text-[#6B5D52] mb-4" style={{ fontSize: '14px' }}>
                    {plan.duration}
                  </p>
                  <div className="text-center mb-8">
                    <span
                      className="text-[#3E2F24]"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#A67C52] flex-shrink-0 mt-0.5" />
                        <span className="text-[#3E2F24]" style={{ fontSize: '14px' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      onClick={() => handleWhatsApp(plan.name)}
                      className={`w-full py-6 rounded-lg ${
                        plan.popular
                          ? 'bg-[#A67C52] hover:bg-[#8B6644] text-white'
                          : 'bg-white border-2 border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white'
                      }`}
                    >
                      Choose {plan.name}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            className="text-center mb-12 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Common Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I upgrade or downgrade my membership?',
                a: 'Yes! You can upgrade at any time and the price difference will be prorated. Downgrades take effect at the next billing cycle.',
              },
              {
                q: 'What happens to unused sessions?',
                a: 'Studio sessions roll over within the same membership period but expire at renewal. We recommend booking in advance to make the most of your pass.',
              },
              {
                q: 'Do I need to bring my own materials?',
                a: 'Clay storage is included in your membership. Additional clay, glazes, and specialty materials can be purchased at member-discounted prices.',
              },
              {
                q: 'Can I share my membership?',
                a: 'Memberships are individual and non-transferable to ensure a quality experience for all members and proper studio capacity management.',
              },
              {
                q: 'Is there a trial option?',
                a: 'We offer a single open studio day pass for ₹799 so you can experience the space before committing to a membership.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <h3
                    className="mb-3 text-[#3E2F24]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#3E2F24] text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 text-[#F7F3EF]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to Start Creating?
            </h2>
            <p className="text-[#E5E0DC] mb-8" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Join our community of makers and bring your creative vision to life with clay.
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
