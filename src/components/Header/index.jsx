import React from 'react';

import Symblol from '../../assets/manual-symblol.png';
import { Container } from './styles.css';

const Header = () => (
  <Container data-testid="header">
    <img data-testid="header-symblol" src={Symblol} alt="" />
  </Container>

);

export default Header;
