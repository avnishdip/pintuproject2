import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Heart } from 'lucide-react';

const MoviePopup = ({ onClose, onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup should be shown (for next 2 days)
    const popupShown = localStorage.getItem('moviePopupShown');
    const currentTime = new Date().getTime();
    
    if (!popupShown || currentTime < parseInt(popupShown)) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('moviePopupShown', new Date().getTime() + (2 * 24 * 60 * 60 * 1000));
    onAccept();
  };

  const handleClose = () => {
    localStorage.setItem('moviePopupShown', new Date().getTime() + (2 * 24 * 60 * 60 * 1000));
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-2xl p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-pink-200 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <Heart className="mx-auto mb-2" size={32} />
            <h2 className="text-2xl font-bold">Special Invitation!</h2>
            <p className="text-pink-100">You won't want to miss this...</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Movie Date Night
            </h3>
            <p className="text-gray-600 mb-4">
              Join me for a special screening of the highly anticipated sequel!
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Calendar size={20} className="text-pink-500" />
                <span>This Week</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Clock size={20} className="text-pink-500" />
                <span>Evening Showtime</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <MapPin size={20} className="text-pink-500" />
                <span>Online Movie Date</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Happy Gilmore Marathon</h4>
              <p className="text-sm text-gray-600">
                Let's watch both the original and the sequel back-to-back! A perfect movie marathon for us.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Maybe Later
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              I'm In! 🎬
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup; 