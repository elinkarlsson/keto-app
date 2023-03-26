import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ heading, body, imageUrl, link }: Props) => {
  return <div className='card'>
    <Link className='card__link' to={`${link}`}>
      <div>
        <img className='card__image' src={imageUrl} alt="Lamp" width="32" height="32" />
      </div>
      <div>
        <p className='card__name'>{heading}</p>
        <p className='card__ingress'>{body}</p>
      </div>
    </Link>
  </div>
}

interface Props {
  heading: string;
  body: string;
  imageUrl: string;
  link: string;
}

export default Card;