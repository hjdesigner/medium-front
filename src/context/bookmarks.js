import React, { useState, createContext } from 'react';
import { element } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postBookMarks, getBookMark, deleteBookMark, getBookMarkByLink } from 'utils';

const BookmarksContext = createContext();

function BookmarksProvider({ children }) {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const saveBookmark = async (data, event, sub) => {
    if (event === 'save') {
      const validateBookMark = await getBookMarkByLink(data.link);
      
      if (validateBookMark.length >=1) {
        return navigate('/my-bookmarks');
      }
      const field = {
        title: data.title,
        resume: data.resume,
        link: data.link,
        image: data.image,
        sub
      }
      const response = await postBookMarks(field);
      if (response) {
        return navigate('/my-bookmarks');
      }
    }
    const responseDelete = await deleteBookMark(data.id);

    if (responseDelete) {
      requestBookMark(sub);
    }
  }

  const requestBookMark = async (sub) => {
    const response = await getBookMark(sub);
    if (response) {
      setBookmarks(response);
      setLoading(false);
    }
  }

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        loading,
        saveBookmark,
        requestBookMark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

BookmarksProvider.propTypes = {
	children: element.isRequired
};

export { BookmarksProvider, BookmarksContext };
