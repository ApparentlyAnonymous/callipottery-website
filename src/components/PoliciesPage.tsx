import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function PoliciesPage() {
  return (
    <div className="min-h-screen py-12 px-4 border-t-4 border-[#A67C52]">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 border-b-4 border-[#A67C52] pb-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Policies
          </h1>
          <p className="text-lg text-[#6B5D52]">
            Our guidelines to ensure a smooth and positive experience for everyone.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="shipping" className="w-full border-b-4 border-[#A67C52] pb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
            <TabsTrigger value="kiln">Kiln Use</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          {/* Shipping Policy */}
          <TabsContent value="shipping">
            <Card className="p-8 border-4 border-[#A67C52] bg-[#F7F3EF]">
              <h2 
                className="text-2xl mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Shipping Policy
              </h2>
              
              <div className="space-y-6 text-[#3E2F24]">
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Domestic Shipping (India)
                  </h3>
                  <p className="leading-relaxed">
                    We ship ceramics across India using secure, eco-friendly packaging. Each piece is 
                    carefully wrapped and cushioned to prevent damage during transit.
                  </p>
                  <ul className="mt-3 space-y-1 ml-4">
                    <li>• Bangalore: 2-3 business days</li>
                    <li>• Major cities: 4-6 business days</li>
                    <li>• Other locations: 7-10 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Shipping Costs
                  </h3>
                  <p className="leading-relaxed">
                    Shipping costs are calculated based on weight, dimensions, and destination. You'll 
                    see the exact cost during checkout.
                  </p>
                  <ul className="mt-3 space-y-1 ml-4">
                    <li>• Free shipping on orders above ₹5,000 within Karnataka</li>
                    <li>• Flat rate of ₹200 for orders within Bangalore</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Order Processing
                  </h3>
                  <p className="leading-relaxed">
                    Orders are processed within 2-3 business days. You'll receive tracking information 
                    once your order ships. Custom orders require 4-6 weeks production time.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Damaged in Transit
                  </h3>
                  <p className="leading-relaxed">
                    While we take extreme care in packaging, if your item arrives damaged, please contact 
                    us within 48 hours with photos. We'll arrange a replacement or refund.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Returns & Exchanges */}
          <TabsContent value="returns">
            <Card className="p-8 border-4 border-[#A67C52] bg-[#F7F3EF]">
              <h2 
                className="text-2xl mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Returns & Exchanges
              </h2>
              
              <div className="space-y-6 text-[#3E2F24]">
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Return Window
                  </h3>
                  <p className="leading-relaxed">
                    We accept returns within 7 days of delivery for unused, undamaged items in original 
                    packaging. Given the handmade nature of our ceramics, slight variations in color and 
                    size are not grounds for return.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Non-Returnable Items
                  </h3>
                  <ul className="space-y-1 ml-4">
                    <li>• Custom or personalized ceramics</li>
                    <li>• Items marked as final sale</li>
                    <li>• Used or damaged items</li>
                    <li>• Class or workshop fees (see cancellation policy)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Exchange Process
                  </h3>
                  <p className="leading-relaxed">
                    We're happy to exchange items of equal or greater value. Contact us via WhatsApp or 
                    email to initiate an exchange. Return shipping costs are the customer's responsibility 
                    unless the item was defective.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Refunds
                  </h3>
                  <p className="leading-relaxed">
                    Refunds are processed within 5-7 business days after we receive the returned item. 
                    Original shipping costs are non-refundable. Refunds are issued to the original payment method.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Class Cancellations
                  </h3>
                  <p className="leading-relaxed">
                    Workshop and class fees can be refunded if cancelled at least 48 hours before the 
                    scheduled time. Cancellations within 48 hours will receive studio credit valid for 
                    6 months.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Kiln Use Terms */}
          <TabsContent value="kiln">
            <Card className="p-8 border-4 border-[#A67C52] bg-[#F7F3EF]">
              <h2 
                className="text-2xl mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Kiln Use Terms & Conditions
              </h2>
              
              <div className="space-y-6 text-[#3E2F24]">
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Booking Requirements
                  </h3>
                  <ul className="space-y-1 ml-4">
                    <li>• All pieces must be bone dry before kiln loading</li>
                    <li>• Payment required in advance to reserve kiln space</li>
                    <li>• Cancellations accepted up to 48 hours before scheduled firing</li>
                    <li>• Late cancellations forfeit 50% of booking fee</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Piece Requirements
                  </h3>
                  <p className="leading-relaxed">
                    All pieces must be clearly labeled with your name and firing cone number. We reserve 
                    the right to refuse firing pieces that appear structurally unsound or may pose a 
                    risk to the kiln or other work.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Kiln Loss Policy
                  </h3>
                  <p className="leading-relaxed">
                    While we take utmost care in loading and firing, Callipottery Studio is not 
                    responsible for pieces that crack, warp, or are otherwise damaged during firing 
                    due to:
                  </p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Improper construction or drying</li>
                    <li>• Air pockets or structural weaknesses</li>
                    <li>• Incompatible clay and glaze combinations</li>
                    <li>• Uneven thickness or poor attachment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Firing Timeline
                  </h3>
                  <p className="leading-relaxed">
                    Bisque and glaze firings take 3-5 days including cooling time. We fire on Tuesdays 
                    and Fridays when kilns are full. Rush firings available for additional fee.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Pick-up Policy
                  </h3>
                  <p className="leading-relaxed">
                    Fired pieces must be picked up within 2 weeks of completion. After 30 days, unclaimed 
                    pieces become property of the studio. We are not responsible for storing pieces 
                    long-term.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Policy */}
          <TabsContent value="privacy">
            <Card className="p-8 border-4 border-[#A67C52] bg-[#F7F3EF]">
              <h2 
                className="text-2xl mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Privacy Policy
              </h2>
              
              <div className="space-y-6 text-[#3E2F24]">
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Information We Collect
                  </h3>
                  <p className="leading-relaxed">
                    We collect information you provide when placing orders, booking classes, or contacting 
                    us. This includes name, email, phone number, and shipping address.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    How We Use Your Information
                  </h3>
                  <ul className="space-y-1 ml-4">
                    <li>• Process orders and bookings</li>
                    <li>• Send order confirmations and shipping updates</li>
                    <li>• Communicate about classes and studio events</li>
                    <li>• Send occasional newsletters (you can opt out anytime)</li>
                    <li>• Improve our products and services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Data Security
                  </h3>
                  <p className="leading-relaxed">
                    We use secure methods to protect your personal information. Payment information is 
                    processed through secure payment gateways and is never stored on our servers.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Sharing Your Information
                  </h3>
                  <p className="leading-relaxed">
                    We never sell your personal information to third parties. We only share information 
                    with shipping carriers (for delivery) and payment processors (for transactions).
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Cookies
                  </h3>
                  <p className="leading-relaxed">
                    Our website uses cookies to improve your browsing experience and remember your 
                    preferences. You can disable cookies in your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Photography & Social Media
                  </h3>
                  <p className="leading-relaxed">
                    We occasionally photograph classes and studio sessions for social media and marketing. 
                    If you prefer not to be photographed, please let us know.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Your Rights
                  </h3>
                  <p className="leading-relaxed">
                    You have the right to access, update, or delete your personal information. Contact 
                    us at hello@callipottery.in for data requests.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3E2F24]/10">
                  <p className="text-sm text-[#6B5D52] italic">
                    Last updated: October 26, 2025
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
