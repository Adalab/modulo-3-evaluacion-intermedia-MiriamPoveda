import '../styles/App.scss';
import friendsPhrases from '../data/friends.json';

function App() {
  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <ul></ul>
        <div>
          <h2>Añadir una nueva frase</h2>
        <form>
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <input type="submit" value="Añadir una nueva frase"/>
        </form>
        </div>
      </main>
    </div>
  );
}

export default App;
