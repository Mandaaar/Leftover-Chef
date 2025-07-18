// components/RecipeCard/index.jsx
import { Clock, TrendingUp, Star, Heart } from 'lucide-react';

const RecipeCard = ({ recipe, index, onCookNow, animateResults, emojiMap }) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
        animateResults ? 'animate-pulse' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {recipe.image}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{recipe.rating}</span>
            </div>
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors">
          {recipe.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium"
            >
              {emojiMap[ingredient] || '🍽️'}
              {ingredient}
            </span>
          ))}
          {recipe.ingredients.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{recipe.ingredients.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipe.cookTime}
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {recipe.difficulty}
            </div>
          </div>
          <button 
            onClick={() => onCookNow(recipe)}
            className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full text-sm font-medium hover:from-violet-600 hover:to-purple-600 transition-all transform hover:scale-105"
          >
            Cook Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;