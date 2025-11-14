import { motion } from 'motion/react';
import { AlertCircle, Thermometer, Clock, MessageCircle } from 'lucide-react';
import kiln1Image from '../../lib/Images/kiln1.jpeg';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Alert, AlertDescription } from './ui/alert';

const kilnData = [
  {
    model: 'GX2327D Kiln',
    innerDimensions: '23" x 27"',
    outerDimensions: '32" x 38"',
    capacity: '7.27 cu ft',
    ratePerFiring: '₹1,500',
  },
  {
    model: 'BX1822D Kiln',
    innerDimensions: '18" x 22"',
    outerDimensions: '27" x 33"',
    capacity: '3.93 cu ft',
    ratePerFiring: '₹1,000',
  },
];

const firingPolicies = [
  'All pottery must be bone dry before firing',
  'Typical turnaround time: 3-5 business days',
  'We are not responsible for warping, cracking, or damage during firing',
  'Glazing services available upon request',
  'Advanced booking required (minimum 48 hours)',
  'Cancellations must be made 24 hours in advance',
];

export default function KilnBookingPage() {
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
              <Thermometer className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              Professional Firing Services
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Fire & Finish</h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Book our professional kilns for your ceramic pieces. We offer various firing
              temperatures and glazing options to bring your creations to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${kiln1Image})` }}
            role="img"
            aria-label="Kiln ready for firing"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F2925]/60 to-transparent" />
        </motion.div>
      </section>

      {/* Kiln Details Table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4 text-center">Kiln Specifications</h2>
            <p className="text-[#6B6560] text-center mb-8">
              Choose the kiln size that best fits your project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-sm overflow-hidden shadow-lg"
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-[#2F2925]">
                  <TableHead className="text-white">Kiln Model</TableHead>
                  <TableHead className="text-white">Inner Dimensions</TableHead>
                  <TableHead className="text-white">Outer Dimensions</TableHead>
                  <TableHead className="text-white">Capacity</TableHead>
                  <TableHead className="text-white">Rate Per Firing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kilnData.map((kiln, index) => (
                  <TableRow key={index} className="hover:bg-[#F5F2EB] transition-colors">
                    <TableCell>{kiln.model}</TableCell>
                    <TableCell>{kiln.innerDimensions}</TableCell>
                    <TableCell>{kiln.outerDimensions}</TableCell>
                    <TableCell>{kiln.capacity}</TableCell>
                    <TableCell className="text-[#A35D38]">{kiln.ratePerFiring}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-[#A35D38] hover:bg-[#8B4D2E] text-white px-12 py-6 uppercase tracking-widest">
                <MessageCircle className="mr-2 w-5 h-5" />
                BOOK KILN TIME ON WHATSAPP
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Firing Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-[#2F2925] mb-8 text-center">Firing Policy</h2>

            <Alert className="bg-[#A35D38]/10 border-[#A35D38] mb-8">
              <AlertCircle className="h-5 w-5 text-[#A35D38]" />
              <AlertDescription className="text-[#2F2925]">
                Please read our firing guidelines carefully before booking
              </AlertDescription>
            </Alert>

            <div className="bg-[#F5F2EB] rounded-sm p-8">
              <ul className="space-y-4">
                {firingPolicies.map((policy, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#A35D38] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#2F2925]">{policy}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-sm text-center"
            >
              <Thermometer className="w-12 h-12 text-[#A35D38] mx-auto mb-4" />
              <h3 className="text-2xl text-[#2F2925] mb-3">Multiple Temperatures</h3>
              <p className="text-[#6B6560]">
                Bisque, glaze, and specialty firing options available
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-sm text-center"
            >
              <Clock className="w-12 h-12 text-[#A35D38] mx-auto mb-4" />
              <h3 className="text-2xl text-[#2F2925] mb-3">Fast Turnaround</h3>
              <p className="text-[#6B6560]">
                Your pieces ready in 3-5 business days
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-sm text-center"
            >
              <MessageCircle className="w-12 h-12 text-[#A35D38] mx-auto mb-4" />
              <h3 className="text-2xl text-[#2F2925] mb-3">Expert Support</h3>
              <p className="text-[#6B6560]">
                Get advice on firing temperatures and techniques
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
