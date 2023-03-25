import { Recipe } from '../models/Recipe';

export interface RecipesContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}
