import './App.css';
import { MovieCard } from './components/MovieCard';
import movies from './data/movies'

function App() {

  return (
    <div className="container">
    <div className="row">
     {
      movies.map((item,i) =><MovieCard key ={i}>{item}</MovieCard>)
     }
    </div>
    </div>
  );
}

export default App;
