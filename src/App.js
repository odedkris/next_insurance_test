import Header from "./components/Header/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer/Footer";
import { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:3000/movies');
    
            if(!response.ok) {
                return 
            } 
    
            const movies = await response.json()
            movies.sort((a, b) => b.rating - a.rating)
            setLoadedMovies(movies)
            setMoviesToShow(movies)
        }

        fetchMovies()

    },[])

  return (
    <div>
      <Header movies={loadedMovies} onSearchMovie={setMoviesToShow}/>
      {/* {moviesToShow.length > 0 && <ResultsList results={moviesToShow}/>} */}
      <div className="page-title">
        <h1>Explore your next Movies and tv shows</h1>
      </div>
      <Movies movies={moviesToShow} />
      <Footer />
    </div>
  );
}

export default App;