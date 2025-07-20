// components/Footer/index.jsx - SWEET DESSERT VERSION
import { ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Single Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/55 via-purple-900/30 to-orange-900/85"></div>

     

      {/* Main Footer Content */}
      <div className="relative z-10 text-white py-12 sm:py-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center">
            {/* Header with Sweet Twist */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 text-orange-300 animate-bounce" />
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                Leftover Chef
              </h3>
              <div className="text-2xl animate-pulse">🍮</div>
            </div>

            {/* Sweet Description */}
            <p className="text-orange-100 mb-8 max-w-3xl mx-auto text-base sm:text-lg font-medium">
              Transforming leftovers into culinary masterpieces, one recipe at a time.
              <br className="hidden sm:block" />
              <span className="text-pink-200 italic">"Your family thinks you're a chef now. Don't tell them it was me! 🤫🍽️"</span>
            </p>

            {/* Stats with Sweet Icons */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-300 mb-2">30+</div>
                <div className="text-xs sm:text-sm text-orange-200 flex items-center justify-center gap-1">
                  🍽️ Recipes
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">50k+</div>
                <div className="text-xs sm:text-sm text-pink-200 flex items-center justify-center gap-1">
                  👨‍🍳 Happy Cooks
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-2">Zero</div>
                <div className="text-xs sm:text-sm text-yellow-200 flex items-center justify-center gap-1">
                  🌱 Food Waste
                </div>
              </div>
            </div>

            {/* Copyright with Sweet Touch */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-purple-200 text-sm">
                © 2025 Leftover Chef. 
                Made with ❤️ and a touch of Indian sweetness! 🍮
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Sugar Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-0"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-orange-300 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-3000"></div>
      </div>
    </footer>
  );
};

export default Footer;
