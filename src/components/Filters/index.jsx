// components/Filters/index.jsx - WITH MATAR PANEER BACKGROUND
import { Utensils, Sparkles } from 'lucide-react';
import MealTypeFilter from './MealTypeFilter';
import WeightFilter from './WeightFilter';
import IngredientsPicker from './IngredientsPicker';
import CustomInput from './CustomInput';

const Filters = ({ 
  mealType, 
  setMealType, 
  weight, 
  setWeight, 
  selectedIngredients, 
  onIngredientToggle,
  customInput,
  setCustomInput,
  combinedIngredients,
  showFilters,
  setShowFilters,
  allIngredients,
  emojiMap
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8 border border-orange-200">
      {/* Beautiful Matar Paneer Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-orange-50/20 to-green-50/80"></div>
      
      {/* Main Content */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Header with Enhanced Styling */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-full">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              What's Cooking Today?
            </h3>
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-green-400 rounded-lg blur opacity-20 -z-10"></div>
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden px-4 py-2 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-full hover:from-orange-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg text-sm font-medium"
          >
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>

        {/* Filter Content with Enhanced Background */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
          {/* Meal Type & Weight Selectors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-[2px] rounded-2xl p-4 border border-white/30 shadow-lg">
              <MealTypeFilter mealType={mealType} setMealType={setMealType} />
            </div>
            <div className="bg-white/20 backdrop-blur-[2px] rounded-2xl p-4 border border-white/30 shadow-lg">
              <WeightFilter weight={weight} setWeight={setWeight} />
            </div>
          </div>

          {/* Ingredients Selection with Enhanced Background */}
          <div className="bg-white/20 backdrop-blur-[2px] rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg mb-6">
            <IngredientsPicker 
              selectedIngredients={selectedIngredients}
              onIngredientToggle={onIngredientToggle}
              allIngredients={allIngredients}
              emojiMap={emojiMap}
            />
          </div>

          {/* Custom Input with Enhanced Styling */}
          <div className="bg-white/20 backdrop-blur-[2px] rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg mb-6">
            <CustomInput 
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
          </div>

          {/* Selected Ingredients Display with Matar Paneer Theme */}
          {combinedIngredients.length > 0 && (
            <div className="relative overflow-hidden rounded-2xl p-4 sm:p-6 border border-orange-300 shadow-xl">
              {/* Mini background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-green-50 to-orange-50 opacity-80"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-full">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  Your Magical Ingredients ({combinedIngredients.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {combinedIngredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg border border-orange-200 hover:shadow-xl transition-all"
                    >
                      {emojiMap[ing] || '🍽️'}
                      <span className="truncate max-w-20">{ing}</span>
                      <button
                        onClick={() => onIngredientToggle(ing)}
                        className="ml-1 text-red-500 hover:text-red-700 flex-shrink-0 hover:bg-red-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-green-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Filters;