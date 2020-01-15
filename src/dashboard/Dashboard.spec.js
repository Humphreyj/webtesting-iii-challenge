import React from 'react';
import { render } from '@testing-library/react';
import Dashboard, { closed, locked } from '../dashboard/Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';


it('Renders Dashboard', () => {
    const container = render(<Dashboard/>)
    container.findByText(/closed/i)
    container.findByText(/unlocked/i)
    render(<Display/>)
    render(<Controls/>)
})





