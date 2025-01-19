import { RecipeCard } from './RecipeCard.jsx'

export const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  )
}
