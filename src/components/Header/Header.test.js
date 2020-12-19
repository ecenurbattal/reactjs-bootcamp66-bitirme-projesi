import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import SessionContext from '../../contexts/SessionContext';

const SimpleHeader = () => {
    return(
        <Router>
            <Header/>
        </Router>
    )
}

const RenderWithAuth = () => {
    return (
        <SessionContext.Provider value={{isAuthenticated:true}}>
            <SimpleHeader/>
        </SessionContext.Provider>
    )
}

describe('Header',() => {
    test('renders Header without crashing',() => {
        const wrapper = render(<SimpleHeader/>)

        expect(wrapper).toBeTruthy();

    })

    test('renders without authentication',() => {
        const {getByText} = render(<SimpleHeader/>)
        
        const login = getByText(/Giriş Yap/);
        const register = getByText(/Kayıt Ol/)

        expect(login).toBeInTheDocument();
        expect(register).toBeInTheDocument();
    })

    test('renders with authentication',() => {
        const {getByText,getByRole} = render(<RenderWithAuth/>)

        const cart = getByRole('cartButton')
        const signOut = getByText(/Çıkış Yap/)

        expect(cart).toBeInTheDocument();
        expect(signOut).toBeInTheDocument();
    })
})