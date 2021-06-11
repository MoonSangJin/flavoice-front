import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/styles/paletts';

const LineBlock = styled.div`
  width: 100%;
  height: 1px;
  background: ${palette.gray[100]};

  ${(props) =>
    props.orange &&
    css`
      background: ${palette.orange};
    `}
`;

const Line = (props) => {
  return <LineBlock {...props} />;
};

export default Line;
