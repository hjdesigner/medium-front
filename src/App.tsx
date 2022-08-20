import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'utils';

const MainPage = lazy(() => import('pages/main'));

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    order: 1;
    justify-content: space-between;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
  }
`;

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainPage />
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
