import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, Users, MessageCircle } from 'lucide-react';

export function ClassesPage() {
  const upcomingClasses = [
    {
      title: 'Wheel-Throwing Basics',
      level: 'Beginner',
      duration: '3 hours',
      price: '₹2,500',
      date: 'Nov 5, 2025',
      time: '10:00 AM - 1:00 PM',
      spots: 6,
      image: 'https://images.unsplash.com/photo-1590605049074-f1780f70b791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd2hlZWwlMjBjbGF5fGVufDF8fHx8MTc2MTM3NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Learn to center clay and create your first bowl on the pottery wheel.',
    },
    {
      title: 'Hand-Building Techniques',
      level: 'Beginner',
      duration: '4 hours',
      price: '₹3,000',
      date: 'Nov 12, 2025',
      time: '2:00 PM - 6:00 PM',
      spots: 8,
      image: 'https://images.unsplash.com/photo-1753164726043-31e583f8a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBjbGF5fGVufDF8fHx8MTc2MTQ1NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Explore coil, slab, and pinch techniques to build unique forms.',
    },
    {
      title: 'Glazing & Surface Design',
      level: 'Intermediate',
      duration: '3 hours',
      price: '₹2,800',
      date: 'Nov 19, 2025',
      time: '11:00 AM - 2:00 PM',
      spots: 5,
      image: 'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Master glaze application and decorative techniques for stunning finishes.',
    },
    {
      title: 'Pottery Weekend Intensive',
      level: 'All Levels',
      duration: '2 days',
      price: '₹8,500',
      date: 'Nov 26-27, 2025',
      time: '10:00 AM - 4:00 PM',
      spots: 4,
      image: 'https://images.unsplash.com/photo-1710834925630-7dee6c880b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwY2xhc3MlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Immersive 2-day workshop covering throwing, trimming, and glazing.',
    },
  ];

  const handleWhatsAppBooking = (className: string) => {
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(`I would like to book: ${className}`)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen py-24 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 8vw, 64px)' }}
          >
            Classes & Workshops
          </h1>
          <p 
            className="text-[#6B5D52] mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px' }}
          >
            Find peace in your hands.
          </p>
          <p className="text-[#3E2F24] max-w-2xl mx-auto" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Whether you're a complete beginner or looking to refine your skills, our workshops 
            offer a calm space to learn, create, and connect with clay.
          </p>
        </div>

        {/* Upcoming Classes */}
        <div className="mb-20">
          <h2 
            className="mb-12 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '40px' }}
          >
            Upcoming Sessions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingClasses.map((classItem, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#E5E0DC] rounded-lg">
                  <ImageWithFallback
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <h3 
                      className="text-[#3E2F24]" 
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                    >
                      {classItem.title}
                    </h3>
                    <Badge 
                      className={`ml-2 ${
                        classItem.level === 'Beginner' 
                          ? 'bg-[#8DA9A0] text-white' 
                          : classItem.level === 'Intermediate'
                          ? 'bg-[#A67C52] text-white'
                          : 'bg-[#E5E0DC] text-[#3E2F24]'
                      }`}
                    >
                      {classItem.level}
                    </Badge>
                  </div>

                  <p className="text-[#6B5D52] mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {classItem.description}
                  </p>

                  <div className="space-y-2 mb-4 text-[#3E2F24]" style={{ fontSize: '15px' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#A67C52]" />
                      <span>{classItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#A67C52]" />
                      <span>{classItem.time} ({classItem.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#A67C52]" />
                      <span>{classItem.spots} spots available</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#3E2F24]/10">
                    <span 
                      className="text-[#A67C52]"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
                    >
                      {classItem.price}
                    </span>
                    <Button
                      onClick={() => handleWhatsAppBooking(classItem.title)}
                      className="bg-[#A67C52] hover:bg-[#8B6644] text-white rounded-lg"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Workshop Gallery */}
        <div className="mb-20">
          <h2 
            className="mb-12 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '40px' }}
          >
            From Our Workshops
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        <div className="bg-[#E5E0DC] rounded-lg p-10 max-w-3xl mx-auto">
          <h3 
            className="mb-8 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: '32px' }}
          >
            What's Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#3E2F24]">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>All Materials</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Clay, tools, and glazes provided
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>Expert Instruction</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  Learn from experienced ceramicists
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>Firing Included</h4>
                <p className="text-[#6B5D52]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  We'll fire and glaze your pieces
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#A67C52] rounded-full mt-2" />
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
