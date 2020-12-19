import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignOut from './SignOut';

describe('SignOut', () => {
    test('renders SignOut without crashing', () => {
        const wrapper = render(<SignOut/>)

        expect(wrapper).toBeTruthy();
    })

    test('triggers SignOut click',() => {
        const {getByText} = render(<SignOut/>)

        const signOut = getByText(/Çıkış Yap/);

        userEvent.click(signOut);

        expect(window.location.href).toBe('http://localhost/')
    })
})