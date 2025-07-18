import { useState, useEffect } from 'react';
import recipes from './data/recipes.json';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import RecipeList from './components/RecipeList';
import RecipeModal from './components/RecipeModal';
import Footer from './components/Footer';

// Constants directly in App.jsx (to avoid import issues)
const allIngredients = [
  "potato", "onion", "tomato", "rice", "butter", "cheese", "capsicum", "peas",
  "pav", "bread", "maggi", "curd", "chili", "paneer", "garlic", "ginger", "egg",
  "spinach", "carrot", "beans", "corn", "coriander", "mint", "chicken",
  "mushroom", "soy sauce", "green chili", "lemon", "yogurt", "cucumber"
];

const emojiMap = {
  potato: "🥔", onion: "🧅", tomato: "🍅", rice: "🍚", butter: "🧈", cheese: "🧀",
  capsicum: "🫑", peas: "🟢", pav: "🍞", bread: "🍞", maggi: "🍜", curd: "🥛",
  chili: "🌶️", paneer: "🧀", garlic: "🧄", ginger: "🫚", egg: "🥚", spinach: "🥬",
  carrot: "🥕", beans: "🫘", corn: "🌽", coriander: "🌿", mint: "🌱", chicken: "🍗",
  beef: "🥩", mushroom: "🍄", "soy sauce": "🥫", "green chili": "🌶️",
  lemon: "🍋", yogurt: "🥛", cucumber: "🥒"
};

function App() {
  // ==================== STATE MANAGEMENT ====================
  const [mealType, setMealType] = useState('snack');
  const [weight, setWeight] = useState('light');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [animateResults, setAnimateResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // ==================== HANDLERS ====================
  const handleIngredientToggle = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleCookNow = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAnimateResults(true);
      setTimeout(() => setAnimateResults(false), 600);
    }, 1000);
  };

  // ==================== COMPUTED VALUES ====================
  const combinedIngredients = [
    ...selectedIngredients,
    ...customInput
      .split(',')
      .map((i) => i.trim().toLowerCase())
      .filter(Boolean),
  ];

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.mealType === mealType &&
      recipe.weight === weight &&
      recipe.ingredients.some((ing) => combinedIngredients.includes(ing.toLowerCase()))
  );

  // ==================== EFFECTS ====================
  useEffect(() => {
    handleSearch();
  }, [mealType, weight, selectedIngredients, customInput]);

  // ==================== RENDER ====================
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={closeRecipeModal}
          emojiMap={emojiMap}
        />
      )}

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
        {/* Filters */}
        <Filters 
          mealType={mealType}
          setMealType={setMealType}
          weight={weight}
          setWeight={setWeight}
          selectedIngredients={selectedIngredients}
          onIngredientToggle={handleIngredientToggle}
          customInput={customInput}
          setCustomInput={setCustomInput}
          combinedIngredients={combinedIngredients}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          allIngredients={allIngredients}
          emojiMap={emojiMap}
        />

        {/* Recipe Results */}
        <RecipeList 
          filteredRecipes={filteredRecipes}
          isLoading={isLoading}
          animateResults={animateResults}
          onCookNow={handleCookNow}
          emojiMap={emojiMap}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;