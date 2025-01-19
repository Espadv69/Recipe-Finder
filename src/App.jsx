import { useState } from 'react'

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './utils/localStorage.js'

import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'

export const App = () => {
  const [recipes, setRecipes] = useState([])

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }

  return (
    <div>
      <h1>Recipe Finder</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  )
}
