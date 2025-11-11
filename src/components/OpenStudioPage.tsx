import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle, Clock, Star, Users, CreditCard, Zap, Disc, Wrench, Palette, LayoutGrid, Package, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useRef } from 'react';

const membershipOptions = [
  {
    title: 'One Day Pass',
    price: '₹600',
    duration: 'Access for 1 full day',
    features: [
      'Wheel throwing access',
      'Hand building tools',
      'Studio glazes',
      'Basic materials included',
    ],
    popular: false,
  },
  {
    title: 'One Day Production Pass',
    price: '₹1,000',
    duration: 'Access for 1 full day',
    features: [
      'All One Day Pass benefits',
      'Extended clay allowance',
      'Premium glaze selection',
      'Priority kiln booking',
      'Ideal for production work',
    ],
    popular: true,
  },
  {
    title: 'Half Day Pass',
    price: '₹300',
    duration: 'Access for 4 hours',
    features: [
      'Wheel throwing access',
      'Hand building tools',
      'Studio glazes',
      'Perfect for quick sessions',
    ],
    popular: false,
  },
  {
    title: 'Half Day Production Pass',
    price: '₹500',
    duration: 'Access for 4 hours',
    features: [
      'All Half Day Pass benefits',
      'Extended clay allowance',
      'Premium glaze selection',
      'Great for focused projects',
    ],
    popular: false,
  },
];

const studioGuidelines = [
  'Book your slot in advance via WhatsApp',
  'Arrive on time - late arrivals may result in reduced session time',
  'Clean your workspace and tools after use',
  'Respect other artists and their work',
  'Label all your pieces with your name and date',
  'Firing fees are separate and based on piece size',
  'Children under 12 must be supervised by an adult',
  'Maximum 8 people per session to ensure quality experience',
];

const availableItems = [
  {
    title: "Potter's Wheels",
    description: 'Professional electric wheels for all skill levels',
    icon: Disc,
  },
  {
    title: 'Hand Tools',
    description: 'Complete set of shaping, trimming, and finishing tools',
    icon: Wrench,
  },
  {
    title: 'Glazes & Materials',
    description: 'Wide selection of studio glazes and clay bodies',
    icon: Palette,
  },
  {
    title: 'Work Tables',
    description: 'Spacious workstations for hand building',
    icon: LayoutGrid,
  },
  {
    title: 'Storage Space',
    description: 'Secure shelving for work in progress',
    icon: Package,
  },
  {
    title: 'Expert Guidance',
    description: 'Studio staff available for questions and tips',
    icon: GraduationCap,
  },
];

function PassCard({ option, index }: { option: typeof membershipOptions[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [15, 0, 0, -15]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 1, 1, 0.85]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective: 1000,
      }}
      className="flex-shrink-0 w-full md:w-[500px] px-4"
    >
      <motion.div
        style={{
          rotateY,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="group"
      >
        {/* Pass Card Design */}
        <div className="relative aspect-[1.6/1] bg-gradient-to-br from-[#2F2925] to-[#1a1614] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
          {/* Card Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          
          {/* Card Stripe */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#A35D38] to-[#C47A4D]" />
          
          {/* Popular Badge */}
          {option.popular && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-[#F5F2EB] text-[#A35D38] px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-xs uppercase tracking-wide">Popular</span>
              </div>
            </div>
          )}
          
          {/* Card Content */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Header */}
            <div className="pt-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[#F5F2EB]/60 text-xs uppercase tracking-wider mb-1">
                    Pottery Pass
                  </div>
                  <h3 className="text-2xl text-[#F5F2EB]">
                    {option.title}
                  </h3>
                </div>
                <CreditCard className="w-8 h-8 text-[#A35D38]" />
              </div>
              
              <div className="flex items-center gap-2 text-[#F5F2EB]/80 mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{option.duration}</span>
              </div>
            </div>
            
            {/* Middle - Features (condensed) */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-2">
                {option.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#A35D38]" />
                    <span className="text-xs text-[#F5F2EB]/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[#F5F2EB]/60 text-xs mb-1">Price</div>
                <div className="text-4xl text-[#A35D38]">{option.price}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="mt-6"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              className={`w-full py-6 uppercase tracking-widest ${
                option.popular
                  ? 'bg-[#A35D38] hover:bg-[#8B4D2E] text-white'
                  : 'bg-white border-2 border-[#A35D38] text-[#A35D38] hover:bg-[#A35D38] hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 mr-2" />
              BOOK THIS PASS VIA WHATSAPP
            </Button>
          </a>
          
          {/* Features List Below Card */}
          <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs text-[#6B6560] uppercase tracking-wider mb-3">
              What's Included:
            </div>
            <ul className="space-y-2">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#A35D38] mt-0.5 flex-shrink-0" />
                  <span className="text-[#6B6560]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function OpenStudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
              <Users className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              Create at Your Own Pace
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Pottery Pass</h1>
            <h2 className="text-3xl text-[#6B6560] mb-6">Open Studio Access</h2>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Explore and create at your own pace in our open studio. Whether you're a beginner
              or experienced potter, our space is equipped with everything you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1638341840302-a2d9579b821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjYyNTMyNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Open studio workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F2925]/60 to-transparent" />
        </motion.div>
      </section>

      {/* Membership Options - Rolodex Effect */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Choose Your Pass</h2>
            <p className="text-[#6B6560]">Scroll to explore flexible options for your creative schedule</p>
          </motion.div>

          {/* Rolodex Container */}
          <div ref={containerRef} className="relative">
            <div className="flex flex-col md:flex-row gap-12 md:gap-0 md:space-x-8 overflow-x-auto md:overflow-x-scroll pb-8 snap-x snap-mandatory scrollbar-hide md:px-[calc(50%-250px)]">
              {membershipOptions.map((option, index) => (
                <PassCard key={index} option={option} index={index} />
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-8 hidden md:block">
            <p className="text-sm text-[#6B6560]/60">← Scroll to view all passes →</p>
          </div>
        </div>
      </section>

      {/* Studio Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-[#2F2925] mb-8 text-center">Studio Guidelines</h2>

            <div className="bg-[#F5F2EB] rounded-sm p-8">
              <ul className="space-y-4">
                {studioGuidelines.map((guideline, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-[#A35D38] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-[#2F2925]">{guideline}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Available */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">What's Available</h2>
            <p className="text-[#6B6560]">Everything you need for your pottery journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availableItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-sm text-center hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-[#A35D38] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl text-[#2F2925] mb-2">{item.title}</h3>
                  <p className="text-[#6B6560]">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
