import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button',() => {
    test('renders button without crashing',() => {
        const {getByRole} = render(<Button/>);
        const button = getByRole('button');

        expect(button).toBeTruthy();
    })

    test('renders default button with text',() => {
        const {getByRole} = render(<Button text="Test"/>);
        const button = getByRole('button');

        expect(button.type).toBe('submit');
        expect(button.textContent).toBe('Test')
    })

    test('triggers onClick',() => {
        const mockFn = jest.fn();
        
        const {getByRole} = render(<Button onClick={mockFn}/>);
        const button = getByRole('button');
        
        userEvent.click(button);

        expect(mockFn).toHaveBeenCalledTimes(1);

    })
})