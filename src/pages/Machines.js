import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Phone, Mail, Eye, Printer, Settings, Zap } from 'lucide-react';
import { machines } from '../data/machineData';

const Machines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const brands = ['All Brands', ...new Set(machines.map(machine => machine.brand))];
  const categories = ['All Categories', ...new Set(machines.map(machine => machine.category))];
  const types = ['All Types', ...new Set(machines.map(machine => machine.type))];

  const filteredMachines = useMemo(() => {
    let filtered = machines.filter(machine => {
      const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           machine.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           machine.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           machine.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBrand = selectedBrand === 'All Brands' || machine.brand === selectedBrand;
      const matchesCategory = selectedCategory === 'All Categories' || machine.category === selectedCategory;
      const matchesType = selectedType === 'All Types' || machine.type === selectedType;
      const matchesAvailability = availabilityFilter === 'All' || 
                                 (availabilityFilter === 'Available' && machine.available) ||
                                 (availabilityFilter === 'Out of Stock' && !machine.available);
      const matchesPrice = machine.price >= priceRange[0] && machine.price <= priceRange[1];

      return matchesSearch && matchesBrand && matchesCategory && matchesType && matchesAvailability && matchesPrice;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedBrand, selectedCategory, selectedType, availabilityFilter, priceRange, sortBy]);

  const categoryIcons = {
    'Office': Settings,
    'Production': Zap,
    'Printer': Printer
  };

  return (
    <div className="py-32">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photocopier Machines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of Canon and Kyocera photocopiers. 
            From compact office solutions to high-volume production systems.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <Printer size={32} className="text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{machines.length}</div>
            <div className="text-sm text-gray-600">Total Machines</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Star size={32} className="text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">4.7</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <Settings size={32} className="text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{brands.length - 1}</div>
            <div className="text-sm text-gray-600">Brands</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <Zap size={32} className="text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>

        {/* Machines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachines.map((machine) => {
            const IconComponent = categoryIcons[machine.category] || Settings;
            
            return (
              <div key={machine.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={machine.images[0]}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {machine.brand}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <IconComponent size={20} className="text-gray-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{machine.type}</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 fill-current mr-1" size={14} />
                      <span className="text-sm text-gray-600">{machine.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {machine.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {machine.description}
                  </p>

                  {/* Key Specifications */}
                  <div className="mb-4 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Print Speed:</span>
                      <span className="font-medium">{machine.specifications?.printSpeed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Paper Size:</span>
                      <span className="font-medium">{machine.specifications?.paperSize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Connectivity:</span>
                      <span className="font-medium">{machine.specifications?.connectivity}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Link
                      to={`/machine/${machine.id}`}
                      className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
                    >
                      <Eye size={16} className="mr-2" />
                      View Details
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:9822006345"
                        className="w-full bg-blue-100 text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center font-semibold"
                      >
                        <Phone size={16} className="mr-2" />
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/919822006345"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-100 text-green-800 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center font-semibold"
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' className='mr-2' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'><path d='M13.601 2.326A7.952 7.952 0 0 0 8.004.001C3.584.001.001 3.584.001 8c0 1.409.368 2.782 1.064 3.99L.057 15.25a.5.5 0 0 0 .606.606l3.26-1.008A7.96 7.96 0 0 0 8.004 16c4.42 0 8.003-3.583 8.003-8 0-2.137-.833-4.146-2.406-5.674zM8.004 15A6.963 6.963 0 0 1 4.02 13.89a.5.5 0 0 0-.36-.034l-2.6.803.803-2.6a.5.5 0 0 0-.034-.36A6.963 6.963 0 0 1 1.004 8c0-3.866 3.134-7 7-7 1.87 0 3.627.728 4.974 2.049A6.963 6.963 0 0 1 15.004 8c0 3.866-3.134 7-7 7zm3.468-5.29c-.198-.099-1.174-.579-1.355-.646-.181-.066-.313-.099-.444.099-.132.198-.508.646-.623.779-.115.132-.23.149-.428.05-.198-.099-.836-.308-1.592-.983-.588-.523-.984-1.17-1.1-1.368-.115-.198-.012-.305.087-.403.089-.088.198-.23.297-.345.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.444-1.073-.608-1.47-.16-.384-.323-.332-.444-.338l-.378-.007a.86.86 0 0 0-.623.29c-.214.23-.816.797-.816 1.94 0 1.142.836 2.247.953 2.404.115.157 1.646 2.516 4.002 3.428.56.192.996.307 1.336.393.561.143 1.072.123 1.475.075.45-.054 1.174-.48 1.34-.944.165-.463.165-.86.116-.944-.05-.083-.181-.132-.378-.23z'/></svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMachines.length === 0 && (
          <div className="text-center py-12">
            <Printer size={64} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No machines found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or contact us for specific machine requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="tel:9822006345" className="btn-primary">
                <Phone size={16} className="mr-2" />
                Call: 98220 06345
              </a>
              <a href="mailto:copiersnasik@gmail.com" className="btn-secondary">
                <Mail size={16} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <section className="mt-16">
          <div className="bg-blue-50 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center md:flex-row md:justify-between md:items-stretch gap-8">
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center"><Printer className="w-7 h-7 text-blue-600 mr-2" /> Need Help Choosing the Right Machine?</h2>
              <p className="text-gray-700 mb-4 max-w-xl">
                Our experts can help you select the perfect photocopier based on your volume requirements, budget, and specific business needs. Contact us for personalized recommendations.
              </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="tel:9822006345" className="flex-1 flex items-center justify-center bg-white border border-blue-200 rounded-lg px-6 py-4 text-blue-700 font-semibold shadow-sm hover:bg-blue-100 transition">
                <Phone className="w-5 h-5 mr-2" /> Call: 98220 06345
              </a>
              <a href="mailto:copiersnasik@gmail.com" className="flex-1 flex items-center justify-center bg-white border border-blue-200 rounded-lg px-6 py-4 text-blue-700 font-semibold shadow-sm hover:bg-blue-100 transition">
                <Mail className="w-5 h-5 mr-2" /> Email: copiersnasik@gmail.com
              </a>
              <Link to="/contact" className="flex-1 flex items-center justify-center bg-white border border-blue-200 rounded-lg px-6 py-4 text-blue-700 font-semibold shadow-sm hover:bg-blue-100 transition">
                <Printer className="w-5 h-5 mr-2" /> Visit Our Office
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Machines; 