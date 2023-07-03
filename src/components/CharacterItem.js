//import { Link } from 'react-router-dom';

function CharacterItem({ eachElement }) {
  return (
    <>
      <img className='card__img' src={eachElement.image} alt={eachElement.name} />
      <h3 className='card__name'>{eachElement.name}</h3>
      <p className='card__specie'>{eachElement.species}</p>
    </>
  );
}

export default CharacterItem;
