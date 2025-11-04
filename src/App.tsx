import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { ClassesPage } from './components/ClassesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { PotteryPassPage } from './components/PotteryPassPage';
import { KilnBookingPage } from './components/KilnBookingPage';
import { OpenStudioPage } from './components/OpenStudioPage';
import { AboutPage } from './components/AboutPage';
import { VisitPage } from './components/VisitPage';
import { ContactPage } from './components/ContactPage';
import { PoliciesPage } from './components/PoliciesPage';

type PageType = 'home' | 'shop' | 'classes' | 'projects' | 'pass' | 'kiln' | 'studio' | 'about' | 'visit' | 'contact' | 'policies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { scrollY } = useScroll();
  
  // Transform scroll position to background lightness
  const backgroundColor = useTransform(
    scrollY,
    [0, 1000, 2000],
    ['#F7F3EF', '#FAF7F4', '#FDFCFB']
  );
  
  const textureOpacity = useTransform(
    scrollY,
    [0, 1000, 2000],
    [0.4, 0.25, 0.15]
  );

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'shop':
        return <ShopPage />;
      case 'classes':
        return <ClassesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'pass':
        return <PotteryPassPage />;
      case 'kiln':
        return <KilnBookingPage />;
      case 'studio':
        return <OpenStudioPage />;
      case 'about':
        return <AboutPage />;
      case 'visit':
        return <VisitPage />;
      case 'contact':
        return <ContactPage />;
      case 'policies':
        return <PoliciesPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    enter: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen relative"
      style={{ backgroundColor }}
    >
      {/* Scroll-reactive paper texture overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          opacity: textureOpacity,
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")
          `,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />
      
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer onNavigate={handleNavigate} />
        <WhatsAppButton />
      </div>
    </motion.div>
  );
}
