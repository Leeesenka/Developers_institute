import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  return (
    <div >
      <header >
      <MovieList/>
      <MovieDetails/>
      </header>
    </div>
  );
}

export default App;
