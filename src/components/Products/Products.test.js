import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from './Products';
import ProductItem from './ProductItem';
import SessionContext from '../../contexts/SessionContext';

const productData = {
    name:'testName',
    price:10.00,
    createdBy:'testUser',
    image:'testImage',
}

const RenderWithUser = ({username}) => {
    return (
        <SessionContext.Provider value={{user:{username:username}}}>
            <ProductItem product={productData}/>
        </SessionContext.Provider>
    )
}

describe('Products',() => {
    test('renders Products without crashing',() => {
        const wrapper = render(<Products/>)
        expect(wrapper).toBeTruthy();
    })
});

describe('ProductItem', () => {

    test('renders with product data',() => {
        const {getByText,getByTestId} = render(<ProductItem product={productData}/>)

        const name = getByText(/testName/);
        const image = getByTestId('productImage')
        const price = getByText(/TL/);
        const createdBy = getByText(/testUser/);

        expect(name).toBeInTheDocument()
        
        expect(image).toBeInTheDocument();
        expect(image.tagName).toBe('IMG');

        expect(price).toBeInTheDocument();
        expect(price.textContent).toBe(`${productData.price} TL`);

        expect(createdBy).toBeInTheDocument();
    })

    test('triggers onAddToCart',() => {
        const mockFn = jest.fn();

        const {getByText} = render(<ProductItem product={productData} onAddToCart={mockFn}/>)

        const button = getByText(/Sepete Ekle/)
        userEvent.click(button)
        expect(mockFn).toHaveBeenCalledTimes(1);
    })

    describe('checks Add to cart button',() => {
        test('checks Add to cart button when logged in and created user are different',() => {
            const {container} = render(<RenderWithUser username='differentUser'/>)
            const button = container.querySelector('button')

            expect(button).toBeInTheDocument();
        })

        test('checks Add to cart button when logged in and created user are same',() => {
            const {container} = render(<RenderWithUser username='testUser'/>)
            const button = container.querySelector('button')

            expect(button).not.toBeInTheDocument();
        })
    })
})
