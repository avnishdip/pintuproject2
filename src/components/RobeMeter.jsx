import { useState, useEffect } from 'react';
import { Save, Star, Heart, Phone, MessageCircle, Frown, Smile, ThumbsUp } from 'lucide-react';

export default function RobeMeter() {
  const [level, setLevel] = useState(3);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [showStars, setShowStars] = useState(false);
  const [showReaction, setShowReaction] = useState(false);
  
  // Simulate fetching the latest value from server on component mount
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      // For demo purposes, we'll just use a random value
      // In a real app, this would be a fetch call to your backend
      const savedLevel = Math.floor(Math.random() * 7) + 1;
      setLevel(savedLevel);
      setLastSaved(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to save the current level value
  const saveLevel = () => {
    setSaving(true);
    
    // Simulate API call to save data
    setTimeout(() => {
      setSaving(false);
      setLastSaved(new Date().toLocaleTimeString());
      
      // Show reaction animation based on level
      setShowReaction(true);
      setTimeout(() => setShowReaction(false), 3500);
      
      // Show stars animation if level is 7
      if (level === 7) {
        setShowStars(true);
        setTimeout(() => setShowStars(false), 3000);
      }
      
      // In a real app, this would be a fetch POST to your backend
      console.log("Level saved:", level);
    }, 800);
  };
  
  // Handle click on the meter to change level
  const handleMeterClick = (e) => {
    const meterRect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - meterRect.left;
    const meterWidth = meterRect.width;
    
    // Calculate level based on click position (1-7)
    const newLevel = Math.max(1, Math.min(7, Math.ceil((clickX / meterWidth) * 7)));
    setLevel(newLevel);
  };
  
  // Get reaction message and icon based on level
  const getReaction = () => {
    if (level >= 1 && level <= 3) {
      return {
        message: "Oh my god do better next time",
        icon: <Frown size={48} className="text-red-500 mb-2" />,
        subtext: "Call me and we fix it",
        actionIcon: <Phone size={20} className="ml-2" />,
        bgColor: "bg-red-100",
        textColor: "text-red-700",
        borderColor: "border-red-300"
      };
    } else if (level >= 4 && level <= 6) {
      return {
        message: "Oh my god pirush we need to fix this but I love you",
        icon: <Smile size={48} className="text-yellow-500 mb-2" />,
        subtext: "Almost there!",
        actionIcon: <MessageCircle size={20} className="ml-2" />,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-700",
        borderColor: "border-yellow-300"
      };
    } else {
      return {
        message: "Perfect my love!",
        icon: <ThumbsUp size={48} className="text-green-500 mb-2" />,
        subtext: "This is the golden value!",
        actionIcon: <Heart size={20} className="ml-2 fill-red-500" />,
        bgColor: "bg-green-100",
        textColor: "text-green-700",
        borderColor: "border-green-300"
      };
    }
  };
  
  // Floating hearts animation for the background
  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const startX = Math.random() * 100;
          const duration = 10 + Math.random() * 20;
          const delay = Math.random() * 20;
          
          return (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${startX}%`,
                bottom: `-${size}px`,
                animation: `float ${duration}s linear ${delay}s infinite`,
              }}
            >
              <Heart size={size} className="text-pink-400 fill-pink-400" />
            </div>
          );
        })}
      </div>
    );
  };
  
  const reaction = getReaction();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-500 to-purple-700 p-6 relative overflow-hidden">
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          100% { transform: translateY(-100vh) rotate(20deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes slideIn {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
      
      {/* Floating background hearts */}
      <FloatingHearts />
      
      {/* Star animation container */}
      {showStars && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 0.5;
            const randomSize = Math.random() * 16 + 8;
            
            return (
              <div 
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${0.8 + Math.random()}s`
                }}
              >
                <Star 
                  size={randomSize} 
                  className="text-yellow-300 fill-yellow-300" 
                />
              </div>
            );
          })}
        </div>
      )}
      
      {/* Level reaction popup - moved higher up on the page */}
      {showReaction && (
        <div 
          className={`fixed top-10 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg ${reaction.bgColor} ${reaction.textColor} border-2 ${reaction.borderColor} z-10 max-w-md w-11/12`}
          style={{ animation: level <= 3 ? 'shake 0.5s ease-in-out' : (level === 7 ? 'bounce 1s ease-in-out' : 'slideIn 0.5s ease-in-out') }}
        >
          <div className="flex flex-col items-center text-center">
            {reaction.icon}
            <h3 className="text-xl font-bold mb-1">{reaction.message}</h3>
            <p className="flex items-center text-sm">
              {reaction.subtext}
              {reaction.actionIcon}
            </p>
          </div>
        </div>
      )}
      
      <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-6 w-full max-w-md border-2 border-pink-300 relative">
        {/* Decorative hearts in corners */}
        <Heart size={24} className="absolute top-3 left-3 text-pink-400 fill-pink-400 opacity-50" />
        <Heart size={24} className="absolute top-3 right-3 text-pink-400 fill-pink-400 opacity-50" />
        <Heart size={24} className="absolute bottom-3 left-3 text-pink-400 fill-pink-400 opacity-50" />
        <Heart size={24} className="absolute bottom-3 right-3 text-pink-400 fill-pink-400 opacity-50" />
        
        <div className="flex items-center justify-center mb-6">
          <Heart size={28} className="text-pink-500 fill-pink-500 mr-2" />
          <h1 className="text-3xl font-bold text-center text-pink-600">Robé Meter</h1>
          <Heart size={28} className="text-pink-500 fill-pink-500 ml-2" />
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>1</span>
            <span className="flex items-center">
              <Heart size={14} className="text-pink-500 fill-pink-500 mr-1" />
              Level: {level}
              <Heart size={14} className="text-pink-500 fill-pink-500 ml-1" />
            </span>
            <span>7</span>
          </div>
          
          <div 
            className="h-16 bg-pink-100 rounded-lg overflow-hidden cursor-pointer relative"
            onClick={handleMeterClick}
          >
            {/* Color-coded level indicator based on range */}
            <div 
              className={`h-full transition-all duration-300 ease-out ${
                level <= 3 ? 'bg-gradient-to-r from-red-400 to-red-600' : 
                level <= 6 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                'bg-gradient-to-r from-green-400 to-green-600'
              }`}
              style={{ width: `${(level / 7) * 100}%` }}
            ></div>
            
            {/* Tick marks */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-full w-px bg-pink-200"
                ></div>
              ))}
            </div>
            
            {/* Level labels with hearts for special values */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none">
              {[...Array(7)].map((_, i) => {
                const lvl = i + 1;
                return (
                  <div 
                    key={i}
                    className="flex flex-col items-center justify-end pb-1"
                    style={{ width: '14%' }}
                  >
                    {lvl === 7 && (
                      <Heart size={16} className="text-red-500 fill-red-500 mb-1" />
                    )}
                    {lvl === 3 && (
                      <div className="w-px h-6 bg-red-500 opacity-50" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-between text-xs mt-1 px-1">
            <span className="text-red-500">Needs Work</span>
            <span className="text-yellow-600">Getting Better</span>
            <span className="text-green-500">Perfect!</span>
          </div>
          
          <p className="text-sm text-pink-700 mt-2 text-center italic">
            Touch the meter to show your feelings, my love ❤️
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={saveLevel}
            disabled={saving}
            className={`flex items-center justify-center px-4 py-2 text-white rounded-lg transition-colors ${
              level <= 3 ? 'bg-red-500 hover:bg-red-600 disabled:bg-red-300' : 
              level <= 6 ? 'bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300' : 
              'bg-green-500 hover:bg-green-600 disabled:bg-green-300'
            }`}
          >
            {saving ? (
              <span>Saving...</span>
            ) : (
              <>
                <Heart size={16} className="mr-2 fill-white" />
                Save Love Level
              </>
            )}
          </button>
          
          <div className="text-sm text-gray-600">
            {lastSaved ? (
              <span>Last felt: {lastSaved}</span>
            ) : (
              <span>Loading last feeling...</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white bg-opacity-20 p-4 rounded-lg text-white max-w-md border border-pink-300">
        <h2 className="text-xl font-semibold mb-2 text-pink-200 text-center">1-7 Mon Rouésh?</h2>
        <p className="text-white text-center">
          This is a meter to know the level of today my love. Please select the level and click save.
        </p>
      </div>
      
      {level === 7 && (
        <div className="mt-4 text-center text-yellow-300" style={{ animation: 'pulse 1s infinite' }}>
          <p className="font-bold text-lg">✨ Our Love is Perfect Today! ✨</p>
        </div>
      )}
    </div>
  );
} 