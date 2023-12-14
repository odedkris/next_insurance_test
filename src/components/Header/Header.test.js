import {describe, expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('testing Header', ()=> {
    test('renders logo ', () => {
        render(<Header />);

    })
})