import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({scrolled}) => {
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    
  ];

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-300 ${
      scrolled 
      ? "bg-slate-950/80 backdrop-blur-sm"
      :"bg-slate-950/20 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          
          {/* Logo + Title */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src="/logo.png" alt="CodeFlow" className="w-10 h-10 sm:w-9" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          {/* Nav Links (map) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ">
            <a href="#features" className="text-sm sm:text-base lg:text-lg xl:text-xl 
                       hover:text-blue-400 transition-colors duration-200 ">
                Features
            </a>
            <a href="#pricing" className="text-sm sm:text-base lg:text-lg xl:text-xl 
                       hover:text-blue-400 transition-colors duration-200">
                Pricing
            </a>
            <a href="#testimonials" className="text-sm sm:text-base lg:text-lg xl:text-xl 
                       hover:text-blue-400 transition-colors duration-200 ">
                Testimonials
            </a>
          </div>

          <button className="md:hidden p-2 text-gray-300 hover:text-white" 
          onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
            {mobileMenuIsOpen ? ( <X/> ) : (<Menu className="w-6 h-6 sm:w-6 sm:h-6"/> )}
          </button>
          
          {/* <div className="flex items-center space-x-6 lg:space-x-8 text-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div> */}{/* Map*/ }
          
        </div>
      </div>

      {mobileMenuIsOpen &&(
        <div className="md:hidden bg-slate-900/50 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-9 py-5 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
              <a
                key={index}
                onClick={() => setMobileMenuIsOpen(false)}
                href={item.href}
                className="block py-2 text-xl hover:text-blue-400   transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
