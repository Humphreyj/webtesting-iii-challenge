import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Dashboard, { closed, locked } from '../dashboard/Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';
import '@testing-library/jest-dom/extend-expect'


it('Renders Dashboard', () => {
    const {getByText,getByTestId} = render(<Dashboard/>)
    getByText('Open')
    getByText('Unlocked')
    
    
    expect(getByTestId('locked')).toHaveClass(`led green-led`);
})
//shows the controls and display
//defaults to unlocked and open

it('renders display and controls', () => {
    render(<Display/>);
    render(<Controls />);
})



