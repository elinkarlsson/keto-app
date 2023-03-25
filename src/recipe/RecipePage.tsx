import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import { useRecipes } from '../recipes-provider/RecipesProvider';
import Ingredients from './ingredients/Ingredients';
import Instructions from './instructions/Instructions';
import './RecipePage.css';

const RecipePage = () => {
  const { id } = useParams();
  const recipesState = useRecipes();
  const recipe = recipesState.recipes.find(x => x.id === id);

  return <div className='page'>
    {recipesState.loading ?
      <Spinner></Spinner> :
      <>{!recipe || recipesState.error ?
        <p>{recipesState.error}</p> :
        <div className='recipe'>
          <div>
            <h1 className='recipe__name'>{recipe.name}</h1>
            <p className='recipe__ingress'>{recipe.ingress}</p>
            <div className='recipe__ingredients'>
              <Ingredients ingredients={recipe.ingredients} ></Ingredients>
            </div>
            <div className='recipe__instructions'>
              <Instructions steps={recipe.steps} ></Instructions>
            </div>
          </div>
          <div>
            <img className='recipe__image' src={recipe.imageUrl} alt="Lamp" width="32" height="32" />
          </div>
        </div>}</>
    }
  </div>
}

export default RecipePage;