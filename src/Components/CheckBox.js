import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Check = styled.div`
  width: ${({ fontSize }) => fontSize}px;
  height: ${({ fontSize }) => fontSize}px;
  border: 1px solid black;
  margin-right: 10px;
  ${({ selected }) => selected && `background: black;`}
`;
export default ({ value, onClick, fontSize = 20 }) => {
  return (
    <>
      <Container onClick={onClick}>
        <Check selected={value} fontSize={fontSize} />
      </Container>
    </>
  );
};
