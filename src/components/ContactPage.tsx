import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

const faqs = [
  {
    question: 'Do you ship internationally?',
    answer:
      'Currently, we ship within India only. For international orders, please contact us directly.',
  },
  {
    question: 'How do I register for a class?',
    answer:
      "You can register via WhatsApp or by filling out the contact form. We'll respond within 24 hours with available dates.",
  },
  {
    question: 'What is your firing turnaround time?',
    answer:
      'Standard firing takes 3-5 business days. Rush services may be available upon request.',
  },
  {
    question: 'Can I visit the studio without an appointment?',
    answer:
      'Walk-ins are welcome during opening hours! However, for classes or kiln booking, please schedule in advance.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 bg-[#F5F2EB]">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-[#A35D38] rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Contact Us</h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Have a question? Want to commission a piece? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h2 className="text-3xl text-[#2F2925] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#A35D38] hover:bg-[#8B4D2E] text-white py-6 uppercase tracking-widest"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl text-[#2F2925] mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#F5F2EB] rounded hover:bg-[#E8E3D9] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#A35D38] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B6560]">WhatsApp</div>
                      <div className="text-[#2F2925]">Message us directly</div>
                    </div>
                  </a>

                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-center gap-4 p-4 bg-[#F5F2EB] rounded hover:bg-[#E8E3D9] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#A35D38] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B6560]">Phone</div>
                      <div className="text-[#2F2925]">+91 (XXX) XXX-XXXX</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@callipottery.com"
                    className="flex items-center gap-4 p-4 bg-[#F5F2EB] rounded hover:bg-[#E8E3D9] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#A35D38] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B6560]">Email</div>
                      <div className="text-[#2F2925]">info@callipottery.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Studio Location */}
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl text-[#2F2925] mb-4">Studio Location</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#A35D38] flex-shrink-0 mt-1" />
                  <div className="text-[#6B6560]">
                    <p>Callipottery Studio</p>
                    <p>[Street Address]</p>
                    <p>[City, State, ZIP]</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#2F2925] p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl text-white mb-4">Follow Our Journey</h3>
                <p className="text-[#E8E3D9] mb-6">
                  Stay updated with our latest creations, workshops, and studio happenings.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#A35D38] rounded-full flex items-center justify-center hover:bg-white hover:text-[#A35D38] transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#A35D38] rounded-full flex items-center justify-center hover:bg-white hover:text-[#A35D38] transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-[#2F2925] mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F5F2EB] p-6 rounded-sm"
                >
                  <h3 className="text-xl text-[#2F2925] mb-2">{faq.question}</h3>
                  <p className="text-[#6B6560]">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
