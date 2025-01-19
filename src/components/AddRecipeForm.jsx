import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        placeholder="Recipe Name"
        required
      />
      <textarea
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
        placeholder="Ingredients (comma-separated)"
      ></textarea>
      <textarea
        value={recipe.steps}
        onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
        placeholder="Steps to make the recipe"
      ></textarea>
      <select
        value={recipe.difficulty}
        onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value })}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
