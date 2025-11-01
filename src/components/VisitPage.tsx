import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, Train, Car, Mail, Phone } from 'lucide-react';

export function VisitPage() {
  const studioImages = [
    'https://images.unsplash.com/photo-1638341840302-a2d9579b821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTM3NzY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1673436765927-2c94b9705f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc2hlbHZlcyUyMGNlcmFtaWNzfGVufDF8fHx8MTc2MTQ1NDAyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwdG9vbHMlMjBzdHVkaW98ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1590605049074-f1780f70b791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd2hlZWwlMjBjbGF5fGVufDF8fHx8MTc2MTM3NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen py-12 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Visit Our Studio
          </h1>
          <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
            Come experience the calm and creativity of Callipottery Studio in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Location & Map */}
          <div>
            <Card className="p-6 border-[#3E2F24]/10 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#A67C52] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Studio Location
                  </h3>
                  <p className="text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    42 Pottery Lane<br />
                    Indiranagar, Bangalore<br />
                    Karnataka 560038
                  </p>
                </div>
              </div>

              {/* Mock Google Map */}
              <div className="aspect-video bg-[#E5E0DC] rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8DA9A0]/20 to-[#A67C52]/20" />
                  <MapPin className="w-16 h-16 text-[#A67C52] relative z-10" />
                </div>
              </div>
            </Card>

            {/* Opening Hours */}
            <Card className="p-6 border-[#3E2F24]/10 bg-[#F7F3EF]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#A67C52] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-[#3E2F24]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span style={{ fontFamily: 'var(--font-serif)' }}>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span style={{ fontFamily: 'var(--font-serif)' }}>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span style={{ fontFamily: 'var(--font-serif)' }}>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Getting Here */}
          <div>
            <h2 
              className="text-3xl mb-6 text-[#3E2F24]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Getting Here
            </h2>

            <Card className="p-6 border-[#3E2F24]/10 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8DA9A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    By Metro
                  </h3>
                  <p className="text-[#3E2F24] leading-relaxed">
                    Take the Purple Line to Indiranagar Metro Station. The studio is a 
                    10-minute walk from Exit B, heading towards 100 Feet Road.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#3E2F24]/10 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8DA9A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    By Car
                  </h3>
                  <p className="text-[#3E2F24] leading-relaxed">
                    Parking available on Pottery Lane and in the adjacent parking lot. 
                    Street parking is free on weekends.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4">
              <Card className="p-4 border-[#3E2F24]/10 bg-white">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#A67C52]" />
                  <div>
                    <div className="text-sm text-[#6B5D52]">Email</div>
                    <a 
                      href="mailto:hello@callipottery.in"
                      className="text-[#3E2F24] hover:text-[#A67C52] transition-colors"
                    >
                      hello@callipottery.in
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-[#3E2F24]/10 bg-white">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#A67C52]" />
                  <div>
                    <div className="text-sm text-[#6B5D52]">Phone</div>
                    <a 
                      href="tel:+919876543210"
                      className="text-[#3E2F24] hover:text-[#A67C52] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Studio Photos Carousel */}
        <div className="mb-12">
          <h2 
            className="text-3xl mb-8 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Explore Our Space
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studioImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={image}
                  alt={`Studio space ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Visitor Info */}
        <Card className="p-8 border-[#3E2F24]/10 bg-[#E5E0DC]">
          <h3 
            className="text-2xl mb-6 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Plan Your Visit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#3E2F24]">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <p>Walk-ins welcome during studio hours</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <p>Classes and workshops require advance booking</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <p>Shop is open during all studio hours</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <p>Free studio tours on Saturday mornings</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <p>Wheelchair accessible entrance and facilities</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full mt-2 flex-shrink-0" />
                <p>Complimentary tea and coffee for visitors</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
