import MovieItem from "../MovieItem/MovieItem";
import "./ResultsList.css";

const ResultsList = (props) => {
  return (
    <div className="results-list">
      {props.results.map((movie) => {
        return <li key={movie.id}><MovieItem movie={movie}/> </li>;
      })}
    </div>
  );
};

export default ResultsList;