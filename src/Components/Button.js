import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;

  &:hover {
    background: #fff;
    color: #1aab8a;
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
    background: #1aab8a;
    transition: 400ms ease all;
  }
  ::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
`;

const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

export default Button;
