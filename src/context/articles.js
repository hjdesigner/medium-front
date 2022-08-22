import React, { useState, createContext } from 'react';
import { element } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postArticle, getAllArticle, deleteArticle, getIsAdmin, getArticleById, putArticleById } from 'utils';

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

  const handleSubmit = async (sub) => {
    const response = await postArticle({
      content,
      status,
      title,
      resume,
      image,
      category,
      sub,
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
    const response = await putArticleById(id, {
      content,
      status,
      title,
      resume,
      image,
      category,
      sub,
    });

    if (response) {
      clearStateForm();
      navigate('/my-account');
    }
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
