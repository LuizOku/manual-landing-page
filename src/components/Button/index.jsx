import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles.css';

const Button = ({
  background, textColor, width, ...rest
}) => <StyledButton background={background} textColor={textColor} width={width} {...rest} />;

Button.propTypes = {
  background: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
};
Button.defaultProps = {
  background: '#34d1d1',
  textColor: '#ffffff',
  width: 'auto',
};

export default Button;
