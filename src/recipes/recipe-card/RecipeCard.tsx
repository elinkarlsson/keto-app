import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../models/Recipe';
import './RecipeCard.css';

const RecipeCard = ({ recipe }: Props) => {
  return <div className='recipe-card'>
    <Link className='recipe-card__link' to={`/recept/${recipe.id}`}>
      <div>
        <img className='recipe-card__image' src={recipe.imageUrl} alt="Lamp" width="32" height="32" />
      </div>
      <div>
        <p className='recipe-card__name'>{recipe.name}</p>
        <p className='recipe-card__ingress'>{recipe.ingress}</p>
      </div>
    </Link>
  </div>
}

interface Props {
  recipe: Recipe;
}

export default RecipeCard;