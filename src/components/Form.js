import '../styles/layout/form.scss';

function Form({ handleSearchName, SearchName }) {
  const NotFound = true;
  return (
    <form className='main__form'>
      <h1 className='main__h1'>Filtrar por...:</h1>
      <label className='main__label' htmlFor='name'>
        {' '}
        Nombre:{' '}
      </label>
      <input
        className='main__input'
        type='text'
        placeholder='escribi el nombre personaje'
        id='name'
        htmlFor='name'
        value={SearchName}
        onChange={handleSearchName}
      ></input>
      <label className='main__label' htmlFor='name'>
        {' '}
        Especie:{' '}
      </label>
      <input
        className='main__input'
        type='text'
        placeholder='escribi la especie'
        id='especie'
        htmlFor='especie'
      ></input>
      {handleSearchName && NotFound && (
        <p className='main__notFound'>
          No hay ningún personaje que coincida con el texto{' '}
          <span className='notFound-'>{handleSearchName}</span>
        </p>
      )}
    </form>
  );
}
export default Form;
