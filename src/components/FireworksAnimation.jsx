import React from 'react';

const FireworksAnimation = ({ isVisible, onComplete }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full h-full overflow-hidden">
        {/* Firework 1 - Pink */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute inset-0 w-12 h-12 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute inset-0 w-16 h-16 bg-pink-200 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Firework 2 - Purple */}
        <div className="absolute top-1/3 right-1/4">
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute inset-0 w-12 h-12 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute inset-0 w-16 h-16 bg-purple-200 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
        </div>

        {/* Firework 3 - Blue */}
        <div className="absolute bottom-1/4 left-1/3">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute inset-0 w-12 h-12 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute inset-0 w-16 h-16 bg-blue-200 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
        </div>

        {/* Firework 4 - Green */}
        <div className="absolute bottom-1/3 right-1/3">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-12 h-12 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 w-16 h-16 bg-green-200 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Firework 5 - Yellow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute inset-0 w-12 h-12 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute inset-0 w-16 h-16 bg-yellow-200 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Sparkles scattered around */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: '1.5s'
            }}
          >
            ✨
          </div>
        ))}

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full animate-bounce opacity-75"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: '2s'
            }}
          ></div>
        ))}

        {/* Center celebration text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <div className="text-white text-4xl font-bold animate-pulse mb-4">
            Superrrr Piren de mes rêves! 💕
          </div>
          <div className="text-pink-200 text-xl animate-bounce">
            You said YES! 🎉
          </div>
        </div>

        {/* Continue button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={onComplete}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all font-medium text-lg"
          >
            Continue to Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FireworksAnimation; 