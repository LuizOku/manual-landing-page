import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  h2 {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0;
    text-align: center;
    font-weight: normal;
    margin-bottom: 50px;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 70%;
`;

export const AnswerOption = styled.div`
  min-width: 100px;
  padding: 10px;
  border: 1px solid #6c6c6c;
  border-radius: 21px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  span {
    width: 100%;
    text-align: center;
  }
  &:hover {
    color: #34D1D0;
    border: 1px solid #34D1D0;
  }
`;
