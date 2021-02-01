import styled from 'styled-components';
import backSectionOne from '../../../assets/hair-cat-header.png';

export const Section = styled.section`
  background: url(${backSectionOne}) no-repeat;
  background-position: right;
  padding: 30px 90px 90px 90px;
  @media only screen and (max-width: 1400px) {
    background-position: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 60%;
  h1 {
    font-size: 82px;
    line-height: 98px;
    letter-spacing: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
  span {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    margin: 40px 0;
  }
`;
