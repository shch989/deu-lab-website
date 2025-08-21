import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  a { color: ${({ theme }) => theme.colors.link}; text-decoration: none; }
  a:hover { text-decoration: underline; }

  h1, h2, h3 { margin: 0; line-height: 1.2; font-weight: 800; }
  ul { margin: 0; padding: 0; list-style: none; }
  button { font: inherit; border: 0; background: none; cursor: pointer; }
`;
export default GlobalStyle;