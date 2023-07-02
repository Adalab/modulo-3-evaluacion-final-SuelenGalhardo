import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import ls from '../services/localStorage.js';
import Form from './Form';

function App() {
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [searchName, setSearchName] = useState(ls.get('characterList', ''));

  useEffect(() => {
    if (ls.get('characters', null) === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);
        ls.set('characters', cleanData);
      });
    }
  }, []);

  //filter
  const handleSearchName = (eve) => {
    eve.preventDefault();

    setSearchName(eve.target.value);
    ls.set('searchName', searchName);
  };

  const filterList = characterList.filter((characterApi) =>
    characterApi.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <h1 className='main__title'>Rick and Morty</h1>
        <Form handleSearchName={handleSearchName} />
        <CharacterList characterList={filterList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
