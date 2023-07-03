import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import ls from '../services/localStorage.js';
import Filters from './Filters';

function App() {
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [searchName, setSearchName] = useState(ls.get('characterList', ''));
  const [searchSpecies, setSearchSpecies] = useState('');

  useEffect(() => {
    if (ls.get('characters', null) === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);
        ls.set('characters', cleanData);
      });
    }
  }, []);

  //filter
  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchName(varValue);
    } else if (varName === 'especies') {
      setSearchSpecies(varValue);
    }
  };

  const filterList = characterList
    .filter((characterApi) => characterApi.name.toLowerCase().includes(searchName.toLowerCase()))

    .filter((characterApi) =>
      characterApi.species.toLowerCase().includes(searchSpecies.toLowerCase())
    );

  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <h1 className='main__title'>Rick and Morty</h1>
        <Filters
          searchName={searchName}
          searchSpecies={searchSpecies}
          filterList={filterList}
          handleFilter={handleFilter}
        />
        <CharacterList characterList={filterList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
