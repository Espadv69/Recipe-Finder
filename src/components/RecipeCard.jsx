import '../css/RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3 className="recipe-card">{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients.split(',').join(', ')}</p>
      <p>Steps: {recipe.steps}</p>
      <p>Difficulty: {recipe.difficulty}</p>
    </div>
  )
}

export default RecipeCard
