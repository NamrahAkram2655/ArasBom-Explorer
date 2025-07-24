
import React, { useState } from 'react';
import { User, ChevronDown, LogOut, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              Home
            </Link>
            <Link to="/use" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              How To Use
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <div className="text-gray-800 font-bold text-2xl tracking-wide">
              XAVOR
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={16} />
                </div>
                <span className="font-medium text-sm">John Doe</span>
                <ChevronDown size={14} className={`transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">john.doe@company.com</p>
                    </div>
                    <button
                      onClick={() => setIsUserMenuOpen(false)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <Settings size={14} />
                      <span>Settings</span>
                    </button>
                    <button
                      onClick={() => setIsUserMenuOpen(false)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <HelpCircle size={14} />
                      <span>Help</span>
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <LogOut size={14} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-5 z-30"
          onClick={() => setIsUserMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
