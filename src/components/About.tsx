
import { CheckCircle, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    "5+ Years of Experience",
    "200+ Projects Completed",
    "50+ Happy Clients",
    "Award-Winning Designs"
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're passionate about creating digital experiences that not only look stunning but also 
              drive real business results. Our team combines creativity with technical expertise to 
              deliver solutions that exceed expectations.
            </p>
            
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
              <p className="text-gray-300">Expert developers and designers</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Quality</h3>
              <p className="text-gray-300">Award-winning solutions</p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 col-span-2">
              <Lightbulb className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">Cutting-edge technology and creative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
