// src/components/VisitorsCounter.tsx

import { useState, useEffect } from 'react';
import { Eye, Heart, Sparkles, Users } from 'lucide-react';

const VisitorsCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  // Define your backend API URL
  // IMPORTANT: You MUST replace this with the actual URL of your deployed Render backend.
  // Example: 'https://your-backend-app-name.onrender.com/api/increment-view'
  const API_URL = 'https://abigael-counter-backend.onrender.com/api/increment-view'; 

  useEffect(() => {
    const incrementAndFetchCount = async () => {
      try {
        // Send a request to your backend to increment the view count
        const response = await fetch(API_URL, {
          method: 'POST', // Use POST to signify an action (incrementing)
          headers: {
            'Content-Type': 'application/json',
          },
          // For a simple view counter, no specific body is usually needed,
          // but you could send { page: 'home' } if you had multiple pages.
        });

        // Check if the network request was successful
        if (!response.ok) {
          // If response is not OK, throw an error with the status
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response from the backend
        const data = await response.json();
        const newCount = data.count; // Assuming your API returns the updated count (e.g., { success: true, count: 5 })
        
        // Update the local state with the new count
        setVisitorCount(newCount);

        // Trigger animation for a brief period
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000); // Animation lasts 1 second

        // Show hearts animation for milestone visits (e.g., every 10th visit)
        // This is based on the global count from the backend.
        if (newCount % 10 === 0 && newCount > 0) {
          setShowHearts(true);
          setTimeout(() => setShowHearts(false), 2000); // Hearts animation lasts 2 seconds
        }

      } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error("Failed to fetch or increment visitor count:", error);
        // In a production app, you might set visitorCount to a default or error state here.
      }
    };

    // Call the async function when the component mounts
    incrementAndFetchCount();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  // Helper function to format large numbers (e.g., 1200 becomes 1.2K)
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className={`relative bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-4 transition-all duration-500 ${
        isAnimating ? 'scale-110 shadow-2xl shadow-pink-500/25' : 'scale-100' // Apply scale and shadow during animation
      }`}>
        {/* Floating Hearts Animation (conditionally rendered) */}
        {showHearts && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => ( // Render 6 heart elements
              <Heart
                key={i}
                className="absolute w-4 h-4 text-pink-400 fill-current animate-float"
                style={{
                  left: `${20 + Math.random() * 60}%`, // Random horizontal position
                  top: `${20 + Math.random() * 60}%`,   // Random vertical position
                  animationDelay: `${i * 0.2}s`,       // Stagger animation start
                  animationDuration: '2s'              // Duration of float animation
                }}
              />
            ))}
          </div>
        )}

        {/* Main Counter Content Layout */}
        <div className="flex items-center gap-3">
          {/* Animated Eye Icon */}
          <div className="relative">
            <div className="bg-pink-500/30 p-2 rounded-full animate-pulse">
              <Eye className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${
                isAnimating ? 'scale-125' : 'scale-100' // Scale up during animation
              }`} />
            </div>
            
            {/* Sparkle Effect for the icon */}
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-ping" />
          </div>

          {/* Counter Number and Messages */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-pink-400">Digital Footprints</span>
              <Users className="w-3 h-3 text-pink-400" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`text-lg font-bold text-white transition-all duration-500 ${
                isAnimating ? 'text-pink-300' : 'text-white' // Change color during animation
              }`}>
                {formatNumber(visitorCount)} {/* Display formatted count */}
              </span>
              
              {/* Dynamic Cute Messages based on visitor count */}
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

        {/* Milestone Celebration Message (conditionally rendered) */}
        {visitorCount % 100 === 0 && visitorCount > 0 && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
            🎊 {visitorCount} Milestone! 🎊
          </div>
        )}

        {/* Decorative Border Animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-pink-500/20 animate-pulse"></div>
        
        {/* Decorative Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl -z-10 animate-pulse"></div>
      </div>

      {/* Thank You Message (conditionally rendered during animation) */}
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