import React from 'react';
import { Section, Content, TextContent } from './styles.css';

import HairPhoto from '../../../assets/hair-photo-1-2-x.png';
import SexPhoto from '../../../assets/sex-photo-1-2-x.jpg';

const SectionTwo = () => (
  <Section>
    <h2>What we can help with</h2>
    <Content>
      <img src={HairPhoto} alt="hair" />
      <TextContent imgLeft>
        <div>01</div>
        <h4>HAIR LOSS</h4>
        <h3>
          Hair loss needn’t be
          <br />
          irreversible. We can help!
        </h3>
        <span>
          Hair loss needn’t be irreversible. There’s a
          <br />
          scientifically proven way that’s most effective in
          <br />
          keeping and regrowing your hair. It’s all to do with
          <br />
          blocking a pesky hormone called DHT. That’s the bad
          <br />
          guy behind hair loss. And you can keep him at bay.
          <br />
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
          <br />
          But no need to feel down!
        </h3>
        <span>
          There are plenty of reasons why you might be having
          <br />
          difficulty in the erection department. We can help
          <br />
          you figure out possible reasons why. And prescribe a
          <br />
          pill if needed.
        </span>
      </TextContent>
      <img src={SexPhoto} alt="sex" />
    </Content>
  </Section>
);
export default SectionTwo;
