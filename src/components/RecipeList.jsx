import RecipeCard from './RecipeCard.jsx'

const RecipeList = ({ recipes, onDeleteRecipe }) => {
  if (!recipes || recipes.length === 0) {
    return <p style={{ textAlign: 'center' }}>No recipes found!</p> // Mensaje para cuando no hay recetas
  }

  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          onDeleteRecipe={onDeleteRecipe}
        />
      ))}
    </div>
  )
}

export default RecipeList
