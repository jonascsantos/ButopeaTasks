import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/open-sans-v13-latin-regular.eot'); /* IE9 Compat Modes */
        src: local('Open Sans'), local('OpenSans'),
            url('../fonts/open-sans-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/open-sans-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/open-sans-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('../fonts/open-sans-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/open-sans-v13-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
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