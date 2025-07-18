// components/Hero/index.jsx - TEMPTING VERSION
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }}
      ></div>
      
      {/* Lighter Dark Overlay for Better Image Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-orange-900/40"></div>
      
      {/* Main Content */}
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-16 z-10">
        <div className="text-center">
          {/* Animated Icons */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center gap-2 text-4xl sm:text-6xl animate-pulse">
                🍳✨🥘
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-spin" />
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 blur-xl opacity-30 text-4xl sm:text-6xl">
                🍳✨🥘
              </div>
            </div>
          </div>
          
          {/* Main Heading with Glow Effect */}
          <div className="relative mb-4 sm:mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-2 drop-shadow-2xl animate-fade-in">
              Turn Your 
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse font-extrabold">
                Leftovers
              </span>
              Into <span className="text-yellow-400">Magic</span>
            </h1>
            {/* Glow effect behind text */}
            <div className="absolute inset-0 text-4xl sm:text-5xl lg:text-7xl font-black text-orange-400 blur-2xl opacity-30 -z-10">
              Turn Your Leftovers Into Magic
            </div>
          </div>
          
          {/* Subtitle with better contrast */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto px-4 font-medium drop-shadow-lg">
            Discover <span className="text-yellow-300 font-bold">mouth-watering recipes</span> with ingredients you already have. 
            <br className="hidden sm:block" />
            <span className="text-orange-300">No food waste, just delicious possibilities!</span>
          </p>
          
          {/* Hilarious Tagline */}
          <div className="mb-8">
            <p className="text-base sm:text-lg lg:text-xl text-white/90 italic font-medium px-4 py-3 bg-black/30 rounded-2xl backdrop-blur-sm border border-white/20 max-w-2xl mx-auto shadow-2xl">
              <span className="text-pink-300">"We can't cook like mom, but we can definitely</span>
              <span className="text-orange-400 font-bold"> burn like dad!</span>
              <span className="text-pink-300">"</span>
              <span className="ml-2 text-2xl">🔥👨‍🍳</span>
            </p>
          </div>
          
          {/* Call-to-Action Button */}
          <div className="flex justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <span className="flex items-center gap-2">
                🍳 Start Cooking Now
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
            </button>
          </div>
          
          {/* Stats with Food Icons */}
          <div className="flex justify-center gap-8 sm:gap-12 mt-12 text-white">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">30+</div>
              <div className="text-sm text-gray-200 flex items-center gap-1">
                🍽️ Recipes
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">50k+</div>
              <div className="text-sm text-gray-200 flex items-center gap-1">
                👨‍🍳 Happy Cooks
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">Zero</div>
              <div className="text-sm text-gray-200 flex items-center gap-1">
                🌱 Food Waste
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
