import React from 'react';

const RentalSales = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen mt-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Rental & Sales Terms</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Rental Terms */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Rental Terms</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Flexible rental periods: monthly, quarterly, or yearly options available.</li>
            <li>All rentals include regular maintenance and technical support.</li>
            <li>Delivery, installation, and training provided at no extra cost within Nashik city limits.</li>
            <li>Security deposit required, refundable upon return of machine in good condition.</li>
            <li>Consumables (toner, paper) can be supplied at additional cost.</li>
            <li>24/7 customer support for urgent issues.</li>
            <li>Option to upgrade or switch machines during the rental period.</li>
          </ul>
        </div>
        {/* Sales Terms */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Sales Terms</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All machines are covered by a standard 3-month warranty (non-extendable).</li>
            <li>Free delivery and installation within Nashik city.</li>
            <li>On-site training for staff included with every purchase.</li>
            <li>After-sales service and annual maintenance contracts available.</li>
            <li>Flexible payment options: cheque, bank transfer, or UPI accepted.</li>
            <li>Genuine spare parts and consumables always available.</li>
            <li>Trade-in and buyback options for old machines.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Have Questions?</h3>
        <p className="mb-4 text-gray-700">Contact us for a personalized quote or to discuss your requirements.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9822006345" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center">
            Call Now: 9822006345
          </a>
          <a href="mailto:copiersnasik@gmail.com" className="bg-white border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-semibold flex items-center justify-center">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default RentalSales; 