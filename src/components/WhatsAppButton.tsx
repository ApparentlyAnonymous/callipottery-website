import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello, I have a question about Callipottery Studio', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#A67C52] to-[#8B6644] text-white p-4 rounded-full shadow-lg group"
      aria-label="Contact via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          repeatDelay: 2,
          duration: 0.5 
        }}
      >
        <MessageCircle size={24} />
      </motion.div>
      <motion.span 
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#3E2F24] text-white px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none shadow-md"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        Ask a Question
      </motion.span>
      
      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#A67C52]"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut'
        }}
      />
    </motion.button>
  );
}
