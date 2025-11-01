import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'Terra Dining Collection',
      client: 'The Grove Restaurant',
      year: '2024',
      description: 'Custom tableware collection featuring 120 pieces including plates, bowls, and serving platters with our signature off-white glaze and terracotta details.',
      image: 'https://images.unsplash.com/photo-1754215938408-34186fa6ca92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGFibGV3YXJlJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NjE5NzcwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Tableware', 'Restaurant', 'Custom Glaze'],
    },
    {
      title: 'Artisan Mug Series',
      client: 'Bloom Coffee House',
      year: '2024',
      description: 'A collection of 50 handcrafted mugs with unique textures and organic shapes, designed to elevate the coffee experience with warmth and character.',
      image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mugs', 'Coffee', 'Handmade'],
    },
    {
      title: 'Botanical Vase Collection',
      client: 'Petals & Clay Gallery',
      year: '2023',
      description: 'Exhibition series of 30 sculptural vases inspired by natural forms, each piece celebrating the beauty of imperfection and organic movement.',
      image: 'https://images.unsplash.com/photo-1722501428493-1db3d0df9023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZXMlMjBoYW5kY3JhZnRlZHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vases', 'Exhibition', 'Sculptural'],
    },
    {
      title: 'Minimalist Bowl Series',
      client: 'Urban Zen Living',
      year: '2023',
      description: 'Clean, contemporary bowls with subtle texture variations. 80 pieces created for a modern home goods retailer emphasizing mindful living.',
      image: 'https://images.unsplash.com/photo-1761210719325-283557e92487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bHMlMjBhcnRpc2FufGVufDF8fHx8MTc2MTQ1NDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Bowls', 'Minimalist', 'Wholesale'],
    },
    {
      title: 'Heritage Pottery Workshop',
      client: 'Community Arts Center',
      year: '2023',
      description: 'Led a 6-month workshop series teaching traditional pottery techniques to 45 community members, resulting in a collaborative exhibition.',
      image: 'https://images.unsplash.com/photo-1739430170523-29f7a6c7093f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwcHJvamVjdHN8ZW58MXx8fHwxNzYxOTc3MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Workshop', 'Community', 'Education'],
    },
    {
      title: 'Earth Tones Plate Collection',
      client: 'Harvest Table',
      year: '2022',
      description: 'A warm collection of dinner plates and side plates featuring natural earth tones and organic edges, perfect for farm-to-table dining.',
      image: 'https://images.unsplash.com/photo-1623682522867-ef176aa9c883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwcG90dGVyeXxlbnwxfHx8fDE3NjE0NTQwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Plates', 'Organic', 'Dining'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#E5E0DC] text-center border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            className="mb-6 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-[#6B5D52] max-w-2xl mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From custom collections for restaurants to community workshops, each project reflects our commitment to craftsmanship, collaboration, and creating pieces that tell a story.
          </motion.p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 bg-[#3E2F24] text-center border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#F7F3EF] mb-8 italic"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', lineHeight: '1.6' }}
            >
              "We strive to make the impossible possible through the soil.<br />
              A man shaped by clay, I dream to create innovations born from the earth itself.<br />
              Through the gifts of the soil, I will nurture the health of every person,<br />
              and ensure that nothing we create from the earth ever harms nature."
            </p>
            <p className="text-[#A67C52]" style={{ fontSize: '16px' }}>
              — Pradip Narayan Rahigade, Founder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-16 px-4 bg-[#8DA9A0]/10 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-center mb-8 text-[#3E2F24]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Artisan Behind the Studio
            </h2>
            <div className="space-y-4 text-[#3E2F24]" style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p className="mb-4">
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>Pradip Narayan Rahigade</strong> brings over a decade of dedication to the ancient craft of pottery, merging traditional techniques with contemporary design sensibilities.
              </p>
              <div className="space-y-2">
                <p><strong>2014 - 2016:</strong> Applied Art, Dalvies and Kalaniketan Mahavidyalay, Kolhapur, Maharashtra</p>
                <p><strong>2016 - 2017:</strong> Pottery Course in Terracotta Medium, KPJ Prabhu Artisan Training Institute, Bangalore</p>
                <p><strong>2017:</strong> Ceramic Production Department, Claystation Bangalore</p>
                <p><strong>2018 - 2021:</strong> Founded and operated pottery studio in Kolhapur, Maharashtra</p>
                <p><strong>2021:</strong> Worked at Nugu Handmade, Mysore, Karnataka</p>
                <p><strong>2021 - 2023:</strong> Established and ran studio in Bangalore, Karnataka</p>
                <p><strong>2023 - Present:</strong> Leading Callipottery Studio, creating earth-conscious ceramics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 border-b-4 border-[#A67C52]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-start mb-3">
                      <h3
                        className="text-[#3E2F24]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-[#A67C52] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[#A67C52] mb-2" style={{ fontSize: '14px' }}>
                      {project.client} • {project.year}
                    </p>
                    <p className="text-[#6B5D52] mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#E5E0DC] text-[#3E2F24] rounded-full"
                          style={{ fontSize: '12px' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#E5E0DC] text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 text-[#3E2F24]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let's Create Together
            </h2>
            <p className="text-[#6B5D52] mb-8" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Interested in a custom project or collaboration? We'd love to bring your vision to life with our handcrafted ceramics.
            </p>
            <motion.button
              onClick={() => window.open('https://wa.me/919876543210?text=I would like to discuss a custom pottery project', '_blank')}
              className="px-8 py-4 bg-[#A67C52] hover:bg-[#8B6644] text-[#F7F3EF] rounded-lg shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
