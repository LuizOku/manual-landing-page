import React from 'react';
import Symblol from '../../../assets/manual-symblol.png';

import { Button } from '../../../components';
import { Section, LeftSide } from './styles.css';

const SectionOne = () => (
  <Section id="sec-one">
    <LeftSide>
      <img src={Symblol} alt="Symblol" />
      <h1>
        BE GOOD
        <br />
        TO YOURSELF
      </h1>
      <span>
        We’re working around the clock to bring you a
        <br />
        holistic approach to your wellness. From top to
        <br />
        bottom, inside and out.
      </span>
      <Button width="200px">TAKE THE QUIZ</Button>
    </LeftSide>
  </Section>
);
export default SectionOne;
