import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
//import ls from '../services/localStorage.js';

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    //if (localStorage.getItem('characters') === null)
    // {
    getDataFromApi().then((cleanData) => {
      setCharacterList(cleanData);
      //ls.set('characters', cleanData);
    });
  }, []);

  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <CharacterList characterList={characterList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
