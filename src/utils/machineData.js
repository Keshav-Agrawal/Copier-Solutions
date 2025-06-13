// Mock data for photocopier machines
// In a real application, this would come from Firebase Firestore

export const machineData = [
  {
    id: '1',
    name: 'Canon imageRUNNER ADVANCE C7570i',
    brand: 'Canon',
    model: 'C7570i',
    type: 'Color Multifunction Printer',
    category: 'High-Volume',
    price: 15999,
    rentalPrice: 899,
    availability: 'both', // 'sale', 'rent', 'both'
    inStock: true,
    specifications: {
      printSpeed: '70 ppm (color/black)',
      paperSize: 'Up to 12" x 18"',
      paperCapacity: '6,350 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB',
      features: ['Duplex Printing', 'Network Scan', 'Mobile Printing', 'Cloud Connect']
    },
    description: 'High-performance color multifunction printer ideal for large offices and production environments. Features advanced security and workflow solutions.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop'
    ],
    features: [
      'Advanced Color Technology',
      'High-Speed Performance',
      'Secure Document Handling',
      'Mobile Device Support',
      'Cloud Integration',
      'Energy Efficient'
    ],
    applications: ['Large Office', 'Production Environment', 'Graphic Design', 'Marketing'],
    warranty: '3 years',
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Kyocera ECOSYS MA4000cifx',
    brand: 'Kyocera',
    model: 'MA4000cifx',
    type: 'Color Multifunction Printer',
    category: 'Mid-Volume',
    price: 8999,
    rentalPrice: 449,
    availability: 'both',
    inStock: true,
    specifications: {
      printSpeed: '42 ppm (color/black)',
      paperSize: 'Up to 11" x 17"',
      paperCapacity: '2,100 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB',
      features: ['Duplex Printing', 'Scan to Email', 'Mobile Printing', 'Touch Panel']
    },
    description: 'Reliable and efficient color multifunction printer designed for medium to large workgroups. Offers exceptional print quality and low running costs.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564514464-45ae8f08e6e3?w=800&h=600&fit=crop'
    ],
    features: [
      'ECOSYS Technology',
      'Long-Life Components',
      'High Print Quality',
      'Flexible Paper Handling',
      'Advanced Security',
      'Cost-Effective Operation'
    ],
    applications: ['Medium Office', 'Workgroup', 'Department', 'Small Business'],
    warranty: '2 years',
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Canon imageRUNNER 2630i',
    brand: 'Canon',
    model: '2630i',
    type: 'Black & White Multifunction Printer',
    category: 'Mid-Volume',
    price: 4999,
    rentalPrice: 249,
    availability: 'both',
    inStock: true,
    specifications: {
      printSpeed: '30 ppm (black)',
      paperSize: 'Up to 11" x 17"',
      paperCapacity: '1,200 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB',
      features: ['Duplex Printing', 'Network Scan', 'Mobile Printing', 'Document Server']
    },
    description: 'Compact and efficient black and white multifunction printer perfect for small to medium offices. Delivers professional results with reliable performance.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop'
    ],
    features: [
      'Compact Design',
      'Energy Efficient',
      'User-Friendly Interface',
      'Reliable Performance',
      'Network Integration',
      'Mobile Support'
    ],
    applications: ['Small Office', 'Home Office', 'Department', 'Remote Work'],
    warranty: '2 years',
    rating: 4.5,
    reviews: 156
  },
  {
    id: '4',
    name: 'Kyocera TASKalfa 3554ci',
    brand: 'Kyocera',
    model: 'TASKalfa 3554ci',
    type: 'Color Multifunction Printer',
    category: 'Mid-Volume',
    price: 7499,
    rentalPrice: 399,
    availability: 'both',
    inStock: false,
    specifications: {
      printSpeed: '35 ppm (color/black)',
      paperSize: 'Up to 12" x 18"',
      paperCapacity: '2,100 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB',
      features: ['Duplex Printing', 'Advanced Scan', 'Mobile Printing', 'Touch Interface']
    },
    description: 'Versatile color multifunction printer that combines performance with environmental responsibility. Ideal for busy offices requiring high-quality output.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    features: [
      'HyPAS Platform',
      'Environmental Friendly',
      'High Security',
      'Flexible Workflow',
      'Professional Quality',
      'Cost Management'
    ],
    applications: ['Business Office', 'Creative Services', 'Education', 'Healthcare'],
    warranty: '3 years',
    rating: 4.7,
    reviews: 94
  },
  {
    id: '5',
    name: 'Canon imageRUNNER ADVANCE C5560i',
    brand: 'Canon',
    model: 'C5560i',
    type: 'Color Multifunction Printer',
    category: 'High-Volume',
    price: 12999,
    rentalPrice: 699,
    availability: 'sale',
    inStock: true,
    specifications: {
      printSpeed: '60 ppm (color/black)',
      paperSize: 'Up to 12" x 18"',
      paperCapacity: '4,400 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB, NFC',
      features: ['Duplex Printing', 'Advanced Security', 'Cloud Connect', 'Mobile Solutions']
    },
    description: 'Premium color multifunction printer designed for high-volume printing environments. Features cutting-edge technology and superior image quality.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
    ],
    features: [
      'imageRUNNER ADVANCE Technology',
      'Outstanding Image Quality',
      'Advanced Workflow',
      'Enhanced Security',
      'Sustainable Operation',
      'Intuitive Operation'
    ],
    applications: ['Corporate Office', 'Print Service Provider', 'Government', 'Finance'],
    warranty: '3 years',
    rating: 4.9,
    reviews: 73
  },
  {
    id: '6',
    name: 'Kyocera ECOSYS P4140dn',
    brand: 'Kyocera',
    model: 'P4140dn',
    type: 'Black & White Printer',
    category: 'Desktop',
    price: 899,
    rentalPrice: 89,
    availability: 'rent',
    inStock: true,
    specifications: {
      printSpeed: '42 ppm (black)',
      paperSize: 'Up to 8.5" x 14"',
      paperCapacity: '600 sheets',
      connectivity: 'Ethernet, USB',
      features: ['Duplex Printing', 'Network Ready', 'Quiet Operation', 'Compact Design']
    },
    description: 'Efficient desktop black and white printer perfect for individual users and small workgroups. Combines speed, quality, and reliability in a compact design.',
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564514464-45ae8f08e6e3?w=800&h=600&fit=crop'
    ],
    features: [
      'ECOSYS Technology',
      'Compact Footprint',
      'Low Operating Costs',
      'Reliable Performance',
      'Easy Integration',
      'Quiet Operation'
    ],
    applications: ['Home Office', 'Small Business', 'Personal Use', 'Remote Work'],
    warranty: '2 years',
    rating: 4.4,
    reviews: 201
  },
  {
    id: '7',
    name: 'Canon imageRUNNER ADVANCE 4545i',
    brand: 'Canon',
    model: '4545i',
    type: 'Black & White Multifunction Printer',
    category: 'High-Volume',
    price: 6999,
    rentalPrice: 349,
    availability: 'both',
    inStock: true,
    specifications: {
      printSpeed: '45 ppm (black)',
      paperSize: 'Up to 11" x 17"',
      paperCapacity: '2,300 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB',
      features: ['Duplex Printing', 'Advanced Scan', 'Cloud Integration', 'Mobile Printing']
    },
    description: 'High-performance black and white multifunction printer designed for demanding office environments. Offers exceptional speed and advanced workflow capabilities.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop'
    ],
    features: [
      'High-Speed Performance',
      'Advanced Workflow',
      'Robust Security',
      'Cloud Connectivity',
      'Mobile Integration',
      'Efficient Operation'
    ],
    applications: ['Large Office', 'Department', 'Workgroup', 'Education'],
    warranty: '3 years',
    rating: 4.6,
    reviews: 112
  },
  {
    id: '8',
    name: 'Kyocera TASKalfa 6053ci',
    brand: 'Kyocera',
    model: 'TASKalfa 6053ci',
    type: 'Color Multifunction Printer',
    category: 'High-Volume',
    price: 18999,
    rentalPrice: 999,
    availability: 'both',
    inStock: true,
    specifications: {
      printSpeed: '60 ppm (color/black)',
      paperSize: 'Up to 12" x 18"',
      paperCapacity: '7,150 sheets',
      connectivity: 'Ethernet, Wi-Fi, USB, NFC',
      features: ['Duplex Printing', 'Professional Finishing', 'Advanced Security', 'Workflow Optimization']
    },
    description: 'Enterprise-level color multifunction printer built for high-volume production environments. Delivers exceptional quality and performance with advanced finishing options.',
    images: [
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    features: [
      'Production-Level Performance',
      'Professional Finishing',
      'Advanced Workflow',
      'Enterprise Security',
      'Exceptional Quality',
      'Flexible Configuration'
    ],
    applications: ['Production Environment', 'Corporate Office', 'Print Shop', 'Service Bureau'],
    warranty: '3 years',
    rating: 4.8,
    reviews: 56
  }
];

export const brands = ['Canon', 'Kyocera'];
export const categories = ['Desktop', 'Mid-Volume', 'High-Volume'];
export const types = ['Black & White Printer', 'Color Multifunction Printer', 'Black & White Multifunction Printer'];
export const availability = ['sale', 'rent', 'both'];

// Utility functions
export const getMachineById = (id) => {
  return machineData.find(machine => machine.id === id);
};

export const filterMachines = (filters) => {
  return machineData.filter(machine => {
    if (filters.brand && filters.brand !== 'all' && machine.brand !== filters.brand) {
      return false;
    }
    if (filters.category && filters.category !== 'all' && machine.category !== filters.category) {
      return false;
    }
    if (filters.type && filters.type !== 'all' && machine.type !== filters.type) {
      return false;
    }
    if (filters.availability && filters.availability !== 'all' && machine.availability !== filters.availability && machine.availability !== 'both') {
      return false;
    }
    if (filters.priceRange) {
      const price = filters.availability === 'rent' ? machine.rentalPrice : machine.price;
      if (price < filters.priceRange.min || price > filters.priceRange.max) {
        return false;
      }
    }
    if (filters.inStock && !machine.inStock) {
      return false;
    }
    return true;
  });
};

export const searchMachines = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return machineData.filter(machine => 
    machine.name.toLowerCase().includes(lowercaseQuery) ||
    machine.brand.toLowerCase().includes(lowercaseQuery) ||
    machine.model.toLowerCase().includes(lowercaseQuery) ||
    machine.type.toLowerCase().includes(lowercaseQuery) ||
    machine.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedMachines = () => {
  return machineData.filter(machine => machine.rating >= 4.5).slice(0, 6);
};

export const getPopularMachines = () => {
  return machineData.sort((a, b) => b.reviews - a.reviews).slice(0, 4);
}; 