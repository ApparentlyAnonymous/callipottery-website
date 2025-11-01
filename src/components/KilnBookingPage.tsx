import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Checkbox } from './ui/checkbox';
import { Flame, ThermometerSun, Package } from 'lucide-react';

export function KilnBookingPage() {
  const kilnPricing = [
    { size: 'Small Kiln', capacity: 'Up to 15 pieces', cone: 'Cone 5-6', price: '₹1,500' },
    { size: 'Medium Kiln', capacity: 'Up to 35 pieces', cone: 'Cone 5-6', price: '₹2,800' },
    { size: 'Large Kiln', capacity: 'Up to 60 pieces', cone: 'Cone 5-6', price: '₹4,500' },
    { size: 'High-Fire', capacity: 'Up to 30 pieces', cone: 'Cone 8-10', price: '₹3,500' },
  ];

  const coneOptions = [
    'Cone 04-06 (Low-fire)',
    'Cone 5-6 (Mid-fire)',
    'Cone 8-10 (High-fire)',
  ];

  const clayTypes = [
    'Earthenware',
    'Stoneware',
    'Porcelain',
    'Terracotta',
  ];

  const glazeOptions = [
    'Matte finish',
    'Glossy finish',
    'Satin finish',
    'Raw/unglazed',
  ];

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
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
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
                style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
              >
                Fire & Finish
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-[#3E2F24] leading-relaxed">
            Book our professional kilns for your ceramic pieces. We offer various firing temperatures 
            and glazing options to bring your creations to life. Our experienced team ensures proper 
            loading and firing for optimal results.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="mb-12">
          <h2 
            className="text-3xl mb-6 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Kiln Sizes & Pricing
          </h2>

          <Card className="overflow-hidden border-[#3E2F24]/10">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#E5E0DC]">
                  <TableHead>Kiln Size</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Temperature</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kilnPricing.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.size}
                    </TableCell>
                    <TableCell>{item.capacity}</TableCell>
                    <TableCell>{item.cone}</TableCell>
                    <TableCell 
                      className="text-right text-[#A67C52]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Firing Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Cone Numbers */}
          <Card className="p-6 border-[#3E2F24]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#A67C52]/10 rounded-full flex items-center justify-center">
                <ThermometerSun className="w-6 h-6 text-[#A67C52]" />
              </div>
              <h3 className="text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                Cone Numbers
              </h3>
            </div>
            <div className="space-y-3">
              {coneOptions.map((cone, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Checkbox id={`cone-${index}`} />
                  <label htmlFor={`cone-${index}`} className="text-[#3E2F24] cursor-pointer">
                    {cone}
                  </label>
                </div>
              ))}
            </div>
          </Card>

          {/* Clay Types */}
          <Card className="p-6 border-[#3E2F24]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#A67C52]/10 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-[#A67C52]" />
              </div>
              <h3 className="text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                Clay Types
              </h3>
            </div>
            <div className="space-y-3">
              {clayTypes.map((clay, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Checkbox id={`clay-${index}`} />
                  <label htmlFor={`clay-${index}`} className="text-[#3E2F24] cursor-pointer">
                    {clay}
                  </label>
                </div>
              ))}
            </div>
          </Card>

          {/* Glaze Finishes */}
          <Card className="p-6 border-[#3E2F24]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#A67C52]/10 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-[#A67C52]" />
              </div>
              <h3 className="text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                Glaze Finishes
              </h3>
            </div>
            <div className="space-y-3">
              {glazeOptions.map((glaze, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Checkbox id={`glaze-${index}`} />
                  <label htmlFor={`glaze-${index}`} className="text-[#3E2F24] cursor-pointer">
                    {glaze}
                  </label>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Mock Calendar */}
        <div className="mb-12">
          <h2 
            className="text-3xl mb-6 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Availability Calendar
          </h2>

          <Card className="p-6 border-[#3E2F24]/10 bg-white">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="text-center text-[#6B5D52]">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 28 }, (_, i) => (
                <button
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center transition-colors ${
                    i % 4 === 0
                      ? 'bg-[#E5E0DC] text-[#6B5D52] cursor-not-allowed'
                      : 'bg-white border border-[#3E2F24]/10 hover:bg-[#A67C52] hover:text-white cursor-pointer'
                  }`}
                  disabled={i % 4 === 0}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border border-[#3E2F24]/10 rounded" />
                <span className="text-[#6B5D52]">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#E5E0DC] rounded" />
                <span className="text-[#6B5D52]">Booked</span>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleWhatsAppBooking}
            className="bg-[#A67C52] hover:bg-[#8B6644] text-white px-12 py-6 rounded-full text-lg"
          >
            Book Kiln Time on WhatsApp
          </Button>
        </div>

        {/* Firing Policy */}
        <div className="mt-12 p-6 bg-[#E5E0DC] rounded-lg">
          <h3 
            className="text-xl mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Firing Policy
          </h3>
          <div className="space-y-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
            <p className="italic">• Pieces must be bone dry before firing</p>
            <p className="italic">• Firing takes 3-5 days including cooling time</p>
            <p className="italic">• We are not responsible for pieces that crack or warp due to improper construction</p>
            <p className="italic">• Payment required in advance to reserve kiln space</p>
            <p className="italic">• Cancellations accepted up to 48 hours before scheduled firing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
