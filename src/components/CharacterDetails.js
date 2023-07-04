import { Link } from 'react-router-dom';
import '../styles/layout/characterDetails.scss';
function characterDetails({ characterData }) {
  /*
const Status = (status) => {
    if (status.toLowerCase() === 'alive') {
      return 'Sí';
    } else if (status.toLowerCase() === 'dead') {
      return 'No';
    } else {
      return 'No se sabe';
    }

    ****  va abajo <p className='cardContainer__section--status'>
            ¿está vivo? {getStatus(characterData.status)}
  };

*/
  if (characterData) {
    console.log(characterData);
    return (
      <>
        <div className='detail'>
          <section className='detail__section'>
            <h3 className='detail__title'>Detalle de un personaje:</h3>
            <img className='detail__img' src={characterData.image} alt=''></img>
            <div className='detail__container'>
              <h3 className='detail__name'> Name: {characterData.name}</h3>
              <p className='detail__species'> Especie:{characterData.species}</p>
              <p className='detail__status'>Estado: {characterData.status}</p>
              <p className='detail__origen'>Origen:{characterData.origin}</p>
              <p className='detail__episodes'>Episodios:{characterData.episode.length}</p>
            </div>
            <Link to='/' className='detail__link'>
              {' '}
              Volver
            </Link>
          </section>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <p className='detail__error'>Lo sentimos, este contacto no existe!</p>
        <Link to='/' className='detail__link'>
          Volver
        </Link>
      </div>
    );
  }
}

export default characterDetails;
