import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Wrench, Package2, Users } from 'lucide-react';

export function OpenStudioPage() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-[#A67C52]" />,
      title: 'Professional Tools',
      description: 'Access to pottery wheels, hand tools, and equipment',
    },
    {
      icon: <Package2 className="w-6 h-6 text-[#A67C52]" />,
      title: 'Storage Options',
      description: 'Personal shelf space for works-in-progress',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#A67C52]" />,
      title: 'Flexible Hours',
      description: 'Book sessions that fit your schedule',
    },
    {
      icon: <Users className="w-6 h-6 text-[#A67C52]" />,
      title: 'Community',
      description: 'Create alongside fellow ceramicists',
    },
  ];

  const pricingOptions = [
    {
      name: 'Drop-In Session',
      price: '₹800',
      duration: '3 hours',
      includes: ['Tool access', 'Clay purchase available', 'Basic guidance'],
    },
    {
      name: 'Day Pass',
      price: '₹1,500',
      duration: 'Full day',
      includes: ['All-day access', 'Tool access', '2kg clay included', 'Storage space'],
      popular: true,
    },
    {
      name: 'Monthly Membership',
      price: '₹6,500',
      duration: 'Unlimited monthly',
      includes: ['Unlimited studio time', 'Priority booking', '10kg clay/month', 'Dedicated storage', 'Kiln discount'],
    },
  ];

  const handleWhatsAppBooking = () => {
    window.open(
      'https://wa.me/919876543210?text=I would like to reserve open studio space',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Open Studio
          </h1>
          <p 
            className="text-2xl text-[#6B5D52] mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            Create freely, in the calm of community.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Text & Features */}
          <div>
            <p className="text-lg text-[#3E2F24] mb-8 leading-relaxed">
              Our open studio is a shared creative space for independent makers. Whether you're 
              working on a personal project or honing your skills, enjoy access to professional 
              equipment, quality materials, and a supportive community of fellow artists.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E5E0DC] rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#6B5D52]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1638341840302-a2d9579b821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTM3NzY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Open pottery studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pricing Options */}
        <div className="mb-16">
          <h2 
            className="text-3xl mb-8 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Pricing & Membership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((option, index) => (
              <Card
                key={index}
                className={`p-6 border-[#3E2F24]/10 relative ${
                  option.popular ? 'ring-2 ring-[#A67C52] shadow-lg' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A67C52] text-white px-4 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {option.name}
                  </h3>
                  <div 
                    className="text-4xl text-[#A67C52] mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {option.price}
                  </div>
                  <div className="text-[#6B5D52]">{option.duration}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {option.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#3E2F24]">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleWhatsAppBooking}
                  variant={option.popular ? 'default' : 'outline'}
                  className={`w-full ${
                    option.popular
                      ? 'bg-[#A67C52] hover:bg-[#8B6644] text-white'
                      : 'border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white'
                  }`}
                >
                  Reserve Space
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Session Slots */}
        <div className="mb-16">
          <h2 
            className="text-3xl mb-8 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Available Session Slots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { day: 'Monday - Friday', time: '10:00 AM - 1:00 PM', status: 'Available' },
              { day: 'Monday - Friday', time: '2:00 PM - 5:00 PM', status: 'Available' },
              { day: 'Monday - Friday', time: '6:00 PM - 9:00 PM', status: 'Limited' },
              { day: 'Saturday', time: '9:00 AM - 12:00 PM', status: 'Limited' },
              { day: 'Saturday', time: '1:00 PM - 4:00 PM', status: 'Full' },
              { day: 'Sunday', time: '10:00 AM - 2:00 PM', status: 'Available' },
            ].map((slot, index) => (
              <Card
                key={index}
                className={`p-4 border-[#3E2F24]/10 ${
                  slot.status === 'Full' ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {slot.day}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      slot.status === 'Available'
                        ? 'bg-[#8DA9A0] text-white'
                        : slot.status === 'Limited'
                        ? 'bg-[#A67C52] text-white'
                        : 'bg-[#E5E0DC] text-[#6B5D52]'
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
                <p className="text-[#6B5D52]">{slot.time}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Studio Guidelines */}
        <div className="bg-[#E5E0DC] rounded-lg p-8">
          <h3 
            className="text-2xl mb-6 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Studio Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#3E2F24]">
            <div>• Clean your workspace before leaving</div>
            <div>• Label all pieces with your name and date</div>
            <div>• Return tools to their designated spots</div>
            <div>• Respect fellow artists' space and work</div>
            <div>• Book sessions at least 24 hours in advance</div>
            <div>• Maximum 3 consecutive hours per drop-in</div>
          </div>
        </div>
      </div>
    </div>
  );
}
