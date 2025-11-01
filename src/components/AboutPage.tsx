import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Circle } from 'lucide-react';

export function AboutPage() {
  const processSteps = [
    {
      title: 'Mold',
      description: 'Shape your vision with hands and heart',
      icon: '🏺',
    },
    {
      title: 'Fire',
      description: 'Transform clay through heat and time',
      icon: '🔥',
    },
    {
      title: 'Glaze',
      description: 'Add color, texture, and final beauty',
      icon: '✨',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b-4 border-[#A67C52]">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1751564360748-3b5652060a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-[#3E2F24] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Clay, Fire, and Heart.
          </h1>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 bg-[#3E2F24] text-center border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
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
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 bg-[#F7F3EF] border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 
                className="mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Meet Pradip Narayan Rahigade
              </h2>
              <div className="space-y-4 text-[#3E2F24]" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                <p>
                  Pradip Narayan Rahigade is a master potter whose journey with clay began over a decade ago. 
                  His hands carry the wisdom of traditional techniques learned across India, from Kolhapur to 
                  Bangalore, Mysore to the heart of Karnataka's ceramic heritage.
                </p>
                <p>
                  After formal training in Applied Art and intensive pottery courses in terracotta and ceramics, 
                  Pradip worked with renowned studios like Claystation and Nugu Handmade, where he honed his 
                  craft and developed his unique aesthetic — one that honors the earth and celebrates handmade 
                  imperfection.
                </p>
                <p>
                  Shaped by clay himself, Pradip founded Callipottery Studio with a vision to create innovations 
                  born from the earth that nurture health and never harm nature. Every piece he creates is a 
                  testament to sustainable practice, artistic integrity, and the transformative power of soil.
                </p>
                <p 
                  className="italic text-[#A67C52]"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}
                >
                  "Through the gifts of the soil, I will nurture the health of every person."
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675101337462-a19b63af8b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwaGFuZHMlMjBjbGF5fGVufDF8fHx8MTc2MTk3NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pradip Narayan Rahigade, founder and master potter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 bg-[#8DA9A0]/10 border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="mb-12 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Journey
          </h2>
          <div className="space-y-6">
            {[
              { year: '2014 - 2016', detail: 'Applied Art, Dalvies and Kalaniketan Mahavidyalay, Kolhapur, Maharashtra' },
              { year: '2016 - 2017', detail: 'Pottery course in terracotta medium, KPJ Prabhu Artisan Training Institute, Bangalore' },
              { year: '2017', detail: 'Ceramic Production Department, Claystation Bangalore' },
              { year: '2018 - 2021', detail: 'Founded and operated pottery studio in Kolhapur, Maharashtra' },
              { year: '2021', detail: 'Worked at Nugu Handmade, Mysore Karnataka' },
              { year: '2021 - 2023', detail: 'Ran own studio in Bangalore, Karnataka' },
              { year: '2023 - Present', detail: 'Leading Callipottery Studio with a vision for earth-conscious ceramics' },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-[#A67C52]" style={{ fontFamily: 'var(--font-serif)', fontSize: '16px' }}>
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <div className="h-3 w-3 rounded-full bg-[#A67C52] -mt-1" />
                </div>
                <div className="flex-grow-[3] text-[#3E2F24]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {milestone.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-[#E5E0DC] border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 
            className="text-4xl mb-8 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Studio Philosophy
          </h2>
          <div className="space-y-6 text-lg text-[#3E2F24] leading-relaxed">
            <p 
              className="text-2xl italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "Every pot begins as a pause."
            </p>
            <p>
              At Callipottery, we believe in the power of slowing down. In a world that 
              rushes, we center. In a culture of perfection, we celebrate the handmade imperfection.
            </p>
            <p>
              Our studio is built on three principles: <span style={{ fontFamily: 'var(--font-serif)' }}>Touch</span> — 
              connecting with materials and process; <span style={{ fontFamily: 'var(--font-serif)' }}>Time</span> — 
              respecting the slow transformation of clay; <span style={{ fontFamily: 'var(--font-serif)' }}>Transformation</span> — 
              both of clay and of self.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-[#F7F3EF] border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-5xl">
          <h2 
            className="text-4xl mb-12 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-8 text-center border-[#3E2F24]/10 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#A67C52] rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                
                <div className="text-5xl mb-4">{step.icon}</div>
                
                <h3 
                  className="text-2xl mb-3 text-[#3E2F24]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {step.title}
                </h3>
                
                <p className="text-[#6B5D52]">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-[#3E2F24] border-b-4 border-[#A67C52]">
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-video bg-[#E5E0DC] rounded-2xl overflow-hidden flex items-center justify-center relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Glazing process"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                <Circle className="w-10 h-10 text-[#A67C52] fill-[#A67C52]" />
              </div>
            </div>
          </div>
          <p 
            className="text-center mt-6 text-[#F7F3EF] italic"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Watch our glazing and throwing process
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#F7F3EF]">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="text-4xl mb-12 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sustainable Practice',
                description: 'We recycle clay, use eco-friendly glazes, and minimize waste in every step.',
              },
              {
                title: 'Inclusive Community',
                description: 'Our studio welcomes all skill levels, backgrounds, and creative visions.',
              },
              {
                title: 'Slow Craft Movement',
                description: 'We honor traditional techniques and the unhurried beauty of handwork.',
              },
              {
                title: 'Mental Wellness',
                description: 'Pottery as meditation — we believe in the healing power of making.',
              },
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6B5D52]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
