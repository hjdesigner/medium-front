import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from 'components';

const HomeTemplate = React.lazy(
  () => import('pages/home'),
);
const MyAccountTemplate = React.lazy(
  () => import('pages/myAccount'),
);
const NewArticleTemplate = React.lazy(
  () => import('pages/newArticle'),
);
const ArticleTemplate = React.lazy(
  () => import('pages/article'),
);
const MyBookmarksTemplate = React.lazy(
  () => import('pages/myBookmarks'),
);

function Main() {
  return (
    <Suspense fallback="Carregando...">
      <Header />
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
        <Route path="/my-account" element={<MyAccountTemplate />} />
        <Route path="/new-article" element={<NewArticleTemplate />} />
        <Route path="/article/:id" element={<ArticleTemplate />} />
        <Route path="/my-bookmarkes" element={<MyBookmarksTemplate />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default Main;
