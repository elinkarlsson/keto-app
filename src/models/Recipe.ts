import { Ingredient } from "./Ingredient";

export interface Recipe {
  id: string;
  name: string;
  ingress: string;
  imageUrl: string;
  timeInMinutes: number;
  difficulty: string;
  steps: string[];
  ingredients: Ingredient[];
}