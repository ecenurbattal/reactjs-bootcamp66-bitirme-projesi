import React from 'react';
import CharacterDetails from './CharacterDetails';
import { render } from '@testing-library/react';


describe('Character Details',() => {
    test('renders Character Details without crashing', () => {
        const wrapper = render(<CharacterDetails/>)
        expect(wrapper).toBeTruthy();
    })

    test('renders with character data',() => {
        const characterData = {
            deck: 'testDeck',
            gender: 2,
            id: 1,
            image: {medium_url: "testUrl"},
            movies: [{name:'testMovie'}],
            name: 'testName',
            origin: {name:'testOrigin'},
            powers:[{name:'testPower'}],
            publisher: {name:'testPublisher'},
            real_name: 'testRN',
            team_enemies:[{name:'testEnemy'}],
            team_friends:[{name:'testFriend'}],
            teams: [{name:'testTeam'}],
            volume_credits: [{name:'testVolume'}]
        }

        const {getByText,getByTestId} = render(<CharacterDetails character={characterData}/>)

        const enemies = getByText(/testEnemy/)
        const friends = getByText(/testFriend/)
        const deck = getByText(/testDeck/)
        const gender = getByTestId('characterGender')
        const image = getByTestId('characterImage')
        const movies = getByText(/testMovie/)
        const name = getByText(/testName/)
        const origin = getByText(/testOrigin/)
        const powers = getByText(/testPower/)
        const publisher = getByText(/testPublisher/)
        const realName = getByText(/testRN/)
        const teams = getByText(/testTeam/)
        const volume = getByText(/testVolume/)

        expect(enemies).toBeInTheDocument();
        expect(friends).toBeInTheDocument();
        expect(deck).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
        expect(gender.textContent).toBe('Female');
        expect(image).toBeInTheDocument();
        expect(image.tagName).toBe('IMG');
        expect(movies).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(origin).toBeInTheDocument();
        expect(powers).toBeInTheDocument();
        expect(publisher).toBeInTheDocument();
        expect(realName).toBeInTheDocument();
        expect(teams).toBeInTheDocument();
        expect(volume).toBeInTheDocument();
    })
})