import { render, screen, act } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import React from 'react';
import App from '../App';

describe('Testing the App root', () => {
  it('should be able to navigate to the quiz route', async () => {
    const promise = Promise.resolve();
    render(<BrowserRouter><App /></BrowserRouter>);
    act(() => {
      const quizButton = screen.getByTestId('quiz-button');
      userEvent.click(quizButton);
    });
    await act(() => promise);

    const quizContainer = screen.getByTestId('quiz-container');
    expect(quizContainer).toBeInTheDocument();
  });

  it('should be able to navigate back to the landing page after answering the quiz', async () => {
    const promise = Promise.resolve();
    render(<MemoryRouter initialEntries={['/', '/quiz']}><App /></MemoryRouter>);
    const quizOptions = screen.getByTestId('quiz-options');
    await act(() => promise);
    act(() => {
      userEvent.click(quizOptions?.children[0]);
    });
    act(() => {
      userEvent.click(quizOptions?.children[0]);
    });
    act(() => {
      userEvent.click(quizOptions?.children[0]);
    });
    const quizBackButton = screen.getByTestId('quiz-back-button');
    act(() => {
      userEvent.click(quizBackButton);
    });

    const titleSectionOneLabel = screen.getByText((content) => content.startsWith('BE GOOD') && content.endsWith('TO YOURSELF'));
    expect(titleSectionOneLabel).toBeInTheDocument();
  });
});
