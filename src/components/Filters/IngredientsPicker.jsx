// components/Filters/IngredientsPicker.jsx - TRANSPARENT VERSION
const IngredientsPicker = ({ selectedIngredients, onIngredientToggle, allIngredients, emojiMap }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        🥘 Pick Your Ingredients
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 sm:gap-3">
        {allIngredients.map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => onIngredientToggle(ingredient)}
            className={`p-2 sm:p-3 rounded-xl text-xs sm:text-sm font-medium transition-all transform hover:scale-105 border-2 ${
              selectedIngredients.includes(ingredient)
                ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg border-pink-400'
                : 'bg-white/70 backdrop-blur-sm text-white hover:bg-white/90 border-gray-200 hover:border-orange-300'
            }`}
          >
            <div className="text-sm sm:text-lg mb-1">{emojiMap[ingredient] || '🍽️'}</div>
            <div className="truncate text-xs sm:text-sm">{ingredient}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IngredientsPicker;