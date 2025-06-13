import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // for mobile
  const [productsDropdown, setProductsDropdown] = useState(false); // for desktop
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', dropdown: [
      { name: 'Machines', path: '/machines' },
      { name: 'Spare Parts', path: '/spare-parts' },
    ]},
    { name: 'Rental & Sales', path: '/rental-sales' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:9988776655" 
                className="flex items-center hover:text-blue-200 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Call: 9988776655</span>
                <span className="sm:hidden">9988776655</span>
              </a>
              <a 
                href="mailto:keshav@gmail.com" 
                className="flex items-center hover:text-blue-200 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Email: keshav@gmail.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
            </div>
            <div className="hidden md:block text-blue-100">
              Mon-Sat: 9AM-7PM | Sun: 10AM-5PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/logo.svg" alt="Copiers Solutions Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Copiers Solutions
              </h1>
              <p className="text-sm text-gray-600 hidden sm:block">Canon & Kyocera Specialists</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductsDropdown(true)}
                  onMouseLeave={() => setProductsDropdown(false)}
                  onFocus={() => setProductsDropdown(true)}
                  onBlur={() => setProductsDropdown(false)}
                  tabIndex={0}
                >
                  <button
                    className={`relative px-3 py-2 text-lg font-medium flex items-center transition-colors duration-300 focus:outline-none ${
                      productsDropdown ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {productsDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${isActive(sub.path) ? 'font-semibold text-blue-600' : ''}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-lg font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:9988776655"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
            >
              <Phone className="inline-block w-4 h-4 mr-2" />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
                      onClick={() => setProductsOpen((open) => !open)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`ml-2 w-4 h-4 transform transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {productsOpen && (
                      <div className="pl-6">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${isActive(sub.path) ? 'font-semibold text-blue-600' : ''}`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:9988776655"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  <Phone className="inline-block w-4 h-4 mr-2" />
                  Call for Quote
                </a>
                <a
                  href="mailto:keshav@gmail.com"
                  className="block w-full mt-2 bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-semibold"
                >
                  <Mail className="inline-block w-4 h-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 