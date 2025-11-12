import { motion } from 'motion/react';
import { Award, Heart, Lightbulb, Target } from 'lucide-react';
import pradipImage from '../../lib/Images/pradip.jpeg';

const processes = [
  {
    step: '01',
    title: 'Clay Preparation',
    description: 'Selecting and wedging clay to remove air bubbles',
    detail: 'We carefully prepare each batch of clay, ensuring consistency and removing any impurities that could affect the final piece.',
  },
  {
    step: '02',
    title: 'Shaping',
    description: 'Hand-throwing or hand-building each unique piece',
    detail: 'Using the wheel or hand-building techniques, we bring form and intention to each piece.',
  },
  {
    step: '03',
    title: 'Trimming & Refining',
    description: 'Perfecting the form and adding details',
    detail: 'Careful attention to proportion, balance, and surface texture elevates each piece.',
  },
  {
    step: '04',
    title: 'Bisque Firing',
    description: 'First firing to harden the clay',
    detail: 'The initial firing transforms soft clay into durable ceramic, preparing it for glazing.',
  },
  {
    step: '05',
    title: 'Glazing',
    description: 'Applying colors and finishes',
    detail: 'Expertly applied glazes add color, texture, and a protective finish to each piece.',
  },
  {
    step: '06',
    title: 'Final Firing',
    description: 'High-temperature firing to set the glaze',
    detail: 'The final transformation happens in the kiln, where heat and chemistry create the finished work.',
  },
];

const clientProjects = [
  {
    title: 'Custom Dinnerware Set',
    client: 'Restaurant Commission',
    image: 'https://images.unsplash.com/photo-1759753865666-a6bd3da8971d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGUlMjBhcnRpc2FufGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Artisan Mugs Collection',
    client: 'Cafe Collaboration',
    image: 'https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVnJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYyNzEwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Decorative Vases',
    client: 'Interior Design Project',
    image: 'https://images.unsplash.com/photo-1675604587136-f91dc1a4473b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZSUyMHBvdHRlcnl8ZW58MXx8fHwxNzYyNTk1NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Serving Bowls',
    client: 'Private Collection',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMGhhbmRtYWRlfGVufDF8fHx8MTc2MjcxMDgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F2EB]">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">Our Story</p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-8">About Us</h1>
            <blockquote className="text-2xl text-[#6B6560] italic leading-relaxed">
              "We strive to make the impossible possible through the soil. A man shaped by clay,
              I dream to create innovations born from the earth itself…"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[600px] rounded-sm overflow-hidden">
                <img
                  src={pradipImage}
                  alt="Pradip Narayan Rahigade"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl text-[#2F2925] mb-4">Pradip Narayan Rahigade</h2>
              <p className="text-[#A35D38] mb-6">Founder & Master Potter</p>

              <div className="space-y-4 text-[#6B6560] leading-relaxed">
                <p>
                  Born with clay in his hands and dreams in his heart, Pradip Narayan Rahigade has
                  dedicated his life to the ancient art of pottery. His journey began in a small
                  village where he first discovered the transformative power of working with earth.
                </p>
                <p>
                  "I believe the soul of the maker flows into each piece," Pradip often says.
                  "Through pottery, I've found a way to connect with something timeless, something
                  that transcends the material world."
                </p>
                <p>
                  With over two decades of experience, Pradip has not only mastered the wheel but
                  has also pioneered new techniques that blend traditional methods with contemporary
                  aesthetics. His work has been featured in exhibitions across the country and
                  graces the homes of collectors worldwide.
                </p>
                <p>
                  At Callipottery Studio, Pradip shares his passion and expertise, teaching others
                  to find their own connection with clay. His philosophy is simple: every person
                  has the capacity to create beauty, and pottery is a journey of self-discovery as
                  much as it is a craft.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#A35D38]" />
                  <div>
                    <div className="text-2xl text-[#2F2925]">20+</div>
                    <div className="text-sm text-[#6B6560]">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-[#A35D38]" />
                  <div>
                    <div className="text-2xl text-[#2F2925]">1000+</div>
                    <div className="text-sm text-[#6B6560]">Students Taught</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'Pushing boundaries while honoring traditional techniques and craftsmanship.',
              },
              {
                icon: Heart,
                title: 'Passion',
                description:
                  'Every piece is created with love, care, and attention to detail.',
              },
              {
                icon: Target,
                title: 'Quality',
                description:
                  'We never compromise on the quality of our materials or our finished work.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-[#A35D38] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-[#2F2925] mb-3">{value.title}</h3>
                <p className="text-[#6B6560]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Timeline Design */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Our Process</h2>
            <p className="text-[#6B6560]">
              From earth to art: the journey of each handcrafted piece
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#A35D38]/20 -translate-x-1/2" />

            <div className="space-y-12">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}
                >
                  {/* Content - Left side for even, right side for odd */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'
                    }`}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Step Number */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#A35D38] to-[#8B4D2E] text-white mb-4 ${
                          index % 2 === 0 ? '' : 'md:ml-auto'
                        }`}
                      >
                        <span className="text-2xl">{process.step}</span>
                      </div>

                      <h3 className="text-2xl text-[#2F2925] mb-3">
                        {process.title}
                      </h3>
                      <p className="text-[#6B6560] mb-3">
                        {process.description}
                      </p>
                      <p className="text-sm text-[#6B6560]/80 leading-relaxed">
                        {process.detail}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node - Center */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-6 h-6 rounded-full bg-[#A35D38] border-4 border-[#F5F2EB] shadow-lg"
                    />
                  </div>

                  {/* Image/Visual - Right side for even, left side for odd */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'
                    }`}
                  >
                    <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A35D38]/90 to-[#2F2925]/90 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <div className="text-6xl mb-2 opacity-30">{process.step}</div>
                          <div className="text-xl opacity-80">{process.title}</div>
                        </div>
                      </div>
                      {/* Decorative Pattern */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Client Projects</h2>
            <p className="text-[#6B6560]">
              Custom commissions and collaborations we're proud of
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg text-[#2F2925] mb-1">{project.title}</h3>
                <p className="text-sm text-[#6B6560]">{project.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
