import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, Users, MessageCircle, Check } from 'lucide-react';

export function ClassesPage() {
  const classes = [
    {
      title: 'Beginner – Level 1 (Wheel Throwing)',
      level: 'Beginner',
      duration: '12 sessions | 3 hrs each',
      price: '₹11,600',
      schedule: 'Saturday & Sunday | 11 AM – 2 PM / 3 PM – 6 PM',
      image: 'https://images.unsplash.com/photo-1590605049074-f1780f70b791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd2hlZWwlMjBjbGF5fGVufDF8fHx8MTc2MTM3NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Discover the art of shaping clay on the potter\'s wheel. Learn every step — from Wedging & Centering to Pulling & Trimming — and create functional, food-safe pottery pieces.',
      highlights: [
        'Learn fundamentals of pottery',
        'Guided by expert artists',
        'Create & take home 5 finished pieces',
        'Materials and firings included',
      ],
    },
    {
      title: 'Hand Building – Beginner Level 1',
      level: 'Beginner',
      duration: '10 sessions | 3 hrs each',
      price: '₹11,600',
      schedule: 'Saturday & Sunday | 11 AM – 2 PM / 3 PM – 6 PM',
      image: 'https://images.unsplash.com/photo-1753164726043-31e583f8a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBjbGF5fGVufDF8fHx8MTc2MTQ1NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Master the art of hand building using slabs, coils, and attachments. Perfect for beginners who want to explore sculptural and functional forms.',
      highlights: [
        'Learn pinch, slab, coil, and cutwork techniques',
        'Create & take home 6 finished pieces',
        'Unlimited clay for practice',
        'Personalized instruction from studio artists',
      ],
    },
    {
      title: 'Glaze Application – Level 1',
      level: 'Intermediate',
      duration: '3 sessions | 3 hrs each',
      price: 'Contact for pricing',
      schedule: 'Limited to 6 students per batch',
      prereq: 'Prerequisite: Completion of a beginner course in wheel throwing or hand building',
      image: 'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Glazing transforms your pottery into a finished work of art. This course introduces the foundations of glaze application, from preparation to firing.',
      highlights: [
        'What glazes are & how they work',
        'Techniques: dipping, pouring, layering, underglazes',
        'Waxing, cleaning, and finishing articles before firing',
        'Identifying & fixing glaze defects',
        'Tips for consistent kiln results',
        'Use of Cone 6 glazes & Amaco underglazes',
        'Firing & materials included',
        'Practice on provided bisque articles',
        'Option to glaze one of your own bisque pieces (≤ 4"x4")',
      ],
    },
  ];

  const handleWhatsAppBooking = (className: string) => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(`I would like to book: ${className}`)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen py-12 sm:py-24 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 border-b-4 border-[#A67C52] pb-12">
          <h1 
            className="mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            Pottery Classes
          </h1>
          <p 
            className="text-[#6B5D52] mb-6"
            style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '20px' }}
          >
            Find peace in your hands.
          </p>
          <p className="text-[#3E2F24] max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Whether you're a complete beginner or looking to refine your skills, our workshops 
            offer a calm space to learn, create, and connect with clay.
          </p>
        </div>

        {/* Classes */}
        <div className="mb-20 border-b-4 border-[#A67C52] pb-20">
          <h2 
            className="mb-12 text-[#3E2F24] text-center sm:text-left"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 40px)' }}
          >
            Our Courses
          </h2>

          <div className="space-y-12">
            {classes.map((classItem, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-[#E5E0DC] rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                    <ImageWithFallback
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 bg-white flex flex-col">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 
                        className="text-[#3E2F24] flex-1" 
                        style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 3vw, 28px)' }}
                      >
                        {classItem.title}
                      </h3>
                      <Badge 
                        className={`ml-2 ${ 
                          classItem.level === 'Beginner' 
                            ? 'bg-[#8DA9A0] text-white' 
                            : 'bg-[#A67C52] text-white'
                        }`}
                      >
                        {classItem.level}
                      </Badge>
                    </div>

                    {classItem.prereq && (
                      <p className="text-[#A67C52] mb-4 italic text-sm sm:text-base" style={{ fontSize: '14px' }}>
                        {classItem.prereq}
                      </p>
                    )}

                    <p className="text-[#6B5D52] mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {classItem.description}
                    </p>

                    <div className="space-y-2 mb-4 text-[#3E2F24]" style={{ fontSize: '15px' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#A67C52] flex-shrink-0" />
                        <span>{classItem.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#A67C52] flex-shrink-0" />
                        <span>{classItem.duration}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 flex-1">
                      <h4 
                        className="mb-3 text-[#3E2F24]" 
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}
                      >
                        Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {classItem.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[#6B5D52]" style={{ fontSize: '14px' }}>
                            <Check className="w-4 h-4 text-[#A67C52] flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-[#3E2F24]/10 gap-4">
                      <span 
                        className="text-[#A67C52]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 4vw, 28px)' }}
                      >
                        {classItem.price}
                      </span>
                      <Button
                        onClick={() => handleWhatsAppBooking(classItem.title)}
                        className="bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg w-full sm:w-auto"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Workshop Gallery */}
        <div className="mb-20 border-b-4 border-[#A67C52] pb-20">
          <h2 
            className="mb-12 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 40px)' }}
          >
            From Our Workshops
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              'https://images.unsplash.com/photo-1753164726043-31e583f8a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBjbGF5fGVufDF8fHx8MTc2MTQ1NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1710834925630-7dee6c880b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwY2xhc3MlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwdG9vbHMlMjBzdHVkaW98ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={image}
                  alt={`Workshop gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-[#E5E0DC] rounded-lg p-8 sm:p-10 max-w-3xl mx-auto border-4 border-[#A67C52]">
          <h3 
            className="mb-8 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 4vw, 32px)' }}
          >
            What's Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#3E2F24]">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>All Materials</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Clay, tools, and glazes provided
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>Expert Instruction</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Learn from experienced ceramicists
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>Firing Included</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  We'll fire and glaze your pieces
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>Take Home</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Keep your finished creations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
