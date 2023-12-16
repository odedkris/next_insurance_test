import { describe, expect, test } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import Movies from "./Movies";

describe("test movies", () => {
  const movies = [
    {
      id: "215318",
      title: "Ace Ventura: When Nature Calls",
      image:
        "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
      rating: "6.4",
      released: "1995",
    },
    {
      id: "207856",
      title: "2001: A Space Odyssey",
      image:
        "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
      rating: "8.3",
      released: "1968",
    },
  ];

  const onChooseMovieHandler = jest.fn()

  test('renders right number of movies', () => {
    render(<Movies movies={movies} onChooseMovie={onChooseMovieHandler}/>)

    const moviesList = screen.getByTestId('movies-list')
    const {getAllByRole} = within(moviesList);
    const items = getAllByRole("listitem")

    expect(items.length).toBe(2);
  })

  test('renders the movies list in right order', () => {
    render(<Movies movies={movies} onChooseMovie={onChooseMovieHandler}/>)

    const moviesList = screen.getByTestId('movies-list')
    const {getAllByRole} = within(moviesList);
    const itemsList = getAllByRole("listitem")

    const items = itemsList.map(item => within(item).getByRole('heading').textContent)

    expect(items[0]).toBe(`${movies[0].title} (${movies[0].released})`);
    expect(items[1]).toBe(`${movies[1].title} (${movies[1].released})`);
  })
});
