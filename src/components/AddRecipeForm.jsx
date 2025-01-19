import { useState } from 'react'

import '../css/RecipeForm.css'

const AddRecipeForm = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    steps: '',
    difficulty: 'Easy',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddRecipe(recipe)
    setRecipe({ name: '', ingredients: '', steps: '', difficulty: 'Easy' })
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        placeholder="Recipe Name"
        required
        className="recipe-form-input"
      />
      <textarea
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
        placeholder="Ingredients (comma-separated)"
        required
        className="recipe-form-textarea"
      ></textarea>
      <textarea
        value={recipe.steps}
        onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
        placeholder="Steps to make the recipe"
        required
        className="recipe-form-textarea"
      ></textarea>
      <select
        value={recipe.difficulty}
        onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value })}
        className="recipe-form-select"
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <button className="recipe-form-submit" type="submit">
        Add Recipe
      </button>
    </form>
  )
}

export default AddRecipeForm
