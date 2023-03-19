import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const linkIsActive = (link: string) => {
    return location.pathname.includes(link) ? true : false;
  }

  return (
    <ul className='nav'>
      <li className='nav__item'><a className='nav__item__link nav__brand' href='/'>Keto Inspo</a></li>
      <li className='nav__item'><a className={`nav__item__link ${linkIsActive('recept') ? 'nav__item__link--active' : ''}`} href="/recept">Recept</a></li>
      <li className='nav__item'><a className={`nav__item__link ${linkIsActive('artiklar') ? 'nav__item__link--active' : ''}`} href="/artiklar">Artiklar</a></li>
      <li className='nav__item'><a className={`nav__item__link ${linkIsActive('sok') ? 'nav__item__link--active' : ''}`} href="/sok">Sök</a></li>
    </ul>
  )
}

export default Navigation;