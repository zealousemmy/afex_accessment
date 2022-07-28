import { createGlobalStyle } from "styled-components";

interface themeUse {
  theme: any;
}

export const GlobalStyles = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    }

    body{
        background: ${({ theme }: themeUse) => theme.body && theme.body};
        transition: all 1.5s linear;
    }
`;
