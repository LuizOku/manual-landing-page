import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
// import LandingPage from '../../pages/LandingPage';
import SectionOne from '../../pages/LandingPage/SectionOne';
import SectionTwo from '../../pages/LandingPage/SectionTwo';
import SectionThree from '../../pages/LandingPage/SectionThree';

describe('Testing the first section of the LandingPage', () => {
  it('should be able to show the h1 element', () => {
    render(<SectionOne />);
    const h1Element = screen.getByText(/BE GOOD TO YOURSELF/);

    expect(h1Element).toBeInTheDocument();
  });

  it('should be able to show the span element', () => {
    render(<SectionOne />);
    const spanElement = screen.getByText(
      /We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out./,
    );

    expect(spanElement).toBeInTheDocument();
  });

  it('should be able to show the button element', () => {
    render(<SectionOne />);
    const buttonElement = screen.getByTestId('quiz-button');

    expect(buttonElement).toBeInTheDocument();
  });
});

describe('Testing the second section of the LandingPage', () => {
  it('should be able to show the h4 elements', () => {
    render(<SectionTwo />);
    const h4Element = screen.getByText(/HAIR LOSS/);
    const h4ElementTwo = screen.getByText(/Erectile Dysfunction/);

    expect(h4Element).toBeInTheDocument();
    expect(h4ElementTwo).toBeInTheDocument();
  });

  it('should be able to show the h3 elements', () => {
    render(<SectionTwo />);
    const h3Element = screen.getByText(/Hair loss needn’t be irreversible. We can help!/);
    const h3ElementTwo = screen.getByText(/Erections can be a tricky thing. But no need to feel down!/);

    expect(h3Element).toBeInTheDocument();
    expect(h3ElementTwo).toBeInTheDocument();
  });

  it('should be able to show the span elements', () => {
    render(<SectionTwo />);
    const spanElement = screen.getByText(/Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours./);
    const spanElementTwo = screen.getByText(/There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed./);

    expect(spanElement).toBeInTheDocument();
    expect(spanElementTwo).toBeInTheDocument();
  });
  it('should be able to show the img elements', () => {
    render(<SectionTwo />);
    const imgElement = screen.getByTestId('hair-photo');
    const imgElementTwo = screen.getByTestId('sex-photo');

    expect(imgElement).toBeInTheDocument();
    expect(imgElementTwo).toBeInTheDocument();
  });
});

describe('Testing the third section of the LandingPage', () => {
  it('should be able to show the span elements', () => {
    render(<BrowserRouter><SectionThree /></BrowserRouter>);
    const spanElement = screen.getByText(/PRODUCT/);
    const spanElementTwo = screen.getByText(/COMPANY/);
    const spanElementThree = screen.getByText(/INFO/);
    const spanElementFour = screen.getByText(/FOLLOW US/);

    expect(spanElement).toBeInTheDocument();
    expect(spanElementTwo).toBeInTheDocument();
    expect(spanElementThree).toBeInTheDocument();
    expect(spanElementFour).toBeInTheDocument();
  });

  it('should be able to count the lis inside the uls', () => {
    render(<BrowserRouter><SectionThree /></BrowserRouter>);
    const ulProduct = screen.getByTestId('ul-product');
    const ulCompany = screen.getByTestId('ul-company');
    const ulInfo = screen.getByTestId('ul-info');
    const ulFollow = screen.getByTestId('ul-follow');

    expect(ulProduct).toBeInTheDocument();
    expect(ulProduct.children.length).toBe(4);
    expect(ulCompany).toBeInTheDocument();
    expect(ulCompany.children.length).toBe(4);
    expect(ulInfo).toBeInTheDocument();
    expect(ulInfo.children.length).toBe(4);
    expect(ulFollow).toBeInTheDocument();
    expect(ulFollow.children.length).toBe(3);
  });

  it('should be able to show the img', () => {
    render(<BrowserRouter><SectionThree /></BrowserRouter>);
    const footerSymblolElement = screen.getByTestId('footer-symblol');

    expect(footerSymblolElement).toBeInTheDocument();
  });
});
