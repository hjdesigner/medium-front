import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components';

function Main() {
  return (
    <Suspense fallback="Carregando...">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </Suspense>
  );
}

export default Main;
