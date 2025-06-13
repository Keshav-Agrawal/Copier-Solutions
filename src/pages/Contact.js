import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:copiersnasik@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Inquiry')}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "9822006345",
      description: "Available 24/7 for urgent support",
      action: "tel:9822006345",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "copiersnasik@gmail.com",
      description: "We'll respond within 24 hours",
      action: "mailto:copiersnasik@gmail.com",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Shop number 16, Gurukripa appartment, Near panasonic showroom, Canada corner nashik 422002",
      description: "Maharashtra, India",
      action: "#",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday-Saturday: 10:00 AM - 7:00 PM",
      description: "Sunday: Closed (open only if informed prior by customers)",
      action: "#",
      color: "orange"
    }
  ];

  const services = [
    {
      title: "Sales Inquiry",
      description: "Get quotes for new photocopiers",
      image: "https://s3.ap-south-1.amazonaws.com/www.cimg.in/images/2020/01/21/05/166553271_15796029231_large.jpg"
    },
    {
      title: "Rental Services",
      description: "Flexible rental options available",
      image: "https://content.jdmagicbox.com/comp/def_content_category/photocopier-dealers-canon/photocopier-dealers-canon-imagerunner-2206n-photocopier-dealers-canon-1-kgsn9.jpg"
    },
    {
      title: "Technical Support",
      description: "Expert maintenance and repair",
      image: "https://content.jdmagicbox.com/comp/def_content/photocopier-spare-part-manufacturers/default-photocopier-spare-part-manufacturers-1-28tnk.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get In <span className="text-blue-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Ready to find the perfect photocopier solution? Contact our experts today 
              for personalized recommendations and competitive quotes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9822006345" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                Call: 9822006345
              </a>
              <a 
                href="mailto:copiersnasik@gmail.com" 
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your photocopier needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-${info.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className={`w-8 h-8 text-${info.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-lg font-medium text-gray-800 mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
                {info.action !== "#" && (
                  <a 
                    href={info.action}
                    className={`inline-block mt-4 text-${info.color}-600 hover:text-${info.color}-700 font-medium`}
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline-block w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline-block w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline-block w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="inline-block w-4 h-4 mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle className="inline-block w-4 h-4 mr-2" />
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Sales Inquiry">Sales Inquiry</option>
                    <option value="Rental Services">Rental Services</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Spare Parts">Spare Parts</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Services & Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
                <p className="text-xl text-gray-600">
                  We offer comprehensive photocopier solutions for all your business needs
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4 hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  For urgent inquiries or immediate support, don't hesitate to call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:9822006345"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-center"
                  >
                    <Phone className="inline-block w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/919822006345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold text-center"
                  >
                    <MessageCircle className="inline-block w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Nashik, we're easily accessible for consultations and service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Address</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Copiers Solutions</p>
                      <p className="text-gray-600">Shop number 16, Gurukripa appartment</p>
                      <p className="text-gray-600">Near panasonic showroom, Canada corner nashik 422002</p>
                      <p className="text-gray-600">Maharashtra, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:9822006345" className="text-blue-600 hover:text-blue-700">9822006345</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:copiersnasik@gmail.com" className="text-blue-600 hover:text-blue-700">copiersnasik@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday-Saturday: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed (open only if informed prior by customers)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center relative">
              <iframe
                title="Copiers Solutions Location"
                src="https://www.google.com/maps?q=2Q2C%2BJ2+Nashik,+Maharashtra&output=embed&z=18"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 