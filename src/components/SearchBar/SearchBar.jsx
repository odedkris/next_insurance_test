import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

const SearchBar = (props) => {
    const [input, setInput] = useState("");
    const [options, setOptions] = useState(props.movies)
    const allMovies = props.movies

    const handleChange = (value) => {
        const suggestOptions = allMovies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()))

        setInput(value);
        setOptions(suggestOptions);
        props.setResults(suggestOptions)
    };

    return (
        <form action="submit" className="search-Form">
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input
                    placeholder="Type to search a film..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>

        </form>
    )
};

export default SearchBar;