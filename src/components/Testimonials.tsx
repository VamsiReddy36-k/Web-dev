
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c66f?w=150&h=150&fit=crop&crop=face",
      content: "Working with this team was an absolute game-changer for our business. Their attention to detail and innovative approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovaCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The level of professionalism and expertise demonstrated throughout our project was remarkable. They delivered exactly what we envisioned.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "From concept to launch, every step was handled with precision. Our new website has significantly improved our conversion rates.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <Quote className="text-purple-400 w-12 h-12 mb-6" />
            
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-6 h-6 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-400"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
