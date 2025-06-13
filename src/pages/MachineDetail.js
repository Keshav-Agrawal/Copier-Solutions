import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { machines } from '../data/machineData';
import { 
  ArrowLeft, Star, Heart, Share2, Check, X, 
  Phone, Mail, MapPin, Clock, MessageCircle 
} from 'lucide-react';

const MachineDetail = () => {
  const { id } = useParams();
  const machine = machines.find(m => m.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'purchase'
  });

  if (!machine) {
    return (
      <div className="container-max py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Machine not found</h2>
        <Link to="/machines" className="btn-primary">
          Browse All Machines
        </Link>
      </div>
    );
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Inquiry for ${machine.name} - ${inquiryData.type.charAt(0).toUpperCase() + inquiryData.type.slice(1)}`;
    const body = `
Dear Copiers Solutions,

I am interested in the ${machine.name} for ${inquiryData.type}.

Customer Details:
Name: ${inquiryData.name}
Email: ${inquiryData.email}
Phone: ${inquiryData.phone}

Message:
${inquiryData.message}

Machine Details:
- Model: ${machine.name}
- Brand: ${machine.brand}
- Price: ₹${machine.price?.toLocaleString()}
- Type: ${machine.type}

Please contact me with more information.

Best regards,
${inquiryData.name}
    `;

    // Open email client
    const mailtoLink = `mailto:copiersnasik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Close form
    setShowInquiryForm(false);
    setInquiryData({ name: '', email: '', phone: '', message: '', type: 'purchase' });
  };

  return (
    <div className="py-32">
      <div className="container-max">
        {/* Back Button */}
        <Link 
          to="/machines" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Machines
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={machine.images[selectedImage]}
                alt={machine.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {machine.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {machine.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${machine.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {machine.brand}
                </span>
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  machine.available 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                }`}>
                  {machine.available ? 'Available' : 'Out of Stock'}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{machine.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(machine.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {machine.rating} ({machine.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {machine.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setInquiryData(prev => ({ ...prev, type: 'purchase' }));
                    setShowInquiryForm(true);
                  }}
                  className="btn-primary w-full"
                >
                  Inquire to Buy
                </button>
                <button
                  onClick={() => {
                    setInquiryData(prev => ({ ...prev, type: 'rental' }));
                    setShowInquiryForm(true);
                  }}
                  className="btn-secondary w-full"
                >
                  Inquire for Rent
                </button>
              </div>

              {/* Contact Options */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-gray-900">Contact Us Directly</h3>
                <div className="space-y-2">
                  <a
                    href="tel:9822006345"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
                  >
                    <Phone size={18} />
                    <span>98220 06345</span>
                  </a>
                  <a
                    href="mailto:copiersnasik@gmail.com"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
                  >
                    <Mail size={18} />
                    <span>copiersnasik@gmail.com</span>
                  </a>
                  <div className="flex items-start space-x-3 text-gray-700">
                    <MapPin size={18} className="mt-0.5" />
                    <span>1, Mahadev Apt, Nashik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {Object.entries(machine.specifications).map(([key, value]) => (
                    <div key={key} className="px-6 py-4 flex justify-between">
                      <span className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {machine.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-700 text-sm mb-4">
                Contact us for personalized recommendations and pricing information.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:9822006345"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <Phone size={16} />
                  <span className="text-sm font-medium">Call: 98220 06345</span>
                </a>
                <a
                  href="mailto:copiersnasik@gmail.com"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <Mail size={16} />
                  <span className="text-sm font-medium">Email Us</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-gray-600 mt-1" />
                  <p className="text-sm text-gray-700">
                    1, Mahadev Apt<br />
                    Nashik, Maharashtra
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock size={16} className="text-gray-600 mt-1" />
                  <div className="text-sm text-gray-700">
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                {inquiryData.type === 'purchase' ? 'Purchase Inquiry' : 'Rental Inquiry'}
              </h3>
              <button
                onClick={() => setShowInquiryForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={inquiryData.name}
                  onChange={(e) => setInquiryData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={inquiryData.email}
                  onChange={(e) => setInquiryData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={inquiryData.phone}
                  onChange={(e) => setInquiryData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={inquiryData.message}
                  onChange={(e) => setInquiryData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Any specific requirements or questions..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowInquiryForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MachineDetail; 