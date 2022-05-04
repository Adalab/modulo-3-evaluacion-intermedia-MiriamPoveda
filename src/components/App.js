import '../styles/App.scss';
import friendsPhrases from '../data/friends.json';
import {useEffect, useState} from 'react';
import getQuotes from '../services/fetch';

function App() {

  // Variables de estado 

  /* Fetch con LS */
  const [quotes, setQuotes] = useState(localStorage.get('quotes', []));
  /* Lista de frases */
  const [data, setData] = useState(friendsPhrases);
  /* Añadir frase */
  const [addPhrase, setAddPhrase] = useState({
    quote: '',
    character: '',
  });
  /* Filtrar por frase */
  const [searchQuote, setSearchQuote] = useState('');
  /* Filtrar por personaje */
  const [searchCharacter, setSearchCharacter] = useState('All');

  // Funciones

  /* Fetch */
  /* Añadir LS */
  useEffect(() => {
    if (quotes.length === 0){
    getQuotes().then(datafromAPI => {
      setQuotes(datafromAPI);
  });
}
  }, []);

  /* Pintar los datos de la lista facilitada */
  /* Filtrar por frase */ /* Filtrar por personaje */
  const paintData = data
  .filter((searchFilter) => 
    searchFilter.quote.toLowerCase().includes(searchQuote.toLowerCase())
  )
  .filter((searchFilter) => {
    if (searchCharacter === 'All') {
      return true;
    } else if (searchCharacter === searchFilter.character) {
      return true;
    } else {
      return false;
    }
  })
  // .filter((searchFilter) => 
  //   searchFilter.character.includes(searchCharacter) 
  // )
  .map((phrases, index) =>
    <li key={index}>
      <p className="ulData__liQuote">{phrases.quote}</p>
      <p className="ulData__liCharacter">{phrases.character}</p>
    </li>
  );

  /* Añadir nueva frase (INPUT de TEXT) */
  /* Añadir LS */
  const handleAdd = (ev) => {
    setAddPhrase({
      ...addPhrase,
      [ev.target.name]: ev.target.value,
    });
    localStorage.set('quotes', quotes);
    setQuotes(addPhrase);
    console.log(addPhrase);
  }

  /* Añadir nueva frase (INPUT de SUBMIT) */
  /* Limpiar INPUT al añadirla */
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([
      ...data, addPhrase
    ]);
    setAddPhrase({
      quote: '',
      character: '',
    });
  }

  /* Filtrar por frase */
  const handleFilterQuote = (ev) => {
    setSearchQuote(ev.target.value);
  }

  /* Filtrar por personaje */
  const handleFilterCharacter = (ev) => {
    setSearchCharacter(ev.target.value);
  }

  // HTML 

  return (
    <div>
      <header className="header">
        <h1>Frases de Friends</h1>
        <form>
        <label htmlFor="phrase">Filtrar por frase</label>
          <input 
          type="text" 
          name="phrase" 
          placeholder="Busca tu frase favorita" 
          value={searchQuote}
          onChange={handleFilterQuote}/>
          <label htmlFor="figure">Filtrar por personaje</label>
          <select name="figures" id="figures" value={searchCharacter} onChange={handleFilterCharacter}>
            <option value='All'>All</option>
            <option value='Ross'>Ross</option>
            <option value='Monica'>Monica</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Chandler'>Chandler</option>
            <option value='Rachel'>Rachel</option>
          </select>
        </form>
      </header>
      <main>
        <ul className="ulData">
          {paintData}
        </ul>
        <form className="form">
        <h2>Añadir una nueva frase</h2>
          <label htmlFor="quote">Frase</label>
          <input 
          type="text" 
          name="quote" 
          placeholder="Añade una frase" 
          value={addPhrase.quote} 
          onChange={handleAdd}/>
          <label htmlFor="character">Personaje</label>
          <input 
          type="text" 
          name="character" 
          placeholder="Personaje" 
          value={addPhrase.character} 
          onChange={handleAdd}/>
          <input 
          type="submit" 
          value="Añadir una nueva frase" 
          onClick={handleClick}/>
        </form>
      </main>
    </div>
  );
}

export default App;
