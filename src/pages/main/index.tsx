import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from 'components';

const HomeTemplate = React.lazy(
  () => import('pages/home'),
);

function Main() {
  return (
    <Suspense fallback="Carregando...">
      <Header />
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default Main;
