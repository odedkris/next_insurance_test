import { describe, expect, test } from "@jest/globals";
import { getByTestId, render, screen } from "@testing-library/react";
import MovieItem from "./MovieItem";

describe("MovieItems", () => {
  const movie1 = {
    id: "215318",
    title: "Ace Ventura: When Nature Calls",
    image:
      "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
    rating: "6.4",
    released: "1995",
  };

  test('finds movie item be movie id', () => {
    render(<MovieItem movie={movie1}/>)

    const movieItem = screen.getByTestId(`article_${movie1.id}`)
    expect(movieItem).toBeInTheDocument();
  })

  test('finds movie item be movie id', () => {
    render(<MovieItem movie={movie1}/>)

    const movieImage = screen.getByTestId('movie-image')
    expect(movieImage.src).toEqual(movie1.image)
  })

  test('renders star icon in the rating section', () => {
    render(<MovieItem movie={movie1}/>)

    const ratingStarIcon = screen.getByTestId('star-icon')
    expect(ratingStarIcon.src).toEqual('http://localhost/star.svg')
  })

  test('renders the movie rating', () => {
    render(<MovieItem movie={movie1}/>)

    const rating = screen.getByTestId('rating')
    expect(rating).toHaveTextContent(`${movie1.rating}`)
  })

});
