import RecipeCard from './RecipeCard.jsx'

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found!</p> // Mensaje para cuando no hay recetas
  }
  
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  )
}

export default RecipeList
