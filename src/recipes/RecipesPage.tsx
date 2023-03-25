import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { Recipe } from '../models/Recipe';
import { GetRecipes } from '../services/recipe.service';
import RecipeCard from './recipe-card/RecipeCard';
import './RecipesPage.css';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    GetRecipes().then((response) => {
      setRecipes(response.data);
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
      <>{error ?
        <p>{error}</p> :
        <div className='recipes-gallery'>
          {recipes.map(recipe => {
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