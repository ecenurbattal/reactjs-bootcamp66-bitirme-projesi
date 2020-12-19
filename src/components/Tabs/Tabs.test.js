import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from './Tabs';

const tabsData = [
    {
        header: () => 'testHeader',
        content: () => 'testContent',
        bgImage: () => 'testBgImage'
    }
]

const SimpleTabs = ({onIndexChange}) => {
    return (
        <Tabs onIndexChange={onIndexChange} tabs={tabsData}/>
    )
}

describe('Tabs', () => {
    test('renders Tabs without crashing',() => {
        const wrapper = render(<SimpleTabs/>)

        expect(wrapper).toBeTruthy();
    })

    test('triggers tab button click', () => {
        const mockFn = jest.fn();
        const {getByTestId} = render(<SimpleTabs onIndexChange={mockFn}/>)

        const tabButton = getByTestId('tabButton');
        
        userEvent.click(tabButton);
        expect(mockFn).toHaveBeenCalledTimes(1);
    })

    test('checks content state', () => {
        const {getByTestId} = render(<SimpleTabs/>)

        const tabContent = getByTestId('tabContent');

        expect(tabContent).toHaveStyle(`background: url(${tabsData[0].bgImage()})`)
    })
})
