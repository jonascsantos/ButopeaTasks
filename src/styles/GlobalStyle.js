import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/open-sans-v13-latin-regular.eot'); /* IE9 Compat Modes */
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html,
    body {
        height: 100vh;
        font-family: "Open Sans";
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
    }

    html {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
