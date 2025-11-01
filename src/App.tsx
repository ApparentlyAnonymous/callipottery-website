import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    <div className="min-h-screen bg-[#F7F3EF]">
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
  );
}
