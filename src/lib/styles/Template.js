import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 376px) and (max-width: 412px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 413px) and (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 451px){
  html {
    font-size: 13px;
  }
}


::-webkit-scrollbar {
  display: none;
} 

input {
  /* -webkit-appearance: none; */
}

html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  position: relatvie;
`;

const WhiteBox = styled.div`
  width: 100vw;
  max-width: 37.5rem;
  min-height: 100vh;
  background-color: white;
  position: relatvie;
  margin: 0 auto;
`;

const Gray = styled.div`
  flex: 1;
  background-color: #ccc;
  z-index: 100;
`;

const Template = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <TemplateBlock>
        <Gray />
        <WhiteBox>{children}</WhiteBox>
        <Gray />
      </TemplateBlock>
    </>
  );
};

export default Template;
