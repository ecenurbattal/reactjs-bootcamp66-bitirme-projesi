import React from 'react';
import Checkout from './Checkout';
import { render } from '@testing-library/react';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import CartContext from '../../contexts/CartContext';

const history = createMemoryHistory();
const state = 50
history.push("/", state);

const SimpleCheckout = () => {
    return (
        <Router history={history}>
            <Checkout/>
        </Router>
    )
}

const RenderWithCart = ({cart}) => {
    return(
        <CartContext.Provider value={{cart:cart}}>
            <SimpleCheckout/>
        </CartContext.Provider>
    )
}

const data = [
    {
        qty:2,
        product:{
            id:1,
            name:'test',
            image:'test-image',
            price:10.00,
        }
    },
]

describe('Checkout',() => {
    test('renders Checkout without crashing',() => {
        const wrapper = render(<SimpleCheckout/>)
        expect(wrapper).toBeTruthy();
    })

    test('checks content while cart is empty',() => {
        const {getByText} = render(<RenderWithCart cart={[]}/>);
        const checkoutContentText = getByText(/Sepetinizde ürün bulunmuyor/)

        expect(checkoutContentText).toBeInTheDocument();
    })

    test('checks content while cart is filled',() => {

        const {getByTestId,getByText} = render(<RenderWithCart cart={data}/>);
        const checkoutProductImage = getByTestId('checkoutItemImage');
        const checkoutProductName = getByText('test');
        const checkoutTotalPrice = getByText(/Toplam Tutar/)
        const checkoutItemTotalPrice = getByTestId('itemTotalPrice')
        
        expect(checkoutProductImage).toBeInTheDocument()
        expect(checkoutProductImage.tagName).toBe('IMG');

        expect(checkoutProductName).toBeInTheDocument();

        expect(checkoutItemTotalPrice).toBeInTheDocument()
        expect(checkoutItemTotalPrice.textContent).toEqual(`Toplam: ${(data[0].qty*data[0].product.price)} TL`)
        
        expect(checkoutTotalPrice).toBeInTheDocument();
        expect(checkoutTotalPrice.textContent).toEqual(`Toplam Tutar: ${(state).toFixed(2)} TL`)
    })
})