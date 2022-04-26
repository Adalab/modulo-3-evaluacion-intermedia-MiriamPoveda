import '../styles/App.scss';
import friendsPhrases from '../data/friends.json';
import {useState} from 'react';

function App() {

  // Variables de estado 

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
  const [searchCharacter, setSearchCharacter] = useState('');

  // Funciones

  /* Pintar los datos de la lista facilitada */
  /* Filtrar por frase */ /* Filtrar por personaje */
  const paintData = data
  .filter((searchFilter) => 
    searchFilter.quote.toLowerCase().includes(searchQuote.toLowerCase())
  )
  .filter((searchFilter) => 
    searchFilter.character.includes(searchCharacter) 
  )
  .map((phrases, index) =>
    <li key={index}>
      <p>{phrases.quote}</p>
      <p>{phrases.character}</p>
    </li>
  );

  /* Añadir nueva frase (INPUT de TEXT) */
  const handleAdd = (ev) => {
    setAddPhrase({
      ...addPhrase,
      [ev.target.name]: ev.target.value,
    });
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
      <header>
        <h1>Frases de Friends</h1>
        <form>
        <label htmlFor="phrase">Filtrar por frase</label>
          <input 
          type="text" 
          name="phrase" 
          placeholder="Añade una frase" 
          value={searchQuote}
          onChange={handleFilterQuote}/>
          <label htmlFor="figure">Filtrar por personaje</label>
          <select name="figures" id="figures" value={searchCharacter} onChange={handleFilterCharacter}>
            <option>All</option>
            <option>Ross</option>
            <option>Monica</option>
            <option>Joey</option>
            <option>Phoebe</option>
            <option>Chandler</option>
            <option>Rachel</option>
          </select>
        </form>
      </header>
      <main>
        <ul>
          {paintData}
        </ul>
        <div>
          <h2>Añadir una nueva frase</h2>
        <form>
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
        </div>
      </main>
    </div>
  );
}

export default App;
