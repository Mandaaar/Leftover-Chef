// components/Filters/CustomInput.jsx
import { Search } from 'lucide-react';

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        ✨ Or Add Custom Ingredients
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 pl-12 border-2 border-gray-400 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all text-black placeholder-gray-700"
          placeholder="tomato, onion, cheese..."
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
};

export default CustomInput;
