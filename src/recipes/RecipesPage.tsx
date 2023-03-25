
import Spinner from '../components/Spinner';
import { useRecipes } from '../recipes-provider/RecipesProvider';
import RecipeCard from './recipe-card/RecipeCard';
import './RecipesPage.css';

const RecipesPage = () => {
  const recipesState = useRecipes();

  return <div className='page'>
    {recipesState.loading ?
      <Spinner></Spinner> :
      <>{recipesState.error ?
        <p>{recipesState.error}</p> :
        <div className='recipes-gallery'>
          {recipesState.recipes.map(recipe => {
            return (
              <RecipeCard key={recipe.name} recipe={recipe} />
            )
          })
          }
        </div>
      }</>
    }
  </div >
}

export default RecipesPage;