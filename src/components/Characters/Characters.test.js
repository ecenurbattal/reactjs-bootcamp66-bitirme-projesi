import React from 'react';
import CharacterItem from './CharacterItem';
import Characters from './Characters';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Characters',() => {
    test('renders Characters without crashing',() => {
        const wrapper = render(<Characters/>)
        expect(wrapper).toBeTruthy();
    })
});

describe('CharacterItem',() => {
    const characterData = {
        name:'testName',
        deck:'testDeck',
        image:{medium_url:'testImage'}
    }
    test('renders CharacterItem without crashing',() => {
        const wrapper = render(<CharacterItem/>)
        expect(wrapper).toBeTruthy();
    })

    test('renders with character data',() => {
        const {getByText,getByTestId} = render(<CharacterItem character={characterData}/>)

        const name = getByText(/testName/);
        const deck = getByText(/testDeck/);
        const image = getByTestId('characterItemImage')

        expect(name).toBeInTheDocument();
        expect(deck).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(image.tagName).toBe('IMG');
    })

    test('triggers onShowDetail',() => {
        const mockFn = jest.fn();

        const {getByTestId} = render(<CharacterItem character={characterData} onShowDetail={mockFn}/>)
        
        const card = getByTestId('characterCardWrapper');
        userEvent.click(card);
        expect(mockFn).toHaveBeenCalledTimes(1);
    })

    describe('checks HR tag',() => {
        test('checks HR tag with empty deck',() => {
            const {container} = render(<CharacterItem character={{
                ...characterData,
                deck:null,
            }}/>)

            const hrElement = container.querySelector('hr');

            expect(hrElement).not.toBeInTheDocument();
        })

        test('checks HR tag with filled deck',() => {
            const {container} = render(<CharacterItem character={characterData}/>)

            const hrElement = container.querySelector('hr');

            expect(hrElement).toBeInTheDocument();
        })
    })
})