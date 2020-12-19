import React from 'react';
import {render} from '@testing-library/react';
import Footer from './Footer';

describe('Footer',() => {
    test('renders Footer without crashing',() => {
        const wrapper = render(<Footer/>)

        expect(wrapper).toBeTruthy();
    })
})