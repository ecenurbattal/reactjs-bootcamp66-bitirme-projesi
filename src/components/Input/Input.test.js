import React, { useState } from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

const SimpleInput = () => {
    const [value,setValue] = useState('');
    
    return (<Input value={value} onChange={(event) => {setValue(event.target.value)}}/>)
}

describe('Input',() => {
    test('renders input without crashing', () => {
        const {getByDisplayValue} = render(<Input value="Test" onChange={()=>{}}/>)
        const input = getByDisplayValue(/Test/)

        expect(input).toBeTruthy();
    })

    test('trigger OnChange',() => {
        const {container} = render(<SimpleInput/>)
        const inputElement = container.querySelector('input');

        expect(inputElement.value).toBe('');
        userEvent.type(inputElement,'testOnChange');
        expect(inputElement.value).toBe('testOnChange')
    })
});