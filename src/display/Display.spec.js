import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Display from './Display';
import Controls from '../controls/Controls';

it('displays if open/unlocked', () => {
    const container = render(<Display/>)
    const unlocked = container.getByText(/unlocked/i)
    const open = container.getByText(/open/i)
    expect(unlocked.textContent).toEqual('Unlocked')
    expect(open.textContent).toEqual('Open')
})

it('closes gate', () => {
    const container = render(<Display />)
    const wrapper = render(<Controls />)
    const open = container.getByText('Open');
    const close = wrapper.getByText('Close Gate');
    act(() => {
        fireEvent.click(close);
    })

    expect(open.textContent).toEqual('Closed');

})