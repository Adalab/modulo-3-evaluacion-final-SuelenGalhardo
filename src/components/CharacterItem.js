import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons';
//import { faAlienMonster } from '@fortawesome/free-solid-svg-icons';

function CharacterItem({ eachElement }) {
  const getSpecies = () => {
    if (eachElement.species === 'Human') {
      return <FontAwesomeIcon icon={faUser} />;
    } else if (eachElement.species === 'Alien') {
      return <FontAwesomeIcon icon={faSpaghettiMonsterFlying} />;
    } else {
      return null;
    }
  };
  return (
    <>
      <Link to={'/character/' + eachElement.id} className='card__link'>
        <img className='card__img' src={eachElement.image} alt={eachElement.name} />
        <h3 className='card__name'>{eachElement.name}</h3>
        <p className='card__specie'>{getSpecies()}</p>
      </Link>
    </>
  );
}

export default CharacterItem;
