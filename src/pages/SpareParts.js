import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Phone, Mail, ShoppingCart, Package, Wrench, Settings } from 'lucide-react';
import { spareParts, sparePartsCategories, sparePartsBrands, sparePartsTypes } from '../data/sparePartsData';

const SpareParts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Parts');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedType, setSelectedType] = useState('All Types');
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredParts = useMemo(() => {
    let filtered = spareParts.filter(part => {
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.brand.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Parts' || part.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All Brands' || part.brand === selectedBrand;
      const matchesType = selectedType === 'All Types' || part.type === selectedType;
      const matchesPrice = part.price >= priceRange[0] && part.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesBrand && matchesType && matchesPrice;
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
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, selectedType, priceRange, sortBy]);

  const handleInquiry = (part) => {
    const subject = `Inquiry for ${part.name}`;
    const body = `
Dear Copiers Solutions,

I am interested in the following spare part:

Part Details:
- Name: ${part.name}
- Brand: ${part.brand}
- Category: ${part.category}
- Type: ${part.type}
- Price: ₹${part.price.toLocaleString()}
- Part Number: ${part.specifications?.partNumber || 'N/A'}

Please provide availability and delivery information.

Best regards
    `;

    const mailtoLink = `mailto:keshav@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const categoryIcons = {
    'Toner Cartridge': Package,
    'Drum Unit': Settings,
    'Maintenance Kit': Wrench,
    'Fuser Unit': Settings,
    'Transfer Belt': Package,
    'Feed Roller': Settings
  };

  return (
    <div className="py-32">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Spare Parts & Consumables</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genuine spare parts and consumables for Canon and Kyocera photocopiers. 
            Keep your machines running at peak performance with original parts.
          </p>
          <p className="text-lg text-blue-700 mt-4 font-semibold">
            We also deal in lamination and spiral binding machines with all their parts and required supplies.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <Package size={32} className="text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{spareParts.length}</div>
            <div className="text-sm text-gray-600">Total Parts</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Star size={32} className="text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">4.7</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <Wrench size={32} className="text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-600">Brands</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <ShoppingCart size={32} className="text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredParts.length} of {spareParts.length} spare parts
          </p>
          <div className="flex items-center space-x-4">
            <a href="tel:9988776655" className="text-blue-600 hover:text-blue-700 flex items-center">
              <Phone size={16} className="mr-1" />
              99887 76655
            </a>
            <a href="mailto:keshav@gmail.com" className="text-blue-600 hover:text-blue-700 flex items-center">
              <Mail size={16} className="mr-1" />
              Email Us
            </a>
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParts.map((part) => {
            const IconComponent = categoryIcons[part.category] || Package;
            
            return (
              <div key={part.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {part.brand}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <IconComponent size={20} className="text-gray-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{part.category}</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 fill-current mr-1" size={14} />
                      <span className="text-sm text-gray-600">{part.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {part.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {part.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-4 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">{part.type}</span>
                    </div>
                    {part.specifications?.yield && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Yield:</span>
                        <span className="font-medium">{part.specifications.yield}</span>
                      </div>
                    )}
                    {part.specifications?.partNumber && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Part #:</span>
                        <span className="font-medium">{part.specifications.partNumber}</span>
                      </div>
                    )}
                  </div>

                  {/* Compatible Machines */}
                  {part.compatibleMachines && part.compatibleMachines.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">Compatible with:</p>
                      <p className="text-xs text-gray-700 line-clamp-2">
                        {part.compatibleMachines.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {part.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{part.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:9988776655"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-semibold"
                      >
                        <Phone size={16} className="mr-2" />
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/919988776655"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center font-semibold"
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
        {filteredParts.length === 0 && (
          <div className="text-center py-12">
            <Package size={64} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No spare parts found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or contact us for specific part requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="tel:9988776655" className="btn-primary">
                <Phone size={16} className="mr-2" />
                Call: 99887 76655
              </a>
              <a href="mailto:keshav@gmail.com" className="btn-secondary">
                <Mail size={16} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Finding the Right Part?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experts can help you identify the correct spare parts for your photocopier. 
            Contact us with your machine model and we'll provide personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:9988776655" className="btn-primary">
              <Phone size={20} className="mr-2" />
              Call: 99887 76655
            </a>
            <a href="mailto:keshav@gmail.com" className="btn-secondary">
              <Mail size={20} className="mr-2" />
              Email: keshav@gmail.com
            </a>
            <Link to="/contact" className="btn-outline">
              Visit Our Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpareParts; 