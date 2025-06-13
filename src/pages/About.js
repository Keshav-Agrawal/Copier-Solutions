import React from 'react';
import { Phone, Mail, MapPin, Award, Users, Clock, Shield, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We provide only genuine products from authorized dealers with full warranty coverage."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We prioritize their satisfaction above all."
    },
    {
      icon: Target,
      title: "Expert Solutions",
      description: "Professional consultation and tailored solutions for every business requirement."
    },
    {
      icon: Heart,
      title: "Trust & Reliability",
      description: "Building long-term relationships through honest business practices and reliable service."
    }
  ];

  const team = [
    {
      name: "Keshav Agrawal",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "15+ years of experience in photocopier industry with expertise in Canon and Kyocera products."
    },
    {
      name: "Rajesh Sharma",
      position: "Technical Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Certified technician specializing in installation, maintenance, and repair services."
    },
    {
      name: "Priya Patel",
      position: "Sales Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in understanding customer needs and providing the best photocopier solutions."
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started as a small photocopier service provider in Nashik" },
    { year: "2012", event: "Canon Partnership", description: "Became authorized Canon dealer for Maharashtra region" },
    { year: "2015", event: "Kyocera Authorization", description: "Added Kyocera products to our portfolio" },
    { year: "2018", event: "500+ Customers", description: "Reached milestone of serving 500+ satisfied customers" },
    { year: "2020", event: "Digital Expansion", description: "Launched online platform for better customer service" },
    { year: "2023", event: "Market Leader", description: "Became leading photocopier dealer in Nashik region" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-blue-300">Copiers Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Your trusted partner for photocopier solutions in Nashik since 2008. 
              We specialize in Canon and Kyocera products with comprehensive support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <Award className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">15+ Years</h3>
                <p className="text-blue-100">Industry Experience</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <Users className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">500+</h3>
                <p className="text-blue-100">Happy Customers</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <Clock className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7</h3>
                <p className="text-blue-100">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Copiers Solutions began as a small family business with a simple mission: 
                to provide reliable photocopier solutions to businesses in Nashik. What started as a local 
                service provider has grown into the region's most trusted photocopier dealer.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've built strong partnerships with leading brands like Canon and Kyocera, 
                allowing us to offer the latest technology and genuine products to our customers. Our commitment 
                to quality service and customer satisfaction has helped us serve over 500 businesses across 
                various industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to evolve with the changing needs of modern businesses, offering not just 
                sales but comprehensive solutions including rentals, maintenance, and genuine spare parts.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Office Environment"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business and define our commitment to customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the photocopier industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authorized Dealer</h3>
              <p className="text-gray-600">Official partnerships with Canon and Kyocera ensure genuine products and warranties</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">Fast delivery, installation, and responsive customer support when you need it</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals providing consultation, installation, and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your photocopier needs and find the perfect solution for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9988776655" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call: 9988776655
            </a>
            <a 
              href="mailto:keshav@gmail.com?subject=Business Inquiry&body=Hi, I would like to know more about your photocopier solutions. Please contact me." 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-400">
            <div className="flex items-center justify-center text-blue-100">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Visit us at: 1, Mahadev Apt, Nashik</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 