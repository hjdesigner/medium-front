import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header, Loader } from 'components';

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
const LoginTemplate = React.lazy(
  () => import('pages/login'),
);
const EditTemplate = React.lazy(
  () => import('pages/editArticle'),
);

function Main() {
  
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
        <Route path="/my-account" element={<MyAccountTemplate />} />
        <Route path="/new-article" element={<NewArticleTemplate />} />
        <Route path="/edit-article/:id" element={<EditTemplate />} />
        <Route path="/article/:id" element={<ArticleTemplate />} />
        <Route path="/my-bookmarkes" element={<MyBookmarksTemplate />} />
        <Route path="/login" element={<LoginTemplate />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default Main;
