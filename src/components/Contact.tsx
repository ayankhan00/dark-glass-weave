
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1">Email</h4>
                  <a 
                    href="mailto:alex.chen@example.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    alex.chen@example.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1">Phone</h4>
                  <a 
                    href="tel:+92XXXXXXXXXX"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    +92 XXX XXX XXXX
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1">Location</h4>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">Connect with me</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/alexchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a
                  href="https://linkedin.com/in/alexchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-sm bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
              </div>
              
              <p className="mt-6 text-sm text-gray-400">
                Always interested in new opportunities and collaborations. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
