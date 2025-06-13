import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Printer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Machines', path: '/machines' },
    { name: 'Spare Parts', path: '/spare-parts' },
    { name: 'Rental & Sales', path: '/rental-sales' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Canon Photocopiers',
    'Kyocera Machines',
    'Rental Services',
    'Maintenance & Repair',
    'Genuine Spare Parts',
    'Technical Support'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.svg" alt="Copiers Solutions Logo" className="h-10 w-auto" />
              <div>
                <h3 className="text-2xl font-bold">Copiers Solutions</h3>
                <p className="text-gray-400 text-sm">Canon & Kyocera Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for photocopier solutions in Nashik since 2003. 
              We specialize in Canon and Kyocera products with comprehensive support.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300">Shop number 16, Gurukripa appartment, Near panasonic showroom, Canada corner nashik 422002</p>
                </div>
              </div>
              
              <a 
                href="tel:9822006345" 
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>9822006345</span>
              </a>
              
              <a 
                href="mailto:copiersnasik@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>copiersnasik@gmail.com</span>
              </a>
              
              <div className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300">Monday-Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed (open only if informed prior by customers)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300">Get the latest updates on new products and offers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9822006345"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-center"
              >
                <Phone className="inline-block w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:copiersnasik@gmail.com?subject=Newsletter Subscription"
                className="bg-transparent border-2 border-blue-600 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold text-center"
              >
                <Mail className="inline-block w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Copiers Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Authorized Canon & Kyocera Dealer</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Serving Nashik Since 2003</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 