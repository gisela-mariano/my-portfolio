import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #root{
    width: 100%;
    height: 100%;
  }

  :root{
    --azul-escuro: rgba(6, 8, 61, 1);
    --azul-claro: rgba(31, 141, 219, 1);
    --pink: rgba(244, 42, 139, 1);
    --roxo: rgba(69, 34, 119, 1);
    --gradiente: linear-gradient(90deg, #F42A8B 0%, #1F8CDB 100%);
    --gradiente-reverso: linear-gradient(90deg, #1F8CDB 0%, #F42A8B 100%);
    --gradiente-vertical: linear-gradient(180deg, #F42A8B 0%, #1F8CDB 100%);
  }

  body{
    font-family: 'Roboto Mono', monospace;

    background-color: var(--azul-escuro);
    color: white;

    cursor: default;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
      background: var(--azul-escuro);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--pink);
      border-radius: 3px;
    }
  }

  a{
    text-decoration: none;
  }
`;


export default GlobalStyle;