import styled from 'styled-components';

export const Section = styled.section`
  background: #ffffff;
  padding: 80px 90px 30px 90px;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0;
    text-align: center;
    font-weight: normal;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 60px;
  align-self: center;
  img {
    z-index: 3;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: ${(props) => (props.imgLeft ? 70 : 0)}px;
  padding-right: ${(props) => (props.imgLeft ? 0 : 70)}px;
  text-align: ${(props) => (props.imgLeft ? 'start' : 'end')};
  position: relative; 
  div {
    position: absolute; 
    top: -100; 
    left: ${(props) => (props.imgLeft ? -140 : -65)}px;; 
    bottom: 0; 
    z-index: 1;
    color: #eeeeee;
    font-size: 427px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
  h3 {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0;
    font-weight: normal;
    margin: 15px 0;
    z-index: 2;
  }
  h4 {
    font-size: 12px;
    letter-spacing: 2.4px;
    color: #34d1d1;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 2;
  }
  span {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: normal;
    z-index: 2;
  }
`;
