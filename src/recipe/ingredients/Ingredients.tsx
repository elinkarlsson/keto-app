import React from 'react';
import { Ingredient } from '../../models/Ingredient';
import './Ingredients.css'

const Ingredients = ({ ingredients }: Props) => {

  return <div className='ingredients'>
    <h2 className='ingredients__heading'>Ingredienser</h2>
    {ingredients.map((ingredient) => (
      <div className='ingredients__box'>
        <p className='ingredients__text'>{`${ingredient.amount.quantity} ${ingredient.amount.unit} ${ingredient.name}`}</p>
      </div>
    ))}
  </div>
}

interface Props {
  ingredients: Ingredient[];
}

export default Ingredients;