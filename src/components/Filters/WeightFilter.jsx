// components/Filters/WeightFilter.jsx - TRANSPARENT VERSION
import { Users } from 'lucide-react';

const WeightFilter = ({ weight, setWeight }) => {
  const weights = [
    { value: 'light', label: '🥗 Light' },
    { value: 'heavy', label: '🍖 Heavy' }
  ];

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <Users className="inline w-4 h-4 mr-1" />
        Appetite Level
      </label>
      <div className="grid grid-cols-2 gap-2">
        {weights.map((w) => (
          <button
            key={w.value}
            onClick={() => setWeight(w.value)}
            className={`p-2 sm:p-3 rounded-xl font-medium transition-all transform hover:scale-105 text-sm sm:text-base border-2 ${
              weight === w.value
                ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg border-green-400'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-green-300'
            }`}
          >
            {w.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeightFilter;