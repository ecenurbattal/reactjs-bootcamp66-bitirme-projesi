import React, { useState } from 'react';
import {render,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

const SimpleSearchBar = () => {
    const [value,setValue] = useState('');

    return (
        <SearchBar
            value={value}
            onInputChange={(event) => {setValue(event.target.value)}}
        />
    )
}

describe('Search Bar',() => {
    test('renders Search Bar without crashing', () => {
        const wrapper = render(<SearchBar/>)

        expect(wrapper).toBeTruthy();
    })

    test('triggers onChange',() => {
        const {container} = render(<SimpleSearchBar/>)
        const inputElement = container.querySelector('input');

        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,'testOnChange');
        expect(inputElement.value).toBe('testOnChange')

    })

    test('triggers onButtonClick',() => {
        const mockFn = jest.fn();

        const {getByRole} = render(<SearchBar onButtonClick={mockFn}/>)
        const button = getByRole('button')

        userEvent.click(button)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })

    describe('triggers onKeyPress',() => {
        test('triggers onKeyPress with empty value',() => {
            const mockFn = jest.fn();

            const {getByPlaceholderText} = render(<SearchBar placeHolder='test' onKeyPress={mockFn}/>)
    
            const input = getByPlaceholderText('test');
            
            fireEvent.keyDown(input,{key:'Enter', code:13})
            expect(mockFn).not.toHaveBeenCalled()
        })
        test('triggers onKeyPress with filled value',() => {
            const mockFn = jest.fn();

            const {getByPlaceholderText} = render(<SearchBar placeHolder='test' onKeyPress={mockFn}/>)
    
            const input = getByPlaceholderText('test');

            userEvent.type(input,'test')
            fireEvent.keyDown(input,{key:'Enter', code:13})
            expect(mockFn).toHaveBeenCalled()
        })
    })
})

// userEvent.type(input,'test')
//         fireEvent.keyDown(input, {key:'Enter', code:13})
//         expect(mockFn).toHaveBeenCalledTimes(1);