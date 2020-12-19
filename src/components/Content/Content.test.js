import React from 'react';
import {render} from '@testing-library/react';
import Content from './Content';
import { BrowserRouter as Router } from "react-router-dom";

const SimpleContent = () => {
    return (
        <Router>
            <Content></Content>
        </Router>
    )
}

describe('Content',() => {
    test('renders Content without crashing',() => {
        const wrapper = render(<SimpleContent/>)

        expect(wrapper).toBeTruthy();
    })
})