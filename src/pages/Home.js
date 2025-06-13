import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const featuredMachines = [
    {
      id: 1,
      name: "Canon imageRUNNER ADVANCE DX C3835i",
      price: 185000,
      originalPrice: 200000,
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8
    },
    {
      id: 4,
      name: "Kyocera TASKalfa 3253ci",
      price: 165000,
      originalPrice: 180000,
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.5
    },
    {
      id: 5,
      name: "Canon imageRUNNER ADVANCE C5560i",
      price: 285000,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Customers", value: "500+" },
    { icon: Award, label: "Years Experience", value: "20+" },
    { icon: Star, label: "Customer Rating", value: "4.8" },
    { icon: Clock, label: "Service Hours", value: "24/7" }
  ];

  const services = [
    {
      title: "Sales",
      description: "Brand new Canon and Kyocera photocopiers with 3-month warranty (non-extendable)",
      image: "https://s3.ap-south-1.amazonaws.com/www.cimg.in/images/2020/01/21/05/166553271_15796029231_large.jpg",
      features: ["Latest Models", "3-Month Warranty (Non-Extendable)", "Installation Support"]
    },
    {
      title: "Rentals",
      description: "Flexible rental options for short and long-term needs",
      image: "https://content.jdmagicbox.com/comp/def_content_category/photocopier-dealers-canon/photocopier-dealers-canon-imagerunner-2206n-photocopier-dealers-canon-1-kgsn9.jpg",
      features: ["Flexible Terms", "Maintenance Included", "Quick Setup"]
    },
    {
      title: "Spare Parts",
      description: "Genuine spare parts and consumables for all models",
      image: "https://content.jdmagicbox.com/comp/def_content/photocopier-spare-part-manufacturers/default-photocopier-spare-part-manufacturers-1-28tnk.jpg",
      features: ["Genuine Parts", "Quick Delivery", "Expert Support"]
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
            backgroundImage: "url('https://sc04.alicdn.com/kf/He1642fa8ce9e419ca4fdf9c67c03aaddG/237367162/He1642fa8ce9e419ca4fdf9c67c03aaddG.jpg')"
          }}
        ></div>
        
        <div className="relative flex flex-col items-center justify-center min-h-[350px] md:min-h-[500px] px-4 container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Copier <span className="text-blue-300">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Your trusted partner for Canon & Kyocera photocopiers in Nashik. 
              Sales, rentals, and genuine spare parts with expert support.
            </p>
            <p className="text-sm md:text-base text-blue-200 mb-2">
              We also deal in lamination and spiral binding machines along with their consumable parts and required products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive photocopier solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Copiers Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for all photocopier needs in Nashik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authorized Dealer</h3>
              <p className="text-gray-600">Official dealer for Canon and Kyocera products with genuine warranties</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional installation, training, and ongoing technical support</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast delivery, installation, and responsive customer service</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with flexible payment and rental options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;