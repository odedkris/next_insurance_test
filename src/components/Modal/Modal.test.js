import { describe, expect, test } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import MovieModal from "./MovieModal";
import userEvent from '@testing-library/user-event'

describe("Movie Modal test", () => {
  const movie1 = {
    id: "215318",
    title: "Ace Ventura: When Nature Calls",
    image:
      "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
    synopsis:
      "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
    rating: "6.4",
    released: "1995",
    runtime: "1h34m",
    largeimage:
      "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
  };

  test("renders movie modal", () => {
    render(<MovieModal movie={movie1}/>);
    const movieModal = screen.getByText(movie1.title);
    expect(movieModal).toBeInTheDocument();
  });

  test("renders movie poster", () => {
    render(<MovieModal movie={movie1}/>);
    const moviePoster = screen.getByAltText('movie poster');    
    expect(moviePoster.src).toBe(movie1.largeimage)
  });

  test("renders movie poster", () => {
    let exit =false
    const onExit = jest.fn(() => {
        exit = true;
    })

    render(<MovieModal movie={movie1} onExit={onExit}/>);
    
    const exitButton = screen.getByRole('button');

    userEvent.click(exitButton);

    expect(onExit).toHaveBeenCalledTimes(1)
    expect(exit).toBe(true)
  });
});
