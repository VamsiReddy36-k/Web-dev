
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hello@designlab.com",
      link: "mailto:hello@designlab.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              We'd love to hear about your project and discuss how we can help bring your vision to life. 
              Reach out through any of the channels below or fill out the form.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                    <p className="text-gray-300">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="web-design">Web Design</option>
                  <option value="development">Development</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform hover:scale-105'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">
            © 2024 DesignLab. All rights reserved. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
