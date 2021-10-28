import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background: #4aa8d8;
  color: #fff;
  border: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  font-size: ${({ fontSize }) => fontSize}em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin: 5px;

  &:hover {
    background: #fff;
    color: #4aa8d8;
    ::before,
    ::after {
      width: 100%;
      transition: 800ms ease all;
    }
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #4aa8d8;
    transition: 400ms ease all;
  }
  ::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
`;

const Button = ({
  content,
  width = 280,
  height = 60,
  fontSize = 1.6,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} {...{ width, height, fontSize }}>
      {content}
    </StyledButton>
  );
};

export default Button;
