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
        <Button onClick={() => history.push('/quiz')} width="200px">TAKE THE QUIZ</Button>
      </LeftSide>
    </Section>
  );
};
export default SectionOne;
