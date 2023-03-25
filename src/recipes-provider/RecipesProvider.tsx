import React, { useEffect } from 'react';
import { ReactNode, useState } from 'react';
import { Recipe } from '../models/Recipe';
import { GetRecipes } from '../services/recipe.service';
import { RecipesContextType } from './RecipesContextType';
const RecipesContext = React.createContext<RecipesContextType>(null!);

const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    if (recipes.length === 0) {
      GetRecipes().then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.log(error);
        })
    }
  }, []);

  return <RecipesContext.Provider value={{ recipes, loading, error }}>{children}</RecipesContext.Provider>;
};

export const useRecipes = () => {
  return React.useContext(RecipesContext);
};

export default RecipesProvider;
