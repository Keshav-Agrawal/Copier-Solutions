import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Machines from './pages/Machines';
import MachineDetail from './pages/MachineDetail';
import SpareParts from './pages/SpareParts';
import About from './pages/About';
import Contact from './pages/Contact';
import RentalSales from './pages/RentalSales';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/machine/:id" element={<MachineDetail />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rental-sales" element={<RentalSales />} />
        </Routes>
      </main>
      <Footer />
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919822006345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.366.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a8.933 8.933 0 0 1-4.548-1.252l-.326-.194-3.377.892.902-3.292-.212-.336A8.922 8.922 0 0 1 2.067 12.02c0-4.962 4.037-9 9.011-9 2.406 0 4.668.936 6.37 2.636a8.933 8.933 0 0 1 2.64 6.364c-.003 4.963-4.04 9-9.015 9m7.348-16.348A10.444 10.444 0 0 0 11.078.458C5.227.458.067 5.617.07 12.019c0 2.123.555 4.199 1.607 6.032L.057 23.545a1.13 1.13 0 0 0 1.41 1.409l5.495-1.615a10.43 10.43 0 0 0 4.115.833h.004c6.849 0 12.01-5.159 12.013-11.561a10.41 10.41 0 0 0-3.053-7.632"/></svg>
      </a>
    </div>
  );
}

export default App; 