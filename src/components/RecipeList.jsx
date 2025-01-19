import RecipeCard from './RecipeCard.jsx'

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  )
}

export default RecipeList
