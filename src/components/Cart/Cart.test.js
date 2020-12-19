import React from 'react';
import Cart from './Cart';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartContext from '../../contexts/CartContext';

//content'in style'ını control et
//counter için bir data oluşturup increment'de sayının arttığını, decrement'de azaldığını control et.


const RenderCartContent = ({cart}) => {
    return(
        <CartContext.Provider value={{cart:cart}}>
            <Cart/>
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

describe('Cart',() => {
    test('renders Cart without crashing',() => {
        const wrapper = render(<Cart/>)
        expect(wrapper).toBeTruthy();
    });

    test('checks content state',() => {
        const {getByRole,getByTestId} = render(<Cart/>)
        const cartButton = getByRole('cartButton')
        const cartContent = getByTestId('cartContent');

        expect(cartContent).toHaveStyle('visibility: hidden')
        userEvent.click(cartButton);
        expect(cartContent).toHaveStyle('visibility: visible')
    })

    test('checks content while cart is empty',() => {
        const {getByText} = render(<RenderCartContent cart={[]}/>);
        const cartContentText = getByText(/Sepetinize henüz bir ürün eklemediniz./)
        const cartTotalPrice = getByText(/Toplam Tutar/);

        expect(cartContentText).toBeInTheDocument();
        
        expect(cartTotalPrice).toBeInTheDocument();
        expect(cartTotalPrice.textContent).toEqual(`Toplam Tutar: ${(0).toFixed(2)}`)
    })

    test('checks content while cart is filled',() => {

        const {getByTestId,getByText} = render(<RenderCartContent cart={data}/>);
        const cartProductImage = getByTestId('cartProductImage');
        const cartProductName = getByText('test');
        const cartTotalPrice = getByText(/Toplam Tutar/)
        
        expect(cartProductImage).toBeInTheDocument()
        expect(cartProductImage.tagName).toBe('IMG');

        expect(cartProductName).toBeInTheDocument();

        expect(cartTotalPrice).toBeInTheDocument();
        expect(cartTotalPrice.textContent).toEqual(`Toplam Tutar: ${(data[0].qty*data[0].product.price).toFixed(2)}`)
    })

})