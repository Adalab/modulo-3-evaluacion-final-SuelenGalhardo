function FilterSpecies({ searchSpecies, ls, setSearchSpecies, handleFilter }) {
  const handleSearchSpecies = (eve) => {
    eve.preventDefault();
    //setSearchSpecies(eve.target.value);
    handleFilter('especies', eve.target.value);
    //ls.set('searchspecies', searchSpecies);
  };

  return (
    <label className='main__species' htmlFor='species'>
      Especies:
      <input
        className='main__input'
        type='text'
        placeholder='escribi la especie'
        id='especie'
        htmlFor='especie'
        value={searchSpecies}
        onChange={handleSearchSpecies}
      ></input>
    </label>
  );
}
export default FilterSpecies;
