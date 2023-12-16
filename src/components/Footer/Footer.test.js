import { render, screen } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals';

import Footer from "./Footer";

describe("Footer test", () => {
  test("renders next logo", () => {
    render(<Footer />);

    const next_logo = screen.getByAltText("logo");
    expect(next_logo).toBeInTheDocument();
  });

  test("renders contact details ", () => {
    render(<Footer />);

    const title = screen.getByText('Contact us');
    expect(title).toBeInTheDocument();
  });

  test("renders media icons", () => {
    render(<Footer />);

    const mediaIcons = screen.queryAllByTestId("media-icon");
    expect(mediaIcons.length).toBe(5);
  });
});
