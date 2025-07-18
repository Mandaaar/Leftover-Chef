// components/RecipeList/index.jsx
import { ChefHat, Star } from 'lucide-react';
import RecipeCard from '../RecipeCard';

const RecipeList = ({ 
  filteredRecipes, 
  isLoading, 
  animateResults, 
  onCookNow, 
  emojiMap 
}) => {
  return (
    <div className="mb-8">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
          {isLoading ? 'Cooking up something special...' : `Found ${filteredRecipes.length} magical recipes`}
        </h3>
        {!isLoading && filteredRecipes.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="hidden sm:inline">Sorted by rating</span>
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ChefHat className="w-8 h-8 text-violet-600 animate-pulse" />
            </div>
          </div>
        </div>
      ) : filteredRecipes.length === 0 ? (
        // No Results State
        <div className="text-center py-16">
          <div className="text-4xl sm:text-6xl mb-4">🥲</div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No recipes found</h4>
          <p className="text-gray-600 px-4">Try adding more ingredients or changing your filters!</p>
        </div>
      ) : (
        // Recipe Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              index={index}
              onCookNow={onCookNow}
              animateResults={animateResults}
              emojiMap={emojiMap}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;