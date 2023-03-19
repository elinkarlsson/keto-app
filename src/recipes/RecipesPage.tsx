import React from 'react';
import { Recipe } from '../models/Recipe';
import RecipeCard from './recipe-card/RecipeCard';
import './RecipesPage.css';

const RecipesPage = () => {
  const recipes = [
    { name: 'Hamburgare i salladsblad', ingress: 'Mumsiga hamburgare i salladsblad med goda tillbehör, perfekt på grillen', imageUrl: 'https://eu-central-1.linodeobjects.com/tasteline/2015/08/notfarsburgare_i_salladswrap_med_bonsallad-800x800.jpg' },
    { name: 'Kycklinggryta', ingress: 'Enkel kycklinggryta med thailändska smaker.', imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_175344/cf_259/kycklinggryta_med_dragon_och_apple.jpg' },
    { name: 'Biffsallad', ingress: 'Fantastisk god biffsallad med lime och chili.', imageUrl: 'https://eu-central-1.linodeobjects.com/tasteline/2020/04/biffsallad-med-chimichurridressad-potatis-foto-nurlan-1080.jpg' },
    { name: 'Grekisk sallad', ingress: 'Enkel och fräsh grekisk sallad.', imageUrl: 'https://eu-central-1.linodeobjects.com/tasteline/2019/05/grekisk-sallad-foto-nuran-emir-mathem.jpg' },
    { name: 'Tonfisksallad', ingress: 'Snabb och enkel tonsfisksallad.', imageUrl: 'https://eu-central-1.linodeobjects.com/tasteline/2017/05/tonfisksallad-med-fetaost-och-rostade-solrosfron_1-2048x2048.jpg' },
    { name: 'Kålpudding', ingress: 'Mustig kålpudding som sköter sig själv i ugnen.', imageUrl: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_143436/cf_259/kalpudding_(grundrecept).jpg' }
  ] as Recipe[];

  return <div className='page'>
    <div className='recipes-gallery'>
      {recipes.map(recipe => {
        return (
          <RecipeCard key={recipe.name} recipe={recipe} />
        )
      })
      }
    </div>
  </div>
}

export default RecipesPage;