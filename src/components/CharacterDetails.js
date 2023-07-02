//import { Link } from 'react-router-dom';

function characterDetails({ characterData }) {
  return (
    <>
      <div>
        <section className='detail'>
          <img className='detail__img' src={characterData.image} alt=''></img>
          <div>
            <h3 className='detail__name'> Name: {characterData.name}</h3>
            <p className='detail__species'> Especie:{characterData.species}</p>
            <p className='detail__status'>Estado: {characterData.status}</p>
            <p className='detail__episodes'>Episodios:{characterData.episodes}</p>
          </div>
        </section>
      </div>
      <link key={characterData.id} to={'/'}>
        <button className='reset'>Volver</button>
      </link>
    </>
  );
}
export default characterDetails;
