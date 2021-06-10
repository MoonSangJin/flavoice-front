import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@media (max-width: 262px) {
  html {
    font-size: 14px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 15px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 17px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 18px;
  }
}
@media (min-width: 376px) and (max-width: 450px) {
  html {
    font-size: 18px;
  }
}
 
@media (min-width: 451px){
  html {
    font-size: 18px;
  }
} 
/* 
@media (max-width: 1024px){
  width : 768px;
}
@media (max-width: 768px){
  width: 100%;
} */


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
  max-width: 36rem;
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
