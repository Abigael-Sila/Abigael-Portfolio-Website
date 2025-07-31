import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import VisitorsCounter from './components/VisitorsCounter';
import AllProjectsPage from './pages/AllProjectsPage'; // Your new AllProjectsPage

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Loading Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Scroll to Top button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // If loading, show the loading animation
  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/Abigael-Portfolio-Website' : ''}> {/* REMOVED trailing slash here */}
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Header (will be visible on all routes) */}
        <Header />

        {/* Main content area, managed by React Router */}
        <Routes>
          {/* Route for the Home page (displays all existing sections) */}
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Blog />
              <Contact />
              {/* Visitors Counter - typically on the main landing page */}
              <VisitorsCounter />
            </main>
          } />

          {/* Route for the All Projects page */}
          <Route path="/all-projects" element={<AllProjectsPage />} />

          {/* Add any other routes for future pages here if needed */}
        </Routes>

        {/* Footer (will be visible on all routes) */}
        <Footer />

        {/* Scroll to Top Button (will be visible on all routes) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;