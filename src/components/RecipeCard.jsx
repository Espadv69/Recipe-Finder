export const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Ingredients: {recipe.ingredients.split(',').join(', ')}</p>
    </div>
  )
}
