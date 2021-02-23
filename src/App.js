import './App.css';
import MoviesFind from './Components/MoviesFind';

function App() {

  return (
    <div className="App">
      <header>
        <p>Wyszukaj film o którym chcesz się dowiedzieć więcej.</p>
      </header>
      <MoviesFind />
    </div >
  );
}

export default App;
