// components/Navbar/index.jsx - UPDATE THIS
import { ChefHat, Home, Search, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-200/50 shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* rest of navbar content stays the same */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <ChefHat className="w-8 h-8 text-violet-600 animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Leftover Chef
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-gray-600">
              <Home className="w-5 h-5 hover:text-violet-600 cursor-pointer transition-colors" />
              <Search className="w-5 h-5 hover:text-violet-600 cursor-pointer transition-colors" />
              <Heart className="w-5 h-5 hover:text-violet-600 cursor-pointer transition-colors" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <span className="text-white font-semibold">U</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;