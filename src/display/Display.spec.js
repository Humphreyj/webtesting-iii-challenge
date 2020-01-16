import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Display from './Display';
import Controls from '../controls/Controls';
import Dashboard from '../dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect'


it('displays if open/unlocked', () => {
    const container = render(<Display/>)
    const unlocked = container.getByText(/unlocked/i)
    const open = container.getByText(/open/i)
    expect(unlocked.textContent).toEqual('Unlocked')
    expect(open.textContent).toEqual('Open')
})

it('closes gate',  () => {
 const {getByText,findByText} = render(<Dashboard/>);

 act(() => {
     fireEvent.click(getByText('Close Gate'));
 })

 findByText(/Closed/);

 
})

it('locks gate',  () => {
    const {getByText,findByText} = render(<Dashboard/>);
   
    act(() => {
        fireEvent.click(getByText('Close Gate'));
        fireEvent.click(getByText('Lock Gate'));
    })
   
    findByText(/Locked/);
   })
   //displays if gate is open/closed and if it is locked/unlocked


it('cannot be opened if it is locked', () => {
    const {getByText,getByTestId} = render(<Dashboard/>);
   
    act(() => {
        fireEvent.click(getByText('Close Gate'));
        fireEvent.click(getByText('Lock Gate'));
        
    })
   
    expect(getByText('Closed').textContent).toEqual('Closed');
    expect(getByTestId('closed')).toHaveClass(`led red-led`);
   
})
//    cannot be opened if it is locked
//when locked or closed use the red-led class