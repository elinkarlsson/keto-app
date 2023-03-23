import { useEffect, useState } from 'react';
import { Recipe } from '../models/Recipe';
import { GetRecipes } from '../services/recipe.service';
import RecipeCard from './recipe-card/RecipeCard';
import './RecipesPage.css';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    GetRecipes().then((response) => {
      setRecipes(response.data);
    })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return <div className='page'>
    <div className='recipes-gallery'>
      {recipes.map(recipe => {
        return (
          <RecipeCard key={recipe.name} recipe={recipe} />
        )
      })
      }
    </div>
  </div>
}

export default RecipesPage;