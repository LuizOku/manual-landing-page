import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../components';
import { Section, LeftSide } from './styles.css';

const SectionOne = () => {
  const history = useHistory();

  return (
    <Section>
      <LeftSide>
        <h1>
          BE GOOD
          {'\n'}
          TO YOURSELF
        </h1>
        <span>
          We’re working around the clock to bring you a
          {'\n'}
          holistic approach to your wellness. From top to
          {'\n'}
          bottom, inside and out.
        </span>
        <Button data-testid="quiz-button" onClick={() => history.push('/quiz')} width="200px">TAKE THE QUIZ</Button>
      </LeftSide>
    </Section>
  );
};
export default SectionOne;
