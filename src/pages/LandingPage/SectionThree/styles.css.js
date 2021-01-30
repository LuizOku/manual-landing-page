import styled from 'styled-components';

export const Section = styled.section`
  background: #e5f5f4;
  padding: 80px 90px 0px 90px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    width: 80px;
    height: 75px;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  span {
    font-size: 12px;
    letter-spacing: 2.4px;
    color: #34d1d1;
    font-weight: bold;
    text-transform: uppercase;
  }
  ul {
    margin-top: 17px;
    display: ${(props) => (props.inLine ? 'flex' : 'block')}
  }
  li {
    width: max-content;
  }
  svg {
    margin-right: 30px;
  }
  a {
    font-size: 14px;
    line-height: 36px;
    letter-spacing: 0;
    text-decoration: none;
    color: #0c3c3d;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 26px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #6c6c6c4d;
  margin-top: 66px;
  span {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0;
    color: rgba(108, 108, 108, 0.5);
  }
`;
