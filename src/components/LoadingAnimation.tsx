import AbigaelLogo from '../assets/abigael_logo.png';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo Container */}
        {/* This div now explicitly defines the size for the logo and its rings */}
        <div className="relative mb-8 w-40 h-40 mx-auto flex items-center justify-center"> 
          {/* Removed the wrapping div with blue background and padding */}
          <img 
              src={AbigaelLogo} 
              alt="Abigael Kalunde Sila Logo" 
              className="w-full h-full rounded-full object-cover animate-pulse" // Logo fills its parent, is round, and pulses
            />
          
          {/* Rotating Rings - Now perfectly circular and relative to the new container size */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-2 border-purple-500/30 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Abigael Kalunde Sila
          </h2>
          <p className="text-gray-400 animate-pulse">
            Initializing portfolio...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Circuit Animation */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;