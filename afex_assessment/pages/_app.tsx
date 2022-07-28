import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Image from "next/image";
import ComX from "../assets/comX.png";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/themes";
import { useState } from "react";
import { GlobalStyles } from "../lib/GlobalStyle/globalstyle";

interface themeState {
  PrimaryColor: string;
  SecondaryColor: string;
}

const GlobalStyle = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
}
.styledImage{
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  width: 10%;
  display: flex;
  margin: 0 auto;
  z-index: 0;
}
div{
  width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

`;
function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(false);

  const current: themeState = state
    ? theme.ColorDarkMode
    : theme.ColorLightMode;

  const HandleThemeProvider: () => void = () => {
    setState(!state);
  };

  return (
    <ThemeProvider theme={current}>
      <GlobalStyle />
      <div className="styledImage">
        <Image src={ComX} height={100} width={200} />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
