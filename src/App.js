import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";
import MovieModal from "./components/Modal/MovieModal";
import { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [choosedMovie, setChoosedMovie] = useState(null);

  const chooseMovieHandler = (movie) => {
    setChoosedMovie(movie);
    setShowModal(true);
  };

  const exitMovieHandler = () => {
    setChoosedMovie(null);
    setShowModal(false);
  };

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:3000/movies');
            
            if(!response.ok) {
                throw new Error('No movies found')
            } 
            
            const movies = await response.json()
            movies.sort((a, b) => Number(b.rating) - Number(a.rating))
            setLoadedMovies(movies)
            setMoviesToShow(movies)
        }

        fetchMovies()

    },[])

  return (
    <div>
      <Header movies={loadedMovies} onSearchMovie={setMoviesToShow}/>
      <div className="page-title">
        <h1>Explore your next Movies and tv shows</h1>
      </div>
      <Movies movies={moviesToShow} onChooseMovie={chooseMovieHandler}/>
      {showModal && <MovieModal movie={choosedMovie} onExit={exitMovieHandler} />}
      <Footer />
    </div>
  );
}

export default App;