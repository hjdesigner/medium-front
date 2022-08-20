import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from 'components';

const HomeTemplate = React.lazy(
  () => import('pages/home'),
);
const MyAccountTemplate = React.lazy(
  () => import('pages/myAccount'),
);

function Main() {
  return (
    <Suspense fallback="Carregando...">
      <Header />
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
        <Route path="/my-account" element={<MyAccountTemplate />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default Main;
