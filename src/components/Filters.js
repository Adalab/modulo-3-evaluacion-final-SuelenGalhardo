import '../styles/layout/form.scss';
import FilterSpecies from './FilterSpecies';
import FiltersName from './FiltersName';

function Filters({ handleFilter, searchName, searchSpecies, filterList }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderNotFound = () => {
    if (searchName && filterList.length === 0) {
      return (
        <p className='main__notFound'>
          No hay ningún personaje que coincida con el texto "{searchName}"
        </p>
      );
    }
    return null;
  };
  return (
    <form className='main__form' onSubmit={handleSubmit}>
      <h1 className='main__h1'>Filtrar por...:</h1>

      <FiltersName searchName={searchName} handleFilter={handleFilter} />
      <FilterSpecies searchSpecies={searchSpecies} handleFilter={handleFilter} />

      {renderNotFound()}
    </form>
  );
}

export default Filters;
