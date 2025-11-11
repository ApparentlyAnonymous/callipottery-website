import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import ClassesPage from './components/ClassesPage';
import KilnBookingPage from './components/KilnBookingPage';
import OpenStudioPage from './components/OpenStudioPage';
import AboutPage from './components/AboutPage';
import VisitPage from './components/VisitPage';
import ContactPage from './components/ContactPage';
import PoliciesPage from './components/PoliciesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'shop':
        return <ShopPage />;
      case 'classes':
        return <ClassesPage />;
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
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F5F2EB]">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>{renderPage()}</main>
        <Footer onNavigate={setCurrentPage} />
        <Toaster position="top-right" />
      </div>
    </CartProvider>
  );
}
