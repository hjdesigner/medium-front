import React, { useState, createContext } from 'react';
import { element } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  postArticle,
  getAllArticle,
  deleteArticle,
  getIsAdmin,
  getArticleById,
  putArticleById,
  getAllPubishArticle,
  getAllCategoryArticle,
  getArticleByLink,
} from 'utils';

const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Draft');
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [articlesHome, setArticlesHome] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [featuredArticle, setFeaturedArticle] = useState({});
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingArticle, setLoadingArticle] = useState(true);

  const changeContent = (value) => setContent(value);
  const changeStatus = (value) => setStatus(value);
  const changeTitle = (value) => setTitle(value);
  const changeResume = (value) => setResume(value);
  const changeImage = (value) => setImage(value);
  const changeCategory = (value) => setCategory(value);

  const clearStateForm = () => {
    setContent('');
    setStatus('Draft');
    setTitle('');
    setResume('');
    setImage('');
    setCategory('');
  }

  /* eslint-disable */
  function friendlyUrl(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/([^\w]+|\s+)/g, '-')
      .replace(/\-\-+/g, '-')
      .replace(/(ˆ-+|-+$)/, '')
      .toLowerCase();
  }

  const handleSubmit = async (sub) => {
    const link = friendlyUrl(title);
    const response = await postArticle({
      content,
      status,
      title,
      resume,
      image,
      category,
      sub,
      link,
    });

    if (response) {
      clearStateForm();
      navigate('/my-account');
    }
  }

  const requestArticles = async (sub) => {
    const responseIsAdmin = await getIsAdmin(sub);
    if (responseIsAdmin && responseIsAdmin[0].isAdmin === true) {
      const responseArticle = await getAllArticle('');
      if (responseArticle) {
        setArticles(responseArticle);
      }
    } else {
      const response = await getAllArticle(sub);
      if (response) {
        setArticles(response);
      }
    }    
  }

  const requestDeletArticle = async (id, sub) => {
    const response = await deleteArticle(id);
    if (response) {
      requestArticles(sub);
    }
  }

  const getArticleEdit = async (id) => {
    clearStateForm();
    const response = await getArticleById(id);

    if (response) {
      setContent(response.content);
      setStatus(response.status);
      setTitle(response.title);
      setResume(response.resume);
      setImage(response.image);
      setCategory(response.category);
    }
  }

  
  const handleEditSubmit = async (id, sub) => {
    const link = friendlyUrl(title);
    const response = await putArticleById(id, {
      content,
      status,
      title,
      resume,
      image,
      category,
      sub,
      link,
    });

    if (response) {
      clearStateForm();
      navigate('/my-account');
    }
  }
  const requestPublishArticles = async (page) => {
    const response = await getAllPubishArticle(page);
    if (response) {
      setFeaturedArticle(response[0]);
      setArticlesHome(response);
    }
    setLoading(false);
  }
  const loadMorePublishArticles = async () => {
    const page = pageValue + 1;
    setLoadingMore(true);
    setPageValue(page);
    const response = await getAllPubishArticle(page);

    if (response) {
      if (response.length === 0) {
        setShowLoadMore(false);
        setPageValue(1);
        setLoadingMore(false);
        return;
      }
      const newArticles = articlesHome.concat(response);
      setArticlesHome(newArticles);
    }
    setLoadingMore(false);
  }
  const filterCategoryArticle = async (category) => {
    const response = await getAllCategoryArticle(category);
    if (response) {
      setArticlesHome(response);
      setShowLoadMore(false);
      setPageValue(1);
    }
  }

  const requestArticleByLink = async (link) => {
    const response = await getArticleByLink(link);
    if (response) {
      setArticle(response[0]);
    }
    setLoadingArticle(false);
  }

  const clearArticle = () => setArticle({});
  const clearPageValue = () => {
    setPageValue(1);
    setShowLoadMore(true);
  }

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        content,
        status,
        title,
        resume,
        image,
        category,
        articlesHome,
        showLoadMore,
        featuredArticle,
        article,
        loading,
        loadingMore,
        loadingArticle,
        changeContent,
        changeStatus,
        changeTitle,
        changeResume,
        changeImage,
        changeCategory,
        handleSubmit,
        requestArticles,
        requestDeletArticle,
        getArticleEdit,
        handleEditSubmit,
        clearStateForm,
        requestPublishArticles,
        loadMorePublishArticles,
        filterCategoryArticle,
        requestArticleByLink,
        clearArticle,
        clearPageValue,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

ArticlesProvider.propTypes = {
	children: element.isRequired
};

export { ArticlesProvider, ArticlesContext };
