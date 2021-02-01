import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import Questionnaire from '../../pages/Questionnaire';

describe('Testing the Quiz', () => {
  it('should be able to show the question', async () => {
    const promise = Promise.resolve();
    render(<Questionnaire />);
    const quizQuestion = screen.getByTestId('quiz-question');
    await act(() => promise);

    expect(quizQuestion).toBeInTheDocument();
  });

  it('should be able to show the possible answers', async () => {
    const promise = Promise.resolve();
    render(<Questionnaire />);
    const quizOptions = screen.getByTestId('quiz-options');
    await act(() => promise);

    expect(quizOptions?.children.length).toBeGreaterThan(0);
  });

  it('should be able to answer a question', async () => {
    const promise = Promise.resolve();
    render(<Questionnaire />);
    const quizOptions = screen.getByTestId('quiz-options');
    const quizQuestion = screen.getByTestId('quiz-question');
    await act(() => promise);
    const firstQuestion = quizQuestion.innerHTML;
    act(() => {
      userEvent.click(quizOptions?.children[0]);
    });
    const secondQuestion = quizQuestion.innerHTML;

    expect(firstQuestion !== secondQuestion).toBeTruthy();
  });
});

describe('Testing specific cases for the hair loss quiz', () => {
  it('should be able to show the result of the quiz', async () => {
    const promise = Promise.resolve();
    render(<Questionnaire />);
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
    const quizResult = screen.getByTestId('quiz-result');

    expect(quizResult).toBeInTheDocument();
  });

  it('should be able to show the great result', async () => {
    const promise = Promise.resolve();
    render(<Questionnaire />);
    const quizOptions = screen.getByTestId('quiz-options');
    await act(() => promise);
    act(() => {
      userEvent.click(quizOptions?.children[0]);
    });
    act(() => {
      userEvent.click(quizOptions?.children[1]);
    });
    act(() => {
      userEvent.click(quizOptions?.children[1]);
    });
    const quizResult = screen.getByTestId('quiz-result');

    expect(quizResult.innerHTML === 'Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!').toBeTruthy();
  });

  it('should be able to show the bad result', async () => {
    const promise = Promise.resolve();
    render(<Questionnaire />);
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
    const quizResult = screen.getByTestId('quiz-result');

    expect(quizResult.innerHTML === 'Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.').toBeTruthy();
  });
});
