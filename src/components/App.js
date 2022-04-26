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

  // Funciones

  /* Pintar los datos de la lista facilitada */
  const paintData = data.map((phrases, index) =>
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

  // HTML 

  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <ul>
          {paintData}
        </ul>
        <div>
          <h2>Añadir una nueva frase</h2>
        <form>
          <label htmlFor=""></label>
          <input type="text" name="quote" placeholder="Añade una frase" value={addPhrase.quote} onChange={handleAdd}/>
          <label htmlFor=""></label>
          <input type="text" name="character" placeholder="Personaje" value={addPhrase.character} onChange={handleAdd}/>
          <input type="submit" value="Añadir una nueva frase"/>
        </form>
        </div>
      </main>
    </div>
  );
}

export default App;
