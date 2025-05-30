
import { Code, Palette, Smartphone, Zap, Shield, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Semantic HTML, modern CSS, and optimized JavaScript for peak performance."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Beautiful, contemporary designs that capture attention and engage users."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive",
      description: "Pixel-perfect layouts that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Loading",
      description: "Optimized for speed with lightning-fast load times and smooth interactions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure",
      description: "Built with security best practices and modern web standards in mind."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO Ready",
      description: "Search engine optimized structure for maximum visibility and reach."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with creative design to deliver exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-purple-400 mb-6 group-hover:text-blue-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
