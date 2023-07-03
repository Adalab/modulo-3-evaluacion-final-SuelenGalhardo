function FiltersName({ searchName, ls, handleFilter }) {
  const handleSearchName = (eve) => {
    eve.preventDefault();
    //setSearchName(eve.target.value);
    handleFilter('name', eve.target.value);
    // ls.set('searchName', searchName);
  };
  return (
    <label className='main__label' htmlFor='name'>
      Nombre:
      <input
        className='main__input'
        type='text'
        placeholder='escribi el nombre personaje'
        id='name'
        htmlFor='name'
        value={searchName}
        onChange={handleSearchName}
      />
    </label>
  );
}
export default FiltersName;
