import {describe, expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('testing Header', ()=> {
    test('renders logo ', () => {
        render(<Header />);

        const logo = screen.queryByTestId('header-logo')
        expect(logo.src).toBe('http://localhost/Logo2.png')
    })

    test('renders search', () => {
        render(<Header />);

        const headerMainSection = screen.queryByTestId('header-main')
        expect(headerMainSection).toBeInTheDocument()
    })
})