import './App.css';

import Movies from './Components/Movies'
import MoviesFind from './Components/MoviesFind';

function App() {

  return (
    <div className="App">
      <header>
        <p>Wyszukaj filmy, które chcesz obejrzeć i dodaj je do ulubionych</p>
      </header>
      <MoviesFind />
      <main>
        <p>3 ulubione filmy</p>
        <Movies />
      </main>
    </div >
  );
}

export default App;
