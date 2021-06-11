import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/paletts';
import Text from './Text';

const BackButton = ({ width = 50, height = 30 }) => {
  return (
    <>
      <Container {...{ width, height }}>
        <Text hover>Back</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${palette.orange};
  color: #fff;
  border: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin: 5px;

  &:hover {
    background: #fff;
    color: ${palette.orange};
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
    background: ${palette.orange};
    transition: 400ms ease all;
  }
  ::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
`;
export default BackButton;
