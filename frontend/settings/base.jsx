import { createGlobalStyle } from "styled-components";
import { mainTheme } from "./themes";
import "swiper/css/bundle";
import "simplebar/dist/simplebar.min.css";

const {
  typography,
  colors: { primary },
} = mainTheme;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${typography.primary};
  }

  html {
    /* scroll-behavior: smooth; */
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior: contain;
    color: ${primary};
    min-height: 100vh;

    #__next {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
