
import { useEffect, useState, useRef } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = { projects: 200, clients: 50, years: 5, satisfaction: 99 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounts({
          projects: Math.round(finalCounts.projects * progress),
          clients: Math.round(finalCounts.clients * progress),
          years: Math.round(finalCounts.years * progress),
          satisfaction: Math.round(finalCounts.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { label: "Projects Completed", value: counts.projects, suffix: "+" },
    { label: "Happy Clients", value: counts.clients, suffix: "+" },
    { label: "Years Experience", value: counts.years, suffix: "+" },
    { label: "Client Satisfaction", value: counts.satisfaction, suffix: "%" }
  ];

  return (
    <section ref={sectionRef} id="stats" className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
