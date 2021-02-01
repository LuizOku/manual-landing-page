import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Symblol from '../../../assets/manual-symblol.png';

import {
  Section, Content, LinkColumn, ColumnsContainer, Footer,
} from './styles.css';

const SectionThree = () => (
  <Section>
    <Content>

      <img data-testid="footer-symblol" src={Symblol} alt="Symblol" />
      <ColumnsContainer>
        <LinkColumn>
          <span>
            PRODUCT
          </span>
          <ul data-testid="ul-product">
            <li><Link to="popular">Popular</Link></li>
            <li><Link to="trending">Trending</Link></li>
            <li><Link to="guided">Guided</Link></li>
            <li><Link to="products">Products</Link></li>
          </ul>
        </LinkColumn>
        <LinkColumn>
          <span>
            COMPANY
          </span>
          <ul data-testid="ul-company">
            <li><Link to="releases">Press Releases</Link></li>
            <li><Link to="mission">Mission</Link></li>
            <li><Link to="strategy">Strategy</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </LinkColumn>
        <LinkColumn>
          <span>
            INFO
          </span>
          <ul data-testid="ul-info">
            <li><Link to="support">Support</Link></li>
            <li><Link to="customer">Customer Service</Link></li>
            <li><Link to="guide">Get Started Guide</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </LinkColumn>
        <LinkColumn inLine>
          <span>
            FOLLOW US
          </span>
          <ul data-testid="ul-follow">
            <li><a aria-label="Facebook" href="https://www.facebook.com/manual.com.br" target="_blank" rel="noreferrer"><FaFacebookF size={20} /></a></li>
            <li><a aria-label="Twitter" href="https://twitter.com/MenofManual" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a></li>
            <li><a aria-label="Linkedin" href="https://www.linkedin.com/company/manualco" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a></li>
          </ul>

        </LinkColumn>
      </ColumnsContainer>
    </Content>
    <Footer><span>© 2019 Manual. All rights reserved.</span></Footer>
  </Section>
);

export default SectionThree;
