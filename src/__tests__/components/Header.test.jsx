import { render, screen } from '@testing-library/react';

import React from 'react';
import { Header } from '../../components';

describe('Testing Header Component', () => {
  it('should be able to show the header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    const headerSymblolElement = screen.getByTestId('header-symblol');

    expect(headerElement).toBeInTheDocument();
    expect(headerSymblolElement).toBeInTheDocument();
  });
});
