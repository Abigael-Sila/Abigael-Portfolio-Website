import React, { useState, useEffect } from 'react';
import { Eye, Heart, Sparkles, Users } from 'lucide-react';

const VisitorsCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem('digitalFootprints');
    const currentCount = storedCount ? parseInt(storedCount) : 0;
    
    // Increment count for new visit
    const newCount = currentCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('digitalFootprints', newCount.toString());

    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);

    // Show hearts animation for milestone visits
    if (newCount % 10 === 0) {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 2000);
    }
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className={`relative bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-4 transition-all duration-500 ${
        isAnimating ? 'scale-110 shadow-2xl shadow-pink-500/25' : 'scale-100'
      }`}>
        {/* Floating Hearts Animation */}
        {showHearts && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <Heart
                key={i}
                className="absolute w-4 h-4 text-pink-400 fill-current animate-float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        )}

        {/* Main Counter Content */}
        <div className="flex items-center gap-3">
          {/* Animated Icon */}
          <div className="relative">
            <div className="bg-pink-500/30 p-2 rounded-full animate-pulse">
              <Eye className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${
                isAnimating ? 'scale-125' : 'scale-100'
              }`} />
            </div>
            
            {/* Sparkle Effect */}
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-ping" />
          </div>

          {/* Counter Info */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-pink-400">Digital Footprints</span>
              <Users className="w-3 h-3 text-pink-400" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`text-lg font-bold text-white transition-all duration-500 ${
                isAnimating ? 'text-pink-300' : 'text-white'
              }`}>
                {formatNumber(visitorCount)}
              </span>
              
              {/* Cute Messages */}
              <div className="text-xs text-gray-300">
                {visitorCount === 1 && "👋 First visit!"}
                {visitorCount > 1 && visitorCount < 10 && "✨ Welcome back!"}
                {visitorCount >= 10 && visitorCount < 50 && "🎉 Growing!"}
                {visitorCount >= 50 && visitorCount < 100 && "🚀 Amazing!"}
                {visitorCount >= 100 && "🌟 Incredible!"}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Celebration */}
        {visitorCount % 100 === 0 && visitorCount > 0 && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
            🎊 {visitorCount} Milestone! 🎊
          </div>
        )}

        {/* Cute Border Animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-pink-500/20 animate-pulse"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl -z-10 animate-pulse"></div>
      </div>

      {/* Thank You Message */}
      {isAnimating && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium animate-fadeIn border border-pink-500/30">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-400 fill-current" />
            <span>Thanks for visiting! 💕</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorsCounter;