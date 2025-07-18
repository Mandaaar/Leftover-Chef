// components/Filters/MealTypeFilter.jsx - TRANSPARENT VERSION
import { Coffee } from 'lucide-react';

const MealTypeFilter = ({ mealType, setMealType }) => {
  const mealTypes = [
    { value: 'snack', label: 'Snack', emoji: '🍿' },
    { value: 'lunch', label: 'Lunch', emoji: '🍽️' },
    { value: 'dinner', label: 'Dinner', emoji: '🌙' }
  ];

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <Coffee className="inline w-4 h-4 mr-1" />
        Meal Type
      </label>
      <div className="grid grid-cols-3 gap-2">
        {mealTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setMealType(type.value)}
            className={`p-2 sm:p-3 rounded-xl font-medium transition-all transform hover:scale-105 text-sm sm:text-base border-2 ${
              mealType === type.value
                ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg border-orange-400'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-orange-300'
            }`}
          >
            <div className="text-lg sm:text-xl mb-1">{type.emoji}</div>
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealTypeFilter;