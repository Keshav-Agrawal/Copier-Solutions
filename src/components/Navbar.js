import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // for mobile
  const [productsDropdown, setProductsDropdown] = useState(false); // for desktop
  const productsRef = useRef();

  useEffect(() => {
    if (!productsDropdown) return;
    function handleClickOutside(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [productsDropdown]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', dropdown: [
      { name: 'Machines', path: '/machines' },
      { name: 'Spare Parts', path: '/spare-parts' },
    ]},
    { name: 'Rental & Sales', path: '/rental-sales' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Copier Solutions Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Copiers Solutions</h1>
              <p className="text-xs text-gray-600">Canon • Kyocera • More</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={productsRef}
                  tabIndex={0}
                >
                  <button
                    className={`navbar-link flex items-center focus:outline-none ${productsDropdown ? 'text-blue-600' : ''}`}
                    onClick={() => setProductsDropdown(!productsDropdown)}
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
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          onClick={() => setProductsDropdown(false)}
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
                  className="navbar-link"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
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
                            className="block px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
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
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 