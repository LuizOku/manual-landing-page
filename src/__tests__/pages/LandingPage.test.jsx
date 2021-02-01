import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import SectionOne from '../../pages/LandingPage/SectionOne';
import SectionTwo from '../../pages/LandingPage/SectionTwo';
import SectionThree from '../../pages/LandingPage/SectionThree';

describe('Testing the first section of the LandingPage', () => {
  it('should be able to show the elements of the first section', () => {
    render(<SectionOne />);
    const titleLabel = screen.getByText(/BE GOOD TO YOURSELF/);
    const descriptionLabel = screen.getByText(
      /We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out./,
    );
    const quizButton = screen.getByTestId('quiz-button');

    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(quizButton).toBeInTheDocument();
  });
});

describe('Testing the second section of the LandingPage', () => {
  it('should be able to show the elements of the second section', () => {
    render(<SectionTwo />);
    const hairTitleLabel = screen.getByText(/HAIR LOSS/);
    const erectileTitleLabel = screen.getByText(/Erectile Dysfunction/);
    const hairSubLabel = screen.getByText(/Hair loss needn’t be irreversible. We can help!/);
    const erectileSubLabel = screen.getByText(/Erections can be a tricky thing. But no need to feel down!/);
    const hairDescriptionLabel = screen.getByText(/Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours./);
    const erectileDescriptionLabel = screen.getByText(/There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed./);
    const hairPhoto = screen.getByTestId('hair-photo');
    const sexPhoto = screen.getByTestId('sex-photo');

    expect(hairTitleLabel).toBeInTheDocument();
    expect(erectileTitleLabel).toBeInTheDocument();
    expect(hairSubLabel).toBeInTheDocument();
    expect(erectileSubLabel).toBeInTheDocument();
    expect(hairDescriptionLabel).toBeInTheDocument();
    expect(erectileDescriptionLabel).toBeInTheDocument();
    expect(hairPhoto).toBeInTheDocument();
    expect(sexPhoto).toBeInTheDocument();
  });
});

describe('Testing the third section of the LandingPage', () => {
  it('should be able to show the elements of the third section', () => {
    render(<BrowserRouter><SectionThree /></BrowserRouter>);
    const productTitleLabel = screen.getByText(/PRODUCT/);
    const companyTitleLabel = screen.getByText(/COMPANY/);
    const infoTitleLabel = screen.getByText(/INFO/);
    const followTitleLabel = screen.getByText(/FOLLOW US/);
    const ulProduct = screen.getByTestId('ul-product');
    const ulCompany = screen.getByTestId('ul-company');
    const ulInfo = screen.getByTestId('ul-info');
    const ulFollow = screen.getByTestId('ul-follow');
    const footerSymblol = screen.getByTestId('footer-symblol');

    expect(productTitleLabel).toBeInTheDocument();
    expect(companyTitleLabel).toBeInTheDocument();
    expect(infoTitleLabel).toBeInTheDocument();
    expect(followTitleLabel).toBeInTheDocument();
    expect(ulProduct).toBeInTheDocument();
    expect(ulProduct.children.length).toBe(4);
    expect(ulCompany).toBeInTheDocument();
    expect(ulCompany.children.length).toBe(4);
    expect(ulInfo).toBeInTheDocument();
    expect(ulInfo.children.length).toBe(4);
    expect(ulFollow).toBeInTheDocument();
    expect(ulFollow.children.length).toBe(3);
    expect(footerSymblol).toBeInTheDocument();
  });
});
