import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Clock, Calendar, Users, ChevronLeft, ChevronRight, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import potteryLineImage from '../../lib/Images/WhatsApp Image 2025-10-23 at 16.14.21 copy 2.jpeg';
import calligraphyImage from '../../lib/Images/WhatsApp Image 2025-10-23 at 16.09.08 copy.jpeg';
import handsOnWheelImage from '../../lib/Images/WhatsApp Image 2025-10-23 at 16.14.21 copy.jpeg';
import coupleHandsImage from '../../lib/Images/WhatsApp Image 2025-10-27 at 20.21.11.jpeg';
import groupWheelImage from '../../lib/Images/WhatsApp Image 2025-10-27 at 20.21.12 (1).jpeg';
import soloWheelImage from '../../lib/Images/WhatsApp Image 2025-10-27 at 20.21.15.jpeg';
import proudPiecesImage from '../../lib/Images/WhatsApp Image 2025-10-27 at 20.21.13.jpeg';
import plaqueHandsImage from '../../lib/Images/WhatsApp Image 2025-10-27 at 20.21.12.jpeg';
import focusedWheelImage from '../../lib/Images/WhatsApp Image 2025-10-27 at 20.21.14 (1).jpeg';

const courses = [
  {
    title: 'Beginner (Wheel Throwing)',
    description:
      'Discover the art of shaping clay on the potter\'s wheel. Learn every step — from Wedging & Centering to Pulling & Trimming — and create functional, food-safe pottery pieces.',
    schedule: 'Saturday & Sunday | 11 AM – 2 PM / 3 PM – 6 PM',
    duration: '12 sessions × 3 hrs',
    price: '₹11,600',
    highlights: [
      'Learn fundamentals of pottery',
      'Guided by expert artists',
      'Create & take home 5 finished pieces',
      'Materials and firings included',
    ],
    image: handsOnWheelImage,
  },
  {
    title: 'Hand Building (Beginner Level 1)',
    description:
      'Master the art of hand building using slabs, coils, and attachments. Create unique pieces without a wheel, focusing on form, texture, and creative expression.',
    schedule: 'Saturday & Sunday | 11 AM – 2 PM / 3 PM – 6 PM',
    duration: '12 sessions × 3 hrs',
    price: '₹11,600',
    highlights: [
      'Master slab, coil, and pinch techniques',
      'Build sculptural and functional pieces',
      'Expert guidance throughout',
      'All materials and firing included',
    ],
    image: calligraphyImage,
  },
  {
    title: 'Glaze Application (Level 1)',
    description:
      'Glazing transforms your pottery into a finished work of art. Learn color theory, application techniques, and understand how different glazes interact with clay and fire.',
    schedule: 'Saturday & Sunday | 11 AM – 2 PM / 3 PM – 6 PM',
    duration: '8 sessions × 3 hrs',
    price: '₹8,400',
    highlights: [
      'Learn professional glazing techniques',
      'Understand glaze chemistry basics',
      'Experiment with colors and textures',
      'Glaze materials and firing included',
    ],
    image: potteryLineImage,
  },
];

const workshopMomentImages = [
  soloWheelImage,
  groupWheelImage,
  coupleHandsImage,
  plaqueHandsImage,
  proudPiecesImage,
  focusedWheelImage,
];

const whatsIncluded = [
  {
    icon: Users,
    title: 'Expert Instruction',
    description: 'Learn from experienced ceramic artists',
  },
  {
    icon: CheckCircle,
    title: 'Materials Included',
    description: 'All clay, tools, and supplies provided',
  },
  {
    icon: Clock,
    title: 'Firing Included',
    description: 'Professional kiln firing for all pieces',
  },
  {
    icon: Calendar,
    title: 'Take Home',
    description: 'Keep your finished pottery creations',
  },
];

const timeSlots = [
  { id: '11am', label: '11 AM – 2 PM', available: true },
  { id: '3pm', label: '3 PM – 6 PM', available: true },
];

export default function ClassesPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set(['6-11am', '14-3pm', '27-11am']));
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Get weekends (Saturdays and Sundays) for the current month
  const getWeekendDays = (month: number, year: number) => {
    const daysInMonth = getDaysInMonth(month, year);
    const weekends = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(year, month, day).getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
        weekends.push(day);
      }
    }
    return weekends;
  };
  
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const weekendDays = getWeekendDays(currentMonth, currentYear);
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  const isDayAvailable = (day: number) => {
    return weekendDays.includes(day);
  };
  
  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  const handleDayClick = (day: number) => {
    if (isDayAvailable(day)) {
      setSelectedDate(day);
      setBookingModalOpen(true);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot && selectedCourse) {
      const slotKey = `${selectedDate}-${selectedTimeSlot}`;
      if (bookedSlots.has(slotKey)) {
        toast.error('This slot is already booked. Please select another time.');
      } else {
        // Open WhatsApp with pre-filled message
        const message = `Hi! I'd like to book a class:\nDate: ${monthNames[currentMonth]} ${selectedDate}, ${currentYear}\nTime: ${timeSlots.find(t => t.id === selectedTimeSlot)?.label}\nCourse: ${selectedCourse}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
        
        // Mark slot as booked
        setBookedSlots(new Set([...bookedSlots, slotKey]));
        toast.success('Booking request sent via WhatsApp!');
        setBookingModalOpen(false);
        setSelectedDate(null);
        setSelectedTimeSlot(null);
        setSelectedCourse('');
      }
    } else {
      toast.error('Please select course and time slot');
    }
  };

  const isSlotBooked = (day: number, timeSlotId: string) => {
    return bookedSlots.has(`${day}-${timeSlotId}`);
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
            <p className="text-[#A35D38] tracking-widest mb-2 uppercase text-sm">
              LEARN THE CRAFT
            </p>
            <h1 className="text-5xl md:text-6xl text-[#2F2925] mb-4">Our Courses</h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
              Join us to discover the therapeutic art of pottery and create beautiful, functional pieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Calendar Section */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Class Availability</h2>
            <p className="text-[#6B6560]">
              Classes run on weekends. Click on an available date to book your session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-6 md:p-8"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevMonth}
                className="p-2 hover:bg-[#F5F2EB] rounded-full transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-6 h-6 text-[#2F2925]" />
              </button>
              <h3 className="text-2xl text-[#2F2925]">
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-[#F5F2EB] rounded-full transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="w-6 h-6 text-[#2F2925]" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm text-[#6B6560] py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {blanks.map((blank) => (
                <div key={`blank-${blank}`} className="aspect-square" />
              ))}
              {days.map((day) => {
                const available = isDayAvailable(day);
                const today = isToday(day);
                
                return (
                  <motion.button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    whileHover={available ? { scale: 1.05 } : {}}
                    whileTap={available ? { scale: 0.95 } : {}}
                    disabled={!available}
                    className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${
                      today ? 'ring-2 ring-[#A35D38]' : ''
                    } ${
                      available
                        ? 'bg-[#A35D38] text-white hover:bg-[#8B4D2E] cursor-pointer'
                        : 'bg-[#F5F2EB] text-[#6B6560]/50 cursor-not-allowed'
                    }`}
                  >
                    {day}
                  </motion.button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-[#F5F2EB]">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#A35D38] rounded" />
                  <span className="text-[#6B6560]">Weekend (Available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#F5F2EB] rounded" />
                  <span className="text-[#6B6560]">Weekday (Unavailable)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#A35D38] rounded" />
                  <span className="text-[#6B6560]">Today</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModalOpen && selectedDate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setBookingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl text-[#2F2925]">Book Your Class</h3>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="text-[#6B6560] hover:text-[#A35D38] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Selected Date */}
                <div className="bg-[#F5F2EB] rounded-lg p-4">
                  <p className="text-sm text-[#6B6560] mb-1">SELECTED DATE</p>
                  <p className="text-lg text-[#2F2925]">
                    {monthNames[currentMonth]} {selectedDate}, {currentYear}
                  </p>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm text-[#6B6560] mb-2 uppercase tracking-wide">
                    Select Course
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-3 border border-[#E8E3D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A35D38] bg-white"
                  >
                    <option value="">Choose a course...</option>
                    {courses.map((course, idx) => (
                      <option key={idx} value={course.title}>
                        {course.title} - {course.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-sm text-[#6B6560] mb-2 uppercase tracking-wide">
                    Select Time Slot
                  </label>
                  <div className="space-y-2">
                    {timeSlots.map((slot) => {
                      const isBooked = isSlotBooked(selectedDate, slot.id);
                      return (
                        <button
                          key={slot.id}
                          onClick={() => !isBooked && setSelectedTimeSlot(slot.id)}
                          disabled={isBooked}
                          className={`w-full p-3 rounded-lg border-2 transition-all ${
                            isBooked
                              ? 'bg-[#E8E3D9] border-[#E8E3D9] text-[#6B6560]/50 cursor-not-allowed'
                              : selectedTimeSlot === slot.id
                              ? 'bg-[#A35D38] border-[#A35D38] text-white'
                              : 'bg-white border-[#E8E3D9] text-[#2F2925] hover:border-[#A35D38]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{slot.label}</span>
                            {isBooked && <span className="text-xs">(Booked)</span>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Booking Button */}
                <Button
                  onClick={handleBooking}
                  disabled={!selectedCourse || !selectedTimeSlot}
                  className="w-full py-6 bg-[#A35D38] hover:bg-[#8B4D2E] text-white uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  BOOK VIA WHATSAPP
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-sm overflow-hidden shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl text-[#2F2925] mb-4">{course.title}</h3>
                    <p className="text-[#6B6560] mb-6">{course.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-[#2F2925]">
                        <Calendar className="w-5 h-5 text-[#A35D38]" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#2F2925]">
                        <Clock className="w-5 h-5 text-[#A35D38]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="text-3xl text-[#A35D38]">{course.price}</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#A35D38] mt-0.5 flex-shrink-0" />
                          <span className="text-[#6B6560]">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={() => {
                        setSelectedCourse(course.title);
                        setBookingModalOpen(true);
                      }}
                      className="w-full py-6 bg-[#A35D38] hover:bg-[#8B4D2E] text-white uppercase tracking-widest"
                    >
                      BOOK THIS COURSE
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">What's Included</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatsIncluded.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#A35D38]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#A35D38]" />
                  </div>
                  <h3 className="text-xl text-[#2F2925] mb-2">{item.title}</h3>
                  <p className="text-[#6B6560]">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#2F2925] mb-4">Workshop Moments</h2>
            <p className="text-[#6B6560]">See what happens in our classes</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopMomentImages.map((image, index) => (
              <motion.div
                key={`workshop-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-sm overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Workshop moment ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
