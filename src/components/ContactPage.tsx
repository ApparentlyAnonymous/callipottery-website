import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Mail, Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello, I have a question', '_blank');
  };

  const faqs = [
    {
      question: 'Do you offer shipping for ceramics?',
      answer: 'Yes! We ship across India using secure, eco-friendly packaging. Shipping costs are calculated at checkout based on location and item size. Local Bangalore orders can be delivered within 2-3 days.',
    },
    {
      question: 'How do I sign up for a class or workshop?',
      answer: 'You can book classes via WhatsApp or email. Simply let us know which class you\'re interested in, and we\'ll confirm availability and send payment details. Early booking is recommended as spots fill quickly.',
    },
    {
      question: 'What are the kiln firing times and policies?',
      answer: 'Kiln firing takes 3-5 days including cooling time. Pieces must be bone dry before firing. We fire on Tuesdays and Fridays. Payment is required in advance to reserve your spot. Cancellations accepted up to 48 hours before scheduled firing.',
    },
    {
      question: 'Can I become a studio member?',
      answer: 'Absolutely! We offer monthly memberships for open studio access. Members get unlimited studio time, priority kiln booking, dedicated storage space, and discounts on clay and glazes. Contact us for current membership rates.',
    },
    {
      question: 'Do you accept custom orders?',
      answer: 'Yes, we love creating custom pieces! Whether it\'s dinnerware sets, wedding gifts, or unique decorative pieces, we work with you to bring your vision to life. Lead time is typically 4-6 weeks depending on complexity.',
    },
    {
      question: 'What if my piece breaks during firing?',
      answer: 'While rare, kiln losses can happen. We take utmost care in loading and firing, but we cannot guarantee pieces that have structural issues from construction. We\'ll always communicate any concerns before firing and work with you to prevent issues.',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let's Talk While the Clay Rests
          </h1>
          <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
            Have questions or ready to start your pottery journey? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8 border-[#3E2F24]/10">
              <h2 
                className="text-2xl mb-6 text-[#3E2F24]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#3E2F24]">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white border-[#3E2F24]/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-[#3E2F24]">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white border-[#3E2F24]/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-[#3E2F24]">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white border-[#3E2F24]/20 min-h-[150px]"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#A67C52] hover:bg-[#8B6644] text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-[#3E2F24]/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#A67C52] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    WhatsApp
                  </h3>
                  <p className="text-[#6B5D52] mb-3">
                    For quick responses and bookings
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white"
                  >
                    Contact via WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#3E2F24]/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8DA9A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:hello@callipottery.in"
                    className="text-[#A67C52] hover:underline text-lg"
                  >
                    hello@callipottery.in
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#3E2F24]/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8DA9A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Phone
                  </h3>
                  <a 
                    href="tel:+919876543210"
                    className="text-[#A67C52] hover:underline text-lg"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-[#6B5D52] mt-1">Mon-Sat, 10 AM - 6 PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#3E2F24]/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8DA9A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Visit Us
                  </h3>
                  <p className="text-[#3E2F24]">
                    42 Pottery Lane<br />
                    Indiranagar, Bangalore<br />
                    Karnataka 560038
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 border-[#3E2F24]/10 bg-[#F7F3EF]">
              <h3 className="mb-4 text-[#3E2F24]" style={{ fontFamily: 'var(--font-serif)' }}>
                Follow Our Journey
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-[#A67C52] hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-[#A67C52] hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                  <span>Pinterest</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 
            className="text-3xl mb-8 text-center text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Frequently Asked Questions
          </h2>

          <Card className="border-[#3E2F24]/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 text-left text-[#3E2F24] hover:text-[#A67C52]">
                    <span style={{ fontFamily: 'var(--font-serif)' }}>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-[#3E2F24]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
}
