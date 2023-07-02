//import React from 'react';
//import { link } from 'react-router-dom';
import CharacterItem from './CharacterItem';

function CharacterList({ characterList }) {
  const htmlLi = characterList.map((eachElement) => (
    <li key={eachElement.id} className='character__item'>
      <CharacterItem eachElement={eachElement} />
    </li>
  ));

  return <ul className='character'> {htmlLi}</ul>;
}

export default CharacterList;
