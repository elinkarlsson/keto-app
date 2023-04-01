import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { Recipe } from '../models/Recipe';
import { useRecipes } from '../recipes-provider/RecipesProvider';
import RecipeCard from '../recipes/recipe-card/RecipeCard';
import './SearchPage.css';

const SearchPage = () => {
  const recipesState = useRecipes();
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(filterBySearchTerm([...recipesState.recipes], searchTerm))
  }, [searchTerm, recipesState.recipes]);

  const filterBySearchTerm = (recipes: Recipe[], searchTerm: string) => {
    return recipes.filter(x => 
      x.name.toLowerCase().includes(searchTerm) ||
      x.ingress.toLowerCase().includes(searchTerm) ||
      x.ingredients.some(y => y.name.includes(searchTerm)) ||
      x.steps.some(y => y.includes(searchTerm)) ||
      x.difficulty?.includes(searchTerm))
  }

  return <div className='page'>
    {recipesState.loading ?
      <Spinner></Spinner> :
      <>{recipesState.error ?
        <p>{recipesState.error}</p> :
        <div>
          <div className="search__input">
            <label>Sök</label>
            <input className='search__input-field' placeholder='Sök...' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
          </div>
          <div className='gallery'>
            {recipes.map(recipe => {
              return (
                <RecipeCard key={recipe.name} recipe={recipe} />
              )
            })
            }
          </div>
        </div>
      }</>
    }
  </div>
}

export default SearchPage;