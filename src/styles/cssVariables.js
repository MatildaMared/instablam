import { createGlobalStyle } from "styled-components";

const CSSVariables = createGlobalStyle`
  :root {
    --font-primary: "Open Sans", sans-serif;
    --font-secondary: "Lobster Two", cursive;

    --color-background: hsla(0, 0%, 7%, 1);
    --color-white: hsla(0, 0%, 85%, 1);
    --color-accent: rgba(221, 42, 123, 1);

    --gradient: linear-gradient(
		45deg,
		rgba(254, 218, 119, 1) 0%,
		rgba(245, 133, 41, 1) 25%,
		rgba(221, 42, 123, 1) 50%,
		rgba(129, 52, 175, 1) 75%,
		rgba(81, 91, 212, 1) 100%
	);

    --max-width: 800px;
  }
`;

export default CSSVariables;
