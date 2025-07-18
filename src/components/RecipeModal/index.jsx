// components/RecipeModal/index.jsx
import { Clock, TrendingUp, Star, Utensils, ChefHat, X, ArrowLeft } from 'lucide-react';

const RecipeModal = ({ recipe, onClose, emojiMap }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl max-h-[90vh] w-full overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                {recipe.image} {recipe.name}
              </h2>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          {/* Recipe Info */}
          <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipe.cookTime}
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {recipe.difficulty}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              {recipe.rating}
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-violet-600" />
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {recipe.ingredients.map((ingredient, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                >
                  {emojiMap[ingredient] || '🍽️'}
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Instructions Section */}
          {recipe.instructions && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-violet-600" />
                Instructions
              </h3>
              <div className="space-y-3">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;