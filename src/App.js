import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import { useState, useEffect} from "react";
import "./App.css";
import { Movie } from "./models/movie";
import MovieModal from "./components/MovieModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [choosedMovie, setChoosedMovie] = useState(null);
  const [loadedMovies, setLoadedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:3000/movies');
    
            if(!response.ok) {
                return 
            } 
    
            const movies = await response.json()
            movies.sort((a, b) => b.rating - a.rating)
            setLoadedMovies(movies)
        }

        fetchMovies()

    },[])

  const chooseMovieHandler = (movie) => {
    setChoosedMovie(movie);
    setShowModal(true);
  };

  const exitMovieHandler = () => {
    setChoosedMovie(null);
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <div className="page-title">
        <h1>Explore your next Movies and tv shows</h1>
      </div>
      <Movies movies={loadedMovies} onChooseMovie={chooseMovieHandler} />
      {showModal ? (
        <MovieModal movie={choosedMovie} onExit={exitMovieHandler} />
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
}

export default App;