import React from 'react';
import { Section, Content, TextContent } from './styles.css';

import HairPhoto from '../../../assets/hair-photo-1-2-x.png';
import SexPhoto from '../../../assets/sex-photo-1-2-x.jpg';

const SectionTwo = () => (
  <Section>
    <h2>What we can help with</h2>
    <Content>
      <img data-testid="hair-photo" src={HairPhoto} alt="hair" />
      <TextContent imgLeft>
        <div>01</div>
        <h4>HAIR LOSS</h4>
        <h3>
          Hair loss needn’t be
          {'\n'}
          irreversible. We can help!
        </h3>
        <span>
          Hair loss needn’t be irreversible. There’s a
          {'\n'}
          scientifically proven way that’s most effective in
          {'\n'}
          keeping and regrowing your hair. It’s all to do with
          {'\n'}
          blocking a pesky hormone called DHT. That’s the bad
          {'\n'}
          guy behind hair loss. And you can keep him at bay.
          {'\n'}
          The choice is yours.
        </span>
      </TextContent>
    </Content>
    <Content>
      <TextContent>
        <div>02</div>
        <h4>Erectile Dysfunction</h4>
        <h3>
          Erections can be a tricky thing.
          {'\n'}
          But no need to feel down!
        </h3>
        <span>
          There are plenty of reasons why you might be having
          {'\n'}
          difficulty in the erection department. We can help
          {'\n'}
          you figure out possible reasons why. And prescribe a
          {'\n'}
          pill if needed.
        </span>
      </TextContent>
      <img data-testid="sex-photo" src={SexPhoto} alt="sex" />
    </Content>
  </Section>
);
export default SectionTwo;
