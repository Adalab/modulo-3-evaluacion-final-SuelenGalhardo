import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
import { useLocation, matchPath } from 'react-router-dom';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import ls from '../services/localStorage.js';
import Filters from './Filters';
import { Link } from 'react-router-dom';

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

  const { pathname } = useLocation();

  const routeData = matchPath('character/:characterId', pathname);

  const characterId = routeData?.params.characterId;
  //const characterId = routeData !== null ? routeData.params.characterId : '';

  const characterData = characterList.find((character) => character.id === parseInt(characterId));
  console.log(characterList);
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  searchName={searchName}
                  searchSpecies={searchSpecies}
                  filterList={filterList}
                  handleFilter={handleFilter}
                />
                <CharacterList characterList={filterList} />
              </>
            }
          />

          <Route
            path='/character/:characterId'
            element={<CharacterDetails characterData={characterData} />}
          />
          <Route
            path='*'
            element={
              <div className='error'>
                <p className='detail__error'>"Lo sentimos, esta página no existe"</p>
                <Link to='/' className='detail__link'>
                  Volver
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
