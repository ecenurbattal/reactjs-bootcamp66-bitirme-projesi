import React from 'react';
import {render} from '@testing-library/react';
import Container from './Container';

describe('Container',() => {
    test('renders Container without crashing',() => {
        const wrapper = render(<Container/>)

        expect(wrapper).toBeTruthy();
    })
})