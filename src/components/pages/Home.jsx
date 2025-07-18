import { useState, useEffect } from 'react';
import recipes from '../data/recipes.json';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import RecipeList from '../components/RecipeList';

export default function Home() {
  const [mealType, setMealType] = useState('snack');
  const [weight, setWeight] = useState('light');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const filtered = recipes.filter(recipe => {
      const matchesType = recipe.mealType === mealType;
      const matchesWeight = recipe.weight === weight;
      const matchesIngredients = selectedIngredients.length === 0 || 
        recipe.ingredients.some(ing => 
          selectedIngredients.includes(ing.toLowerCase())
        );
      
      return matchesType && matchesWeight && matchesIngredients;
    });
    setFilteredRecipes(filtered);
  }, [mealType, weight, selectedIngredients]);

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Filters
          mealType={mealType}
          setMealType={setMealType}
          weight={weight}
          setWeight={setWeight}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <RecipeList recipes={filteredRecipes} />
      </div>
    </div>
  );
}