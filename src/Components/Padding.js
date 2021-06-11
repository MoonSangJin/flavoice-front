import React from 'react';
import styled, { css } from 'styled-components';

const PaddingBlock = styled.div`
  width: 100%;
  height: 1.6rem;

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;

const Padding = (props) => {
  return <PaddingBlock {...props} />;
};

export default Padding;
