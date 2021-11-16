import { createGlobalStyle } from "styled-components";

const CSSVariables = createGlobalStyle`
  :root {
    --font-primary: "Open Sans", sans-serif;
    --font-secondary: "Lobster Two", cursive;

    --color-background: hsla(0, 0%, 7%, 1);
    --color-white: hsla(0, 0%, 85%, 1);
    --color-accent: hsla(331, 100%, 42%, 1.0);
  }
`;

export default CSSVariables;
