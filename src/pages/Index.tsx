
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Statistics />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
