import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const linkIsActive = (link: string) => {
    return location.pathname.includes(link) ? true : false;
  }

  return (
    <ul className='nav'>
      <li className='nav__item'><Link className='nav__item__link nav__brand'  to='/'>Keto Inspo</Link></li>
      <li className='nav__item'><Link className={`nav__item__link ${linkIsActive('recept') ? 'nav__item__link--active' : ''}`} to="/recept">Recept</Link></li>
      <li className='nav__item'><Link className={`nav__item__link ${linkIsActive('artiklar') ? 'nav__item__link--active' : ''}`} to="/artiklar">Artiklar</Link></li>
      <li className='nav__item'><Link className={`nav__item__link ${linkIsActive('sok') ? 'nav__item__link--active' : ''}`} to="/sok">Sök</Link></li>
    </ul>
  )
}

export default Navigation;