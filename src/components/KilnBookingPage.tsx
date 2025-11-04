import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flame, Package } from 'lucide-react';

export function KilnBookingPage() {
  const handleWhatsAppBooking = () => {
    window.open(
      'https://wa.me/919876543210?text=I would like to book kiln time at Callipottery Studio',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border-4 border-[#A67C52]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWxuJTIwZmlyZSUyMGNlcmFtaWNzfGVufDF8fHx8MTc2MTQ1NDAyMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Glowing kiln"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F24]/80 via-[#3E2F24]/40 to-transparent flex items-end">
            <div className="p-8">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Kiln Booking
              </h1>
              <p 
                className="text-xl text-[#F7F3EF]"
                style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic' }}
              >
                Fire & Finish
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center mb-12 max-w-3xl mx-auto border-b-4 border-[#A67C52] pb-12">
          <p className="text-lg text-[#3E2F24] leading-relaxed">
            Book our professional kilns for your ceramic pieces. We offer various firing temperatures 
            and glazing options to bring your creations to life. Our experienced team ensures proper 
            loading and firing for optimal results.
          </p>
        </div>

        {/* Kiln 1: GX2327D */}
        <div className="mb-12 border-b-4 border-[#A67C52] pb-12">
          <Card className="overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="bg-[#A67C52] text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Flame className="w-8 h-8" />
                <h2 
                  className="text-3xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  GX2327D Square Cone Art Kiln
                </h2>
              </div>
              <p className="text-[#F7F3EF]" style={{ fontSize: '18px' }}>
                23"×23"×27" | Shelf: 21"×21" square
              </p>
            </div>

            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Bisque Firing */}
                <div>
                  <h3 
                    className="text-2xl mb-4 text-[#3E2F24] flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    <Package className="w-6 h-6 text-[#A67C52]" />
                    Bisque Firing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Full kiln</span>
                      <span 
                        className="text-[#A67C52]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹9,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Per shelf</span>
                      <span 
                        className="text-[#A67C52]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹1,500
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glaze Firing */}
                <div>
                  <h3 
                    className="text-2xl mb-4 text-[#3E2F24] flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    <Flame className="w-6 h-6 text-[#A67C52]" />
                    Glaze Firing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Full kiln</span>
                      <span 
                        className="text-[#A67C52]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹10,500
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Per shelf</span>
                      <span 
                        className="text-[#A67C52]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹1,750
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capacity */}
              <div className="bg-[#E5E0DC] p-6 rounded-lg">
                <h4 
                  className="mb-4 text-[#3E2F24]"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                >
                  Capacity
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#3E2F24]">
                  <div>
                    <p className="text-sm text-[#6B5D52] mb-1">Per Shelf (Mugs)</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>23–25 mugs (3"×3")</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B5D52] mb-1">Per Shelf (Plates)</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>4 dinner plates (10")</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B5D52] mb-1">Total Shelves</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>6 full + 2 half</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Kiln 2: BX1822D */}
        <div className="mb-12 border-b-4 border-[#A67C52] pb-12">
          <Card className="overflow-hidden border-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="bg-[#8DA9A0] text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Flame className="w-8 h-8" />
                <h2 
                  className="text-3xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  BX1822D Cone Art Kiln
                </h2>
              </div>
              <p className="text-[#F7F3EF]" style={{ fontSize: '18px' }}>
                17.5"×17.5"×22.5"
              </p>
            </div>

            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Bisque Firing */}
                <div>
                  <h3 
                    className="text-2xl mb-4 text-[#3E2F24] flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    <Package className="w-6 h-6 text-[#8DA9A0]" />
                    Bisque Firing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Full kiln</span>
                      <span 
                        className="text-[#8DA9A0]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹1,800
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Per shelf</span>
                      <span 
                        className="text-[#8DA9A0]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹600
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glaze Firing */}
                <div>
                  <h3 
                    className="text-2xl mb-4 text-[#3E2F24] flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    <Flame className="w-6 h-6 text-[#8DA9A0]" />
                    Glaze Firing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Full kiln</span>
                      <span 
                        className="text-[#8DA9A0]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹2,300
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#F7F3EF] rounded-lg">
                      <span className="text-[#3E2F24]">Per shelf</span>
                      <span 
                        className="text-[#8DA9A0]"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                      >
                        ₹700
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capacity */}
              <div className="bg-[#E5E0DC] p-6 rounded-lg">
                <h4 
                  className="mb-4 text-[#3E2F24]"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '20px' }}
                >
                  Capacity
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#3E2F24]">
                  <div>
                    <p className="text-sm text-[#6B5D52] mb-1">Per Shelf (Mugs)</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>10–12 mugs (4")</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B5D52] mb-1">Total Shelves</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>4 shelves</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mb-12 border-b-4 border-[#A67C52] pb-12">
          <Button
            onClick={handleWhatsAppBooking}
            className="bg-[#A67C52] hover:bg-[#8B6644] text-white px-12 py-6 rounded-full text-lg"
          >
            Book Kiln Time on WhatsApp
          </Button>
        </div>

        {/* Firing Policy */}
        <div className="p-6 sm:p-8 bg-[#E5E0DC] rounded-lg border-4 border-[#A67C52]">
          <h3 
            className="text-xl sm:text-2xl mb-6 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Firing Policy
          </h3>
          <div className="space-y-3 text-[#3E2F24]" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }}>
            <p className="italic flex items-start gap-2">
              <span className="text-[#A67C52] flex-shrink-0">•</span>
              <span>Pieces must be bone dry before firing</span>
            </p>
            <p className="italic flex items-start gap-2">
              <span className="text-[#A67C52] flex-shrink-0">•</span>
              <span>Firing takes 3-5 days including cooling time</span>
            </p>
            <p className="italic flex items-start gap-2">
              <span className="text-[#A67C52] flex-shrink-0">•</span>
              <span>We are not responsible for pieces that crack or warp due to improper construction</span>
            </p>
            <p className="italic flex items-start gap-2">
              <span className="text-[#A67C52] flex-shrink-0">•</span>
              <span>Payment required in advance to reserve kiln space</span>
            </p>
            <p className="italic flex items-start gap-2">
              <span className="text-[#A67C52] flex-shrink-0">•</span>
              <span>Cancellations accepted up to 48 hours before scheduled firing</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
