import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'utils';
import { UserProvider } from 'context';
import { Loader } from 'components';

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
  const { isLoading } = useAuth0();
    
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>        
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <UserProvider>
            <MainPage />
          </UserProvider>          
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
