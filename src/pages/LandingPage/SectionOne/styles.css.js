import styled from 'styled-components';
import backSectionOne from '../../../assets/hair-cat-header.png';

export const Section = styled.section`
  background: url(${backSectionOne}) no-repeat;
  background-position: center;
  z-index: 100;
  padding-left: 90px;
  padding-top: 30px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 60%;
  img{
    width: 40px;
    height: 38px;
    margin-bottom: 90px;
  }

  h1 {
    font-size: 82px;
    line-height: 98px;
    letter-spacing: 0;
    z-index: 2;
  }
  span {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    z-index: 2;
    margin: 30px 0;
  }
`;
