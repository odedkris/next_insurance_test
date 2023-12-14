import { render, screen } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';

import Footer from "./Footer";

describe("Footer test", () => {
  test("renders next logo", () => {
    render(<Footer />);

    const next_logo = screen.getByAltText("logo");
    expect(next_logo).toBeInTheDocument();
  });

  test("renders media icons", () => {
    render(<Footer />);

    const mediaIcons = screen.queryAllByTestId("media-icon");
    // console.log(mediaIcons)
    expect(mediaIcons.length).toBe(5);
  });
});
