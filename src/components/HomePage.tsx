import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const products = [
  {
    id: 1,
    name: 'Handcrafted Mug',
    category: 'Mugs',
    image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYyNzEwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Artisan Plate',
    category: 'Plates',
    image: 'https://images.unsplash.com/photo-1759753865666-a6bd3da8971d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGUlMjBhcnRpc2FufGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Ceramic Vase',
    category: 'Vases',
    image: 'https://images.unsplash.com/photo-1675604587136-f91dc1a4473b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZSUyMHBvdHRlcnl8ZW58MXx8fHwxNzYyNTk1NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Serving Bowl',
    category: 'Bowls',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const courses = [
  {
    title: 'Wheel Throwing',
    level: 'Beginner',
    description: 'Discover the art of shaping clay on the potter\'s wheel.',
    image: 'https://images.unsplash.com/photo-1753164725052-47a9c5e8067f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd2hlZWwlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjI3MTA4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Hand Building',
    level: 'Beginner Level 1',
    description: 'Master the art of hand building using slabs, coils, and attachments.',
    image: 'https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYnVpbGRpbmclMjBwb3R0ZXJ5JTIwY29pbHxlbnwxfHx8fDE3NjI3MTA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Glaze Application',
    level: 'Level 1',
    description: 'Learn how to transform your pottery into finished works of art.',
    image: 'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYyNzEwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function FadeUpSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1740329362227-45c2f46a1f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwdGFibGUlMjBzZXR0aW5nJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2MjcxMDc5OHww&ixlib=rb-4.1.0&q=80&w=1080')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2F2925]/40 via-[#2F2925]/30 to-[#F5F2EB]" />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-white/95 backdrop-blur-sm p-8 md:p-12 max-w-2xl rounded-sm shadow-2xl"
            >
              <p className="text-[#A35D38] tracking-widest mb-4 uppercase text-sm">
                Objects of Quiet Beauty
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#2F2925] mb-6">
                Made by Hand.
              </h1>
              <p className="text-xl text-[#6B6560] mb-8 leading-relaxed">
                Discover the art of hand-thrown pottery and the beauty of imperfection.
              </p>
              <Button
                onClick={() => onNavigate('shop')}
                className="bg-[#A35D38] hover:bg-[#8B4D2E] text-white px-8 py-6 group"
              >
                Shop the Barrel Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection>
            <div className="text-center mb-16">
              <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
                Featured Collection
              </p>
              <h2 className="text-4xl md:text-5xl text-[#2F2925]">
                Handcrafted Pieces
              </h2>
            </div>
          </FadeUpSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <FadeUpSection key={product.id} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-sm mb-4 aspect-square bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#2F2925]/0 group-hover:bg-[#2F2925]/20 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => onNavigate('shop')}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#2F2925] hover:bg-[#A35D38] hover:text-white"
                      >
                        View Collection
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B6560] mb-1">{product.category}</p>
                  <h3 className="text-lg text-[#2F2925]">{product.name}</h3>
                </div>
              </FadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUpSection>
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1753164726043-31e583f8a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBjbGF5JTIwcG90dGVyeXxlbnwxfHx8fDE3NjI3MTA4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hands shaping clay"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.2}>
              <div>
                <p className="text-[#A35D38] tracking-widest mb-4 uppercase text-sm">
                  Our Philosophy
                </p>
                <h2 className="text-4xl md:text-5xl text-[#2F2925] mb-6">
                  Shaped by Clay
                </h2>
                <blockquote className="text-xl text-[#6B6560] italic mb-8 leading-relaxed border-l-4 border-[#A35D38] pl-6">
                  "We strive to make the impossible possible through the soil. A man shaped by clay,
                  I dream to create innovations born from the earth itself…"
                </blockquote>
                <p className="text-[#2F2925] mb-2">— Pradip Narayan Rahigade</p>
                <p className="text-[#6B6560] mb-8">Founder, Callipottery Studio</p>
                <Button
                  onClick={() => onNavigate('about')}
                  variant="outline"
                  className="border-[#A35D38] text-[#A35D38] hover:bg-[#A35D38] hover:text-white"
                >
                  Meet the Artist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* Workshops Preview */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUpSection>
            <div className="text-center mb-16">
              <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
                Learn With Us
              </p>
              <h2 className="text-4xl md:text-5xl text-[#2F2925]">Our Courses</h2>
            </div>
          </FadeUpSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <FadeUpSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-[#A35D38]/10 text-[#A35D38] text-xs mb-3 rounded-full">
                      {course.level}
                    </div>
                    <h3 className="text-2xl text-[#2F2925] mb-3">{course.title}</h3>
                    <p className="text-[#6B6560] mb-4">{course.description}</p>
                    <Button
                      onClick={() => onNavigate('classes')}
                      variant="outline"
                      className="w-full border-[#A35D38] text-[#A35D38] hover:bg-[#A35D38] hover:text-white uppercase tracking-widest"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </FadeUpSection>
            ))}
          </div>

          <FadeUpSection delay={0.4}>
            <div className="text-center">
              <Button
                onClick={() => onNavigate('classes')}
                className="bg-[#A35D38] hover:bg-[#8B4D2E] text-white px-8 py-6"
              >
                View All Classes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </FadeUpSection>
        </div>
      </section>

      {/* Kiln & Studio Teasers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUpSection>
              <div className="bg-[#2F2925] text-white p-10 rounded-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl mb-4">Fire & Finish</h3>
                  <p className="text-[#E8E3D9] mb-6 leading-relaxed">
                    Book kiln time for your ceramic pieces. Professional firing services with
                    various temperature options.
                  </p>
                </div>
                <Button
                  onClick={() => onNavigate('kiln')}
                  className="bg-[#A35D38] hover:bg-[#8B4D2E] text-white w-full"
                >
                  Book Kiln Time
                </Button>
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.2}>
              <div className="bg-[#A35D38] text-white p-10 rounded-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl mb-4">Pottery Pass</h3>
                  <p className="text-[#F5F2EB] mb-6 leading-relaxed">
                    Explore our open studio. Create at your own pace with access to wheels, tools,
                    and expert guidance.
                  </p>
                </div>
                <Button
                  onClick={() => onNavigate('studio')}
                  className="bg-white text-[#A35D38] hover:bg-[#F5F2EB] w-full"
                >
                  Explore Open Studio
                </Button>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

    </div>
  );
}
