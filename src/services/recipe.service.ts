import axios, { AxiosResponse } from 'axios';
import { Recipe } from '../models/Recipe';

var client = axios.create({
  baseURL: 'https://keto-recipes-api-lq5hmfk24q-lz.a.run.app',
});

export const GetRecipes = async (): Promise<AxiosResponse<Recipe[]>> => {
  try {
    return await client.get(`/recipes`, {
    });
  } catch (error: any) {
    throw new Error(error?.message ?? 'Something went wrong while fetching recipes.');
  }
};
