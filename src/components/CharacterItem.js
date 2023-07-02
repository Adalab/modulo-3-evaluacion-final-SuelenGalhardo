function CharacterItem({ eachElement }) {
  return (
    <>
      <img className='card__img' src={eachElement.image} alt={eachElement.name} />
      <h3 className='card__title'>t{eachElement.name}</h3>
      <p className='card__List'>{eachElement.species}</p>
    </>
  );
}

export default CharacterItem;
