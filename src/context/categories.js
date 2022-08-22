import React, { useState, createContext } from 'react';
import { element } from 'prop-types';
import { getCategories } from 'utils';

const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const requestCategories = async () => {
    const response = await getCategories();
    if (response) {
      setCategories(response);
    }
  }

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        requestCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

CategoriesProvider.propTypes = {
	children: element.isRequired
};

export { CategoriesProvider, CategoriesContext };
