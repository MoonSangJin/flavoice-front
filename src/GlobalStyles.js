import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
${reset}
body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: black;
  color: #EFEFEF;
}
`;
