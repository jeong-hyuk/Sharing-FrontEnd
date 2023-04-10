import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

//reset
*{margin:0; padding:0;}
  li{list-style:none;}
  img{border:0; vertical-align:top;}

  //a link
  a{text-decoration:none;}
  a:link, a:visited, a:hover, a:active{color:#333;}

  *{
    font-size: 62.5%;
  }
  /* @font-face {
    font-family: 'PilseungGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/PilseungGothic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'PilseungGothic';
    padding-top: 1em;
    white-space: pre-wrap;
    text-align: center;
  }

  ul, ol {
    list-style: none;
    padding-left: 0px;
<<<<<<< Updated upstream
  } *///reset
  *{margin:0; padding:0;}
  li{list-style:none;}
  img{border:0; vertical-align:top;}

  //a link
  a{text-decoration:none;}
  a:link, a:visited, a:hover, a:active{color:#333;}

  *{
    font-size: 62.5%;
  }
=======
  } */
>>>>>>> Stashed changes
`;

export default GlobalStyle;
