import React from 'react';
import { Recipe } from '../../models/Recipe';
import './RecipeCard.css';

const RecipeCard = ({ recipe }: Props) => {
  return <div className='recipe-card'>
    <a className='recipe-card__link' href={`/recept/${recipe.id}`}>
      <div>
        <img className='recipe-card__image' src={recipe.imageUrl} alt="Lamp" width="32" height="32" />
      </div>
      <div>
        <p className='recipe-card__name'>{recipe.name}</p>
        <p className='recipe-card__ingress'>{recipe.ingress}</p>
      </div>
    </a>
  </div>
}

interface Props {
  recipe: Recipe;
}

export default RecipeCard;