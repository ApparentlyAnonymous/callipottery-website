import { motion } from 'motion/react';
import { FileText, Package, RotateCcw, Flame, Shield } from 'lucide-react';

const sections = [
  {
    icon: Package,
    title: 'Shipping Policy',
    content: [
      'We ship within India via reputable courier services',
      'Processing time: 2-3 business days',
      'Delivery time: 5-7 business days (metro cities), 7-10 business days (other locations)',
      'Shipping costs calculated at checkout based on weight and destination',
      'All items are carefully packaged with bubble wrap and cushioning',
      'Tracking information provided via email once shipped',
      'For custom orders, shipping timeline may vary - we\'ll keep you informed',
    ],
  },
  {
    icon: RotateCcw,
    title: 'Returns & Exchanges',
    content: [
      'We want you to love your purchase! If you\'re not satisfied, we accept returns within 7 days of delivery',
      'Items must be unused, in original packaging, and in resalable condition',
      'Custom or personalized items cannot be returned unless defective',
      'To initiate a return, contact us via email or WhatsApp with order details and photos',
      'Refunds processed within 7-10 business days after receiving the returned item',
      'Return shipping costs are borne by the customer unless the item is damaged or incorrect',
      'Exchanges available for size or color variations, subject to availability',
      'Damaged or defective items: Contact us immediately with photos - we\'ll arrange replacement or full refund',
    ],
  },
  {
    icon: Flame,
    title: 'Kiln Use Terms',
    content: [
      'Advance booking required (minimum 48 hours notice)',
      'All pottery must be bone dry before submission for firing',
      'Label all pieces clearly with your name, date, and desired firing temperature',
      'We are not responsible for warping, cracking, glaze defects, or other damage during firing',
      'Standard turnaround time: 3-5 business days',
      'Payment due at time of booking',
      'Cancellations must be made 24 hours in advance for refund eligibility',
      'Pieces must be picked up within 10 days of completion notification',
      'Unclaimed pieces after 30 days may be donated or discarded',
      'The studio reserves the right to refuse firing of pieces that may damage the kiln or other work',
    ],
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    content: [
      'We collect personal information (name, email, phone, address) only for order processing and communication',
      'Payment information is processed securely through encrypted third-party payment gateways',
      'We do not share, sell, or rent your personal information to third parties',
      'Your data may be used to send promotional emails (you can unsubscribe anytime)',
      'We use cookies to enhance your browsing experience',
      'You have the right to request deletion of your personal data',
      'Contact us at info@callipottery.com for data-related inquiries',
      'By using our website, you consent to this privacy policy',
    ],
  },
  {
    icon: FileText,
    title: 'Terms of Service',
    content: [
      'All content on this website is the property of Callipottery Studio',
      'Prices are subject to change without notice',
      'We reserve the right to refuse service to anyone for any reason',
      'Workshop and class policies: Full payment required at registration. Cancellations made 7 days before the start date receive 50% refund. No refunds for cancellations within 7 days or no-shows',
      'Open studio passes are non-transferable and non-refundable',
      'Studio guidelines must be followed at all times. Violation may result in removal without refund',
      'The studio is not responsible for personal belongings or injury on premises',
      'Photography and videography may occur in the studio - by entering, you consent to appear in promotional materials',
      'These terms may be updated periodically - check this page for the latest version',
    ],
  },
];

export default function PoliciesPage() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              Terms & Conditions
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Policies</h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Everything you need to know about working with Callipottery Studio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-sm p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#A35D38] rounded-full flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl text-[#2F2925]">{section.title}</h2>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#A35D38] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#6B6560] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl text-[#2F2925] mb-4">Questions About Our Policies?</h3>
            <p className="text-[#6B6560] mb-8">
              We're here to help! Contact us if you need clarification on any of our terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@callipottery.com"
                className="px-8 py-3 bg-[#A35D38] hover:bg-[#8B4D2E] text-white rounded transition-colors duration-300"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white border-2 border-[#A35D38] text-[#A35D38] hover:bg-[#A35D38] hover:text-white rounded transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#6B6560]">Last updated: November 9, 2025</p>
        </div>
      </section>
    </div>
  );
}
