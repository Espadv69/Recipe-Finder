import '../css/RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card-container">
      <h3 className="recipe-card-name">{recipe.name}</h3>
      <p className="recipe-card-ingredients">
        Ingredients: <span>{recipe.ingredients.split(',').join(', ')}</span>
      </p>
      <p className="recipe-card-steps">
        Steps: <span>{recipe.steps}</span>
      </p>
      <p className="recipe-card-difficulty">
        Difficulty: <span>{recipe.difficulty}</span>
      </p>
    </div>
  )
}

export default RecipeCard
