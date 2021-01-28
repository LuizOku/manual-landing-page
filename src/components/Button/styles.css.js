import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.textColor};
  border-radius: 49.5px;
  border: none;
  width: ${(props) => props.width};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2.4px;
  font-size: 12px;
  font-weight: bold;
`;
