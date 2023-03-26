import Card from '../../components/card/Card';
import { Recipe } from '../../models/Recipe';

const RecipeCard = ({ recipe }: Props) => {

  return <Card heading={recipe.name} body={recipe.ingress} imageUrl={recipe.imageUrl} link={`/recept/${recipe.id}`}></Card>
}

interface Props {
  recipe: Recipe;
}

export default RecipeCard;