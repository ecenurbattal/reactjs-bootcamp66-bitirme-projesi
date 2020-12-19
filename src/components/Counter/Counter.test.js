import React, { useState } from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

const CounterWithIncAndDec = () => {
    const [value,setValue] = useState(5);

    return (
        <Counter
            value={value}
            onIncrement={() => {setValue(value+1)}}
            onDecrement={() => {setValue(value-1)}}
        />
    )
}

describe('Counter',() => {
    test('renders Counter without crashing',() => {
        const wrapper = render(<Counter value='test'/>)
        
        expect(wrapper).toBeTruthy();
    })


    test('trigger OnIncrement',() => {
        const {getByTestId,getByRole} = render(<CounterWithIncAndDec/>)

        const counterValue = getByTestId('counterValue');
        const counterIncrement = getByRole('counterIncrement')

        expect(counterValue.textContent).toBe('5');

        userEvent.click(counterIncrement);
        expect(counterValue.textContent).toBe('6');

    })

    test('trigger OnDecrement',() => {
        const {getByTestId,getByRole} = render(<CounterWithIncAndDec/>)

        const counterValue = getByTestId('counterValue');
        const counterDecrement = getByRole('counterDecrement')

        expect(counterValue.textContent).toBe('5');

        userEvent.click(counterDecrement);
        expect(counterValue.textContent).toBe('4');
    })
})