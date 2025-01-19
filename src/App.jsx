import { useState } from 'react'

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './utils/localStorage.js'

import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'

export const App = () => {
  const [recipes, setRecipes] = useState(
    () => loadFromLocalStorage('recipes') || []
  )

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe]
    setRecipes(updatedRecipes)
    saveToLocalStorage('recipes', updatedRecipes)
  }

  return (
    <div>
      <h1>Recipe Finder</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  )
}
