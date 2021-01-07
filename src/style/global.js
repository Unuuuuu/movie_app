import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: black;
        text-decoration: none;
        outline: none
    }

    body{
        ${(props) => `background-color:${props.theme.palette.gray}`}
    }

    ul{
        padding-left: 1em
    }

`;

export default GlobalStyle;
