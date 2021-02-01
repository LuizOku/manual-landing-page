import { render, screen } from '@testing-library/react';

import React from 'react';
import { Button } from '../../components';

describe('Testing Button Component', () => {
  it('should be able to show the button component', () => {
    render(<Button />);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should be able to match snapshot', () => {
    render(<Button />);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toMatchSnapshot();
  });
});
