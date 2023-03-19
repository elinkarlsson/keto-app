import React from 'react';
import { Ingredient } from '../models/Ingredient';
import { Recipe } from '../models/Recipe';
import Ingredients from './ingredients/Ingredients';
import Instructions from './instructions/Instructions';
import './RecipePage.css';

const RecipePage = () => {
  const recipe = {
    name: 'Hamburgare i salladsblad', ingress: 'Mumsiga hamburgare i salladsblad med goda tillbehör, perfekt på grillen', imageUrl: 'https://eu-central-1.linodeobjects.com/tasteline/2015/08/notfarsburgare_i_salladswrap_med_bonsallad-800x800.jpg',
    ingredients: [{name: 'Vetemjöl', amount: {quantity: 1, unit: 'dl'}}, {name: 'Tomat', amount: {quantity: 1, unit: 'st'}}, {name: 'Salladsblad', amount: {quantity: 1, unit: 'st'}}] as Ingredient[], steps: ['Bla bla bla', 'aksdxkld clks dlk lsd lks l', 'sdjdkjdjsdks dk dskd sk dskd sk']
  } as Recipe;

  return <div className='page'>
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
    </div>
  </div>
}

export default RecipePage;