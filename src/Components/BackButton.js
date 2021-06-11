import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/paletts';
import Text from './Text';

const BackButton = () => {
  return (
    <>
      <Container>
        <Text hover>Back</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100px;
  background-color: ${palette.orange};
`;
export default BackButton;
