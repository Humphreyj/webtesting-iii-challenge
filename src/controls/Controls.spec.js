import React from 'react';
import { render, getByTestId, fireEvent, act } from '@testing-library/react';
import Controls from '../controls/Controls';
import Dashboard from '../dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect'

it('renders control buttons', () => {

    const {getByTestId} =  render(<Controls/>)
    getByTestId('locker');
    getByTestId('closer');
})
//provide buttons to toggle the closed and locked states.

it('changes button content on state change', () => {
    const {getByTestId} = render(<Dashboard />);
    act(() => {
        fireEvent.click(getByTestId('closer'));
    })

    expect(getByTestId('closer')).toHaveTextContent('Open Gate');

})
//buttons' text changes to reflect the state the door will be in if clicked

it('locks gate disables closed',  () => {
    const {getByText,findByText,getByTestId} = render(<Dashboard/>);
   
    act(() => {
        fireEvent.click(getByTestId('closer'));
        
    })
    act(() => {
        
        fireEvent.click(getByTestId('locker'));
    })
    expect(getByTestId('closer')).toHaveTextContent('Open Gate');
    expect(getByTestId('locker')).toHaveTextContent('Unlock Gate');
    expect(getByTestId('closer')).toBeDisabled();
   })

// the closed toggle button is disabled if the gate is locked


it('renders control buttons', () => {

    const {getByTestId} =  render(<Dashboard/>)
    expect(getByTestId('locker')).toBeDisabled();
})
// the locked toggle button is disabled if the gate is open