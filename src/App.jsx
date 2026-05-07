import { useState, useEffect, lazy, Suspense } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Equipment from './components/Equipment';

// Lazy loaded components (below the fold)
const DietPlans = lazy(() => import('./components/DietPlans'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const Competitions = lazy(() => import('./components/Competitions'));
const Achievements = lazy(() => import('./components/Achievements'));
const Trainers = lazy(() => import('./components/Trainers'));
const Booking = lazy(() => import('./components/Booking'));
const Branches = lazy(() => import('./components/Branches'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar scrollProgress={scrollProgress} />
          <main>
            <Hero />
            <Equipment />
            <Suspense fallback={null}>
              <DietPlans />
              <Gallery />
              <Testimonials />
              <Pricing />
              <Competitions />
              <Achievements />
              <Trainers />
              <Booking />
              <Branches />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}
