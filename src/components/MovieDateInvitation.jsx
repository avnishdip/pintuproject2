import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Heart, Star, Popcorn, Camera } from 'lucide-react';
import FireworksAnimation from './FireworksAnimation';

const MovieDateInvitation = ({ onBack }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showFireworksAnimation, setShowFireworksAnimation] = useState(false);

  const handleAccept = () => {
    setShowFireworksAnimation(true);
    // You can add additional logic here like sending notifications
  };

  const handleFireworksComplete = () => {
    setShowFireworksAnimation(false);
    setIsAccepted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      {/* Fireworks Animation */}
      <FireworksAnimation 
        isVisible={showFireworksAnimation} 
        onComplete={handleFireworksComplete} 
      />
      {/* Header */}
      <div className="relative">
        <button
          onClick={onBack}
          className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Camera size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Movie Date Night
            </h1>
            <p className="text-xl text-pink-100 mb-6">
              A special invitation just for you
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Heart size={16} />
                <span>Romantic</span>
              </div>
              <div className="flex items-center space-x-1">
                <Popcorn size={16} />
                <span>Entertainment</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={16} />
                <span>Special</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {!isAccepted ? (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Movie Poster Section */}
            <div className="relative h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Happy Gilmore Marathon</h2>
                <p className="text-lg opacity-90">Original + Sequel Back-to-Back</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Comedy</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Sports</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Marathon</span>
                </div>
              </div>
            </div>

            {/* Invitation Details */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  You're Invited to a Special Movie Night!
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Join me for an epic movie marathon! We'll watch both the original Happy Gilmore and the highly anticipated sequel back-to-back. 
                  Let's create some amazing memories together!
                </p>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <Calendar className="mx-auto mb-3 text-pink-500" size={32} />
                  <h4 className="font-semibold text-gray-800 mb-2">Date</h4>
                  <p className="text-gray-600">This Week</p>
                  <p className="text-sm text-gray-500">Flexible timing</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <Clock className="mx-auto mb-3 text-purple-500" size={32} />
                  <h4 className="font-semibold text-gray-800 mb-2">Time</h4>
                  <p className="text-gray-600">Evening Showtime</p>
                  <p className="text-sm text-gray-500">Perfect for dinner after</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                  <MapPin className="mx-auto mb-3 text-blue-500" size={32} />
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">Online Movie Date</p>
                  <p className="text-sm text-gray-500">Watch together virtually</p>
                </div>
              </div>

              {/* Special Features */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  What's Included
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Both movies back-to-back</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Virtual dinner date</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Watch together online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Great company guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex-1 px-6 py-4 text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-medium"
                >
                  More Details
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 font-medium text-lg"
                >
                  Accept Invitation 🎬
                </button>
              </div>

              {/* Additional Details */}
              {showDetails && (
                <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                  <h5 className="font-semibold text-gray-800 mb-3">Marathon Details</h5>
                  <p className="text-gray-600 mb-4">
                    We'll start with the original Happy Gilmore (1996) - the classic comedy about a hockey player turned golfer 
                    who takes the PGA Tour by storm with his unorthodox style. Then we'll watch the highly anticipated sequel 
                    Happy Gilmore 2 (2024) where Happy returns to the golf course for another epic adventure!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Total Runtime:</span> ~4h 30m
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rating:</span> PG-13
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Genre:</span> Comedy, Sports
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Format:</span> Double Feature
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Accepted State
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Invitation Accepted! 🎉
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  I'm so excited to spend this special evening with you! 
                  You'll receive more details about the exact time and location soon.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-700">I'll confirm the exact showtime</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onBack}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all font-medium"
              >
                Back to App
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDateInvitation; 