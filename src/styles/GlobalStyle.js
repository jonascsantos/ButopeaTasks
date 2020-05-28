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

    /* Carousel Style Override */
    .carousel {
        position: relative;
        width: 100%;
    }

    .carousel .thumbs-wrapper {
    margin: 20px 0;
    overflow: hidden;
}
    .carousel .thumbs {
        transition: all .15s ease-in;
        transform: translate3d(0, 0, 0);
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: space-between;
        flex-direction: row;
    }

    .carousel .thumb {
        transition: border .15s ease-in;
        display: inline-flex;
        white-space: nowrap;
        overflow: hidden;
        border: 3px solid #fff;
        padding: 2px;
        margin: 0;
    }

    .carousel .thumb.selected, .carousel .thumb:hover {
        border: 2px solid #333;
    }

`;

export default GlobalStyle;
