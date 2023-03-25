import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Recipe } from '../models/Recipe';
import { GetRecipes } from '../services/recipe.service';
import Ingredients from './ingredients/Ingredients';
import Instructions from './instructions/Instructions';
import './RecipePage.css';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    GetRecipes().then((response) => {
      setRecipe(response.data.find(x => x.id === id));
      setLoading(false);
    })
      .catch((errorMessage) => {
        setError(errorMessage);
        setLoading(false);
        console.log(errorMessage);
      })
  }, []);

  return <div className='page'>
    {loading ?
      <Spinner></Spinner> :
      <>{!recipe || error ?
        <p>{error}</p> :
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